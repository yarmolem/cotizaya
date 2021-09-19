import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'

// utils
import Eye from '@/svg/Eye'
import useAuth from '@/hooks/useAuth'
import SlashEye from '@/svg/SlashEye'
import { handleError } from '../utils/handleError'
import { loginSchema } from '@/validation/loginSchema'
import { useLoginMutation } from '../generated/graphql'

// styles
import styles from '@/styles/components/ingresa/ingresa.module.scss'

const Ingresa = () => {
  const router = useRouter()
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)

  const [loginMutation] = useLoginMutation({
    onError: handleError
  })

  const formik = useFormik({
    onSubmit: async (values) => {
      const res = await loginMutation({ variables: { input: { ...values } } })
      if (res?.data?.login) {
        const { __typename, imagenPrincipal, ...rest } = res.data.login
        login(rest)
        router.push('/')
      }
    },
    validationSchema: loginSchema,
    initialValues: { correo: '', password: '' }
  })

  const isAllFill = () => {
    const { correo, password } = formik.values
    return correo.trim() !== '' && password.trim() !== ''
  }

  const filledInput = (name = '') => {
    return formik.values[name].trim() !== '' ? styles.filled : ''
  }

  return (
    <div>
      <Head>
        <title>Cotizaya | Ingreso</title>
      </Head>

      <div className="container">
        <div className={styles.ingresa}>
          <h3>INGRESA</h3>

          <form className={styles.ingresa_form} onSubmit={formik.handleSubmit}>
            <div className={`${styles.input} ${filledInput('correo')}`}>
              <input
                required
                id="correo"
                name="correo"
                type="email"
                value={formik.values.correo}
                onChange={formik.handleChange}
              />
              <label htmlFor="correo">Email</label>
            </div>

            <div className={`${styles.input} ${filledInput('password')}`}>
              <input
                required
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

export default Ingresa
