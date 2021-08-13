import Cotizador from '@/components/Cotizador'
import Presentation from '@/components/Presentation'

// styles
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h3>
        EN COTIZAYA DESCUBRIRÁS A TODOS LOS PROVEEDORES DE REPUESTOS DEL PERÚ.
        <span>
        ¡COMIENZA AHORA!
        </span>
      </h3>
      <div className={styles.hero_flex}>
        <Cotizador />
        <Presentation />
      </div>
    </div>
  )
}

export default Hero
