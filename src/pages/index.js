import Head from 'next/head'

// components
import Features from '@/components/Features'
import Cotizador from '@/components/Cotizador'
import Presentation from '@/components/Presentation'

// Styles
import styles from '@/styles/components/home/hero.module.scss'

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Cotizaya | inicio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className={styles.hero}>
        <h3>
          EN COTIZAYA DESCUBRIRÁS A TODOS LOS PROVEEDORES DE REPUESTOS DEL PERÚ.
          <span>¡COMIENZA AHORA!</span>
        </h3>
        <div className={styles.hero_flex}>
          <Cotizador />
          <Presentation />
        </div>
      </div>
      <Features />
    </div>
  )
}

export default Home
