import { useState } from 'react'
import Eye from '../../svg/Eye'
import SlashEye from '../../svg/SlashEye'

// styles
import styles from './authblock.module.scss'

const RegisterForm = ({ formik, toggleAuth }) => {
  const [showPassword, setShowPassword] = useState(false)

  const isAllFill = () => {
    const { correo, password } = formik.values
    return correo.trim() !== '' && password.trim() !== ''
  }

  const filledInput = (name = '') => {
    return formik.values[name].trim() !== '' ? styles.filled : ''
  }

  return (
    <div className={styles.ingresa}>
      <h3>REGISTRATE</h3>

      <form onSubmit={formik.handleSubmit} className={styles.ingresa_form}>
        <div className={`${styles.input} ${filledInput('nombre')}`}>
          <input
            required
            id="nombre"
            type="text"
            name="nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
          />
          <label htmlFor="nombre">Nombre completo</label>
        </div>
        <div className={`${styles.input} ${filledInput('correo')}`}>
          <input
            required
            id="correo"
            type="email"
            name="correo"
            value={formik.values.correo}
            onChange={formik.handleChange}
          />
          <label htmlFor="correo">Email</label>
        </div>
        <div className={`${styles.input} ${filledInput('celular')}`}>
          <input
            required
            id="celular"
            type="text"
            name="celular"
            value={formik.values.celular}
            onChange={formik.handleChange}
          />
          <label htmlFor="celular">Celular</label>
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
      <div>
        <p style={{ textAlign: 'center' }}>o puedes</p>
      </div>
      <button
        onClick={toggleAuth}
        style={{ width: '100%' }}
        className="btn btn-outline-secundary"
      >
        INGRESAR
      </button>
    </div>
  )
}

export default RegisterForm
