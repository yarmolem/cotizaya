import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// terceros
import { useFormik } from 'formik'
import { toast } from 'react-toastify'

// utils
import Eye from '@/svg/Eye'
import SlashEye from '@/svg/SlashEye'
import useAuth from '@/hooks/useAuth'
import { handleError } from 'src/utils/handleError'
import { useRegistroMutation } from '../generated/graphql'
import { registerSchema } from '@/validation/registerSchema'

// styles
import styles from '@/styles/components/ingresa/ingresa.module.scss'
import Error from '@/components/Error'

const initialReg = {
  nombre: '',
  correo: '',
  celular: '',
  password: '',
  tipoUsuario: 2,
  imagenPrincipal: 1
}

const RegistroPersona = () => {
  const { login } = useAuth()
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  const [registerMutation] = useRegistroMutation({
    onError: handleError
  })

  const formik = useFormik({
    onSubmit: async (values) => {
      const res = await registerMutation({
        variables: { input: { ...values } }
      })
      if (res?.data?.Registro) {
        console.log(res)
        const { __typename, imagenPrincipal, ...rest } = res.data.Registro
        login(rest)
        router.push('/')
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

  const isAllFill = () => {
    const { correo, password, nombre, celular } = formik.values
    return (
      nombre.trim() !== '' &&
      celular.trim() !== '' &&
      correo.trim() !== '' &&
      password.trim() !== ''
    )
  }

  const filledInput = (name = '') => {
    return formik.values[name].trim() !== '' ? styles.filled : ''
  }

  return (
    <div>
      <Head>
        <title>Cotizaya | Registrate</title>
      </Head>

      <div className="container">
        <div className={styles.registrate}>
          <h3>REGISTRE SUS DATOS</h3>

          <form
            className={styles.registrate_form}
            onSubmit={formik.handleSubmit}
          >
            <div>
              <div className={`${styles.input} ${filledInput('nombre')}`}>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                />
                <label htmlFor="nombre">Nombre completo</label>
              </div>
              <Error {...formik} name="nombre" />
            </div>

            <div>
              <div className={`${styles.input} ${filledInput('correo')}`}>
                <input
                  id="correo"
                  type="email"
                  name="correo"
                  value={formik.values.correo}
                  onChange={formik.handleChange}
                />
                <label htmlFor="correo">Email</label>
              </div>
              <Error {...formik} name="correo" />
            </div>
            <div>
              <div className={`${styles.input} ${filledInput('celular')}`}>
                <input
                  id="celular"
                  type="text"
                  name="celular"
                  value={formik.values.celular}
                  onChange={formik.handleChange}
                />
                <label htmlFor="celular">Celular</label>
              </div>
              <Error {...formik} name="celular" />
            </div>

            <div>
              <div className={`${styles.input} ${filledInput('password')}`}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <label htmlFor="password">Clave</label>
                <button
                  type="button"
                  className="btn-icon"
                  onClick={() => setShowPassword((p) => !p)}
                >
                  {showPassword ? <SlashEye /> : <Eye />}
                </button>
              </div>
              <Error {...formik} name="password" />
            </div>

            <button
              type="submit"
              disabled={!isAllFill()}
              className="btn btn-primary"
            >
              CONTINUAR
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistroPersona
