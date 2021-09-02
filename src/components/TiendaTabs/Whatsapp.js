// utils
import WhatsappIcon from '@/svg/Whatsapp'

// styles
import styles from './tabs.module.scss'

const Whatsapp = () => {
  return (
    <div className={styles.whatsapp}>
      <h3>NUESTROS ASESORES COMERCIALES TE ATENDERÁN DE INMEDIATO</h3>

      <div className={styles.whatsapp_wrap}>
        <button className={`btn ${styles.whatsapp_item}`}>
          <WhatsappIcon />
          <p>Nelson Manrique</p>
        </button>

        <button className={`btn ${styles.whatsapp_item}`}>
          <WhatsappIcon />
          <p>Ariana Figueroa</p>
        </button>

        <button className={`btn ${styles.whatsapp_item}`}>
          <WhatsappIcon />
          <p>Fernando Gonzales</p>
        </button>
      </div>
    </div>
  )
}

export default Whatsapp
