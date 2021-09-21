// styles
import Letter from '@/svg/Letter'
import styles from './tabs.module.scss'

const Correo = ({ correos = '' }) => {
  return (
    <div className={styles.correos}>
      <h3>CORREOS</h3>

      {correos.split(',').map((correo, i) => (
        <div key={`${correo}-${i}`} className={styles.correos_item}>
          <Letter />
          <a href={`mailto:${correo}`}>{correo}</a>
        </div>
      ))}
    </div>
  )
}

export default Correo
