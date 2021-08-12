import Cotizador from '@/components/Cotizador'
import Features from '@/components/Features'
import Presentation from '@/components/Presentation'

// styles
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_flex}>
        <Cotizador />
        <Presentation />
      </div>
      <Features />
    </div>
  )
}

export default Hero
