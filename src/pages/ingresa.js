import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// utils
import Eye from '@/svg/Eye'
import SlashEye from '@/svg/SlashEye'
import { useForm } from '@/hooks/useForm'

// styles
import styles from '@/styles/components/ingresa/ingresa.module.scss'

const Ingresa = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const { form, handleChange } = useForm({
    email: '',
    password: ''
  })

  const isAllFill = () => {
    return form.email.trim() !== '' && form.password.trim() !== ''
  }

  const filledInput = (name = '') => {
    return form[name].trim() !== '' ? styles.filled : ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <div>
      <Head>
        <title>Cotizaya | Ingreso</title>
      </Head>

      <div className="container">
        <div className={styles.ingresa}>
          <h3>INGRESA</h3>

          <form
            className={styles.ingresa_form}
            onSubmit={handleSubmit}
          >
            <div className={`${styles.input} ${filledInput('email')}`}>
              <input
                required
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className={`${styles.input} ${filledInput('password')}`}>
              <input
                required
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
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
            <button type="submit" disabled={!isAllFill()} className="btn btn-primary">
              CONTINUAR
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Ingresa
