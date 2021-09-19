import styles from './empty.module.scss'

const Empty = ({ content = 'No hay datos' }) => {
  return (
    <div className={styles.empty}>
      <h4>{content}</h4>
    </div>
  )
}

export default Empty
