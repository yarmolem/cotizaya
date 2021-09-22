// utils
import WhatsappIcon from '@/svg/Whatsapp'

// styles
import styles from './tabs.module.scss'

const Whatsapp = ({ asesores = [] }) => {
  return (
    <div className={styles.whatsapp}>
      <h3>NUESTROS ASESORES COMERCIALES TE ATENDERÁN DE INMEDIATO</h3>

      <div className={styles.whatsapp_wrap}>
        {asesores.map(({ asesorId, nombre, url }) => (
          <a
            key={`asesor-${asesorId}`}
            target="_blank"
            rel="noreferrer"
            className={`btn ${styles.whatsapp_item}`}
            href={url}
          >
            <WhatsappIcon />
            <p>{nombre}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Whatsapp
