import { useState } from 'react'
import Eye from '../../svg/Eye'
import SlashEye from '../../svg/SlashEye'
import Error from '../Error'

// styles
import styles from './authblock.module.scss'

const LoginForm = ({ formik, toggleAuth }) => {
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
      <h3>INGRESA</h3>

      <form onSubmit={formik.handleSubmit} className={styles.ingresa_form}>
        <div>
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
          <Error {...formik} name="correo" />
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
        <Error {...formik} name="password" />
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
        REGISTRARTE
      </button>
    </div>
  )
}

export default LoginForm
