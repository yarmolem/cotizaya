import styles from './error.module.scss'

const Error = ({ errors, touched, name = '' }) => {
  const invalid = errors[name] && touched[name]

  const render = () => (
    <div className={styles.error}>
      <p>{errors[name]}</p>
    </div>
  )

  return invalid ? render() : null
}

export default Error
