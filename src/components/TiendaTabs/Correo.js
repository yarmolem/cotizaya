// styles
import Letter from '@/svg/Letter'
import styles from './tabs.module.scss'

const Correo = () => {
  return (
    <div className={styles.correos}>
      <h3>CORREOS</h3>

      <div className={styles.correos_item}>
        <Letter />
        <a href="#">ventas@mym.com.pe</a>
      </div>
    </div>
  )
}

export default Correo
