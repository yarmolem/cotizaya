import Head from 'next/head'

// terceros
import { toast } from 'react-toastify'

// utils
import { useForm } from '@/hooks/useForm'

// styles
import styles from '@/styles/components/ingresa/ingresa.module.scss'
import Eye from '@/svg/Eye'
import { useState } from 'react'
import SlashEye from '@/svg/SlashEye'

const RegistroPersona = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { form, handleChange } = useForm({
    name: '',
    email: '',
    password: '',
    telefono: ''
  })

  const isAllFill = () => {
    return (
      form.name.trim() !== '' &&
      form.email.trim() !== '' &&
      form.password.trim() !== '' &&
      form.telefono.trim() !== ''
    )
  }

  const filledInput = (name = '') => {
    return form[name].trim() !== '' ? styles.filled : ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Registro Exitoso')
  }

  return (
    <div>
      <Head>
        <title>Cotizaya | Registrate</title>
      </Head>

      <div className="container">
        <div className={styles.registrate}>
          <h3>REGISTRE SUS DATOS</h3>

          <form className={styles.registrate_form} onSubmit={handleSubmit}>
            <div className={`${styles.input} ${filledInput('name')}`}>
              <input
                required
                name="name"
                type="text"
                id="clientName"
                value={form.name}
                onChange={handleChange}
              />
              <label htmlFor="clientName">Nombre completo</label>
            </div>

            <div className={`${styles.input} ${filledInput('telefono')}`}>
              <input
                required
                name="telefono"
                type="text"
                id="clientPhone"
                value={form.telefono}
                onChange={handleChange}
              />
              <label htmlFor="clientPhone">Teléfono</label>
            </div>

            <div className={`${styles.input} ${filledInput('email')}`}>
              <input
                required
                name="email"
                type="email"
                id="clientEmail"
                value={form.email}
                onChange={handleChange}
              />
              <label htmlFor="clientEmail">E-mail</label>
            </div>

            <div className={`${styles.input} ${filledInput('password')}`}>
              <input
                required
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="clientPassword"
                value={form.password}
                onChange={handleChange}
              />
              <label htmlFor="clientPassword">Clave</label>
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

export default RegistroPersona
