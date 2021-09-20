import { useState } from 'react'
import { useFormik } from 'formik'
// import { useRouter } from "next/router"

// Components
import LoginForm from './LoginForm'
import { toast } from 'react-toastify'

// utils
import useAuth from '../../hooks/useAuth'
import { handleError } from '../../utils/handleError'
import { useLoginMutation, useRegistroMutation } from '../../generated/graphql'
import { loginSchema } from '../../validation/loginSchema'

// styles
import styles from './authblock.module.scss'
import { registerSchema } from '../../validation/registerSchema'
import RegisterForm from './RegisterForm'

const initialLog = {
  correo: '',
  password: ''
}

const initialReg = {
  nombre: '',
  correo: '',
  celular: '',
  password: '',
  tipoUsuario: 2,
  imagenPrincipal: 1
}

const AuthBlock = ({ isOpen, onToggle = () => {} }) => {
  // const router = useRouter()
  const { login } = useAuth()
  const [isLogin, setIsLogin] = useState(true)

  const [loginMutation] = useLoginMutation({
    onError: handleError
  })
  const [registerMutation] = useRegistroMutation({
    onError: handleError
  })

  const logFormik = useFormik({
    onSubmit: async (values) => {
      const res = await loginMutation({ variables: { input: { ...values } } })
      if (res?.data?.login) {
        const { __typename, imagenPrincipal, ...rest } = res.data.login
        login(rest)
        onToggle()
        toast.success('Login Exitoso')
      } else {
        const error = res.errors.graphQLErrors[0].debugMessage
        if (error === 'CUENTA_DESACTIVADA') {
          toast.error('Correo o contraseña invalido')
        }
      }
    },
    enableReinitialize: true,
    initialValues: initialLog,
    validationSchema: loginSchema
  })
  const regFormik = useFormik({
    onSubmit: async (values) => {
      const res = await registerMutation({
        variables: { input: { ...values } }
      })
      if (res?.data?.Registro) {
        console.log(res)
        const { __typename, imagenPrincipal, ...rest } = res.data.Registro
        login(rest)
        onToggle()
        toast.success('Registro Exitoso')
      } else {
        const error = res.errors.graphQLErrors[0].debugMessage
        if (error === 'YA_EXISTE') {
          toast.error('Correo ya esta siendo utilizado')
        }
      }
    },
    enableReinitialize: true,
    initialValues: initialReg,
    validationSchema: registerSchema
  })

  const toggleAuth = () => {
    setIsLogin((l) => !l)
  }

  const renderLogin = () => {
    const Login = () => <LoginForm formik={logFormik} toggleAuth={toggleAuth} />

    const Register = () => (
      <RegisterForm formik={regFormik} toggleAuth={toggleAuth} />
    )

    return (
      <div className={styles.modal}>
        <div className={styles.modal_overlay} />
        <div className={styles.modal_content}>
          {isLogin ? Login() : Register()}
        </div>
      </div>
    )
  }

  return isOpen ? renderLogin() : null
}

export default AuthBlock
