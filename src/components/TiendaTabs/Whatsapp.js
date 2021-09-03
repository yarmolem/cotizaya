// utils
import WhatsappIcon from '@/svg/Whatsapp'

// styles
import styles from './tabs.module.scss'

const Whatsapp = () => {
  return (
    <div className={styles.whatsapp}>
      <h3>NUESTROS ASESORES COMERCIALES TE ATENDERÁN DE INMEDIATO</h3>

      <div className={styles.whatsapp_wrap}>
        <a
          href="https://wa.me/+51998325518?text=MENSAJE%20DE%20PRUEBA"
          target="_blank"
          rel="noreferrer"
          className={`btn ${styles.whatsapp_item}`}
        >
          <WhatsappIcon />
          <p>Enrique Lau Len</p>
        </a>

        <a
          href="https://wa.me/999999999?text=MENSAJE%20DE%20PRUEBA"
          target="_blank"
          rel="noreferrer"
          className={`btn ${styles.whatsapp_item}`}
        >
          <WhatsappIcon />
          <p>Ariana Figueroa</p>
        </a>

        <a
          href="https://wa.me/999999999?text=MENSAJE%20DE%20PRUEBA"
          target="_blank"
          rel="noreferrer"
          className={`btn ${styles.whatsapp_item}`}
        >
          <WhatsappIcon />
          <p>Fernando Gonzales</p>
        </a>
      </div>
    </div>
  )
}

export default Whatsapp
