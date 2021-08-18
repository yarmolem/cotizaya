import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

// terceros
import { Swiper, SwiperSlide } from 'swiper/react'

// utils
import Home from '@/svg/Home'
import Whatsapp from '@/svg/Whatsapp'
import useParams from '@/hooks/useParams'
import ChevronRight from '@/svg/ChevronRight'
import { useBreakPoint } from '@/hooks/useBreakPoint'

// styles
import styles from '@/styles/components/proveedores/proveedores.module.scss'

const Proveedores = () => {
  const [isMobile, setIsMobile] = useState(false)
  const { nroSlides } = useBreakPoint({ max: 4 })
  const [nroCategorias, setNroCategorias] = useState(1)
  const { params } = useParams({
    motor: '',
    marca: '',
    modelo: ''
  })

  useEffect(() => {
    const query = window.matchMedia('(max-width: 992px)').matches
    setIsMobile(query)
  }, [])

  const handleMore = () => setNroCategorias((c) => c + 1)

  const categorias = Array(nroCategorias).fill(null)

  return (
    <div className="container">
      <Head>
        <title>Cotizaya | Proveedores</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className={styles.proveedores}>
        <h3 className={styles.proveedores_slogan}>
          AQUÍ ESTÁN TODAS LAS TIENDAS DE REPUESTOS PARA EL {params.marca}{' '}
          {params.modelo}
        </h3>

        <div className={styles.proveedores_bread}>
          <Link href="/">
            <a>INICIO</a>
          </Link>
          <ChevronRight />
          <a href="#">{params.marca}</a>
          <ChevronRight />
          {params.modelo}
        </div>

        {/* eslint-disable */}
        {isMobile ? (
          <>
            {/* Resultados para mobile */}
            {categorias.map((_, i) => (
              <div key={`categoria-${i}`}>
                <div className={styles.proveedores_categoria}>
                  <div>
                    <h3>Reparo de motor</h3>

                    <p>
                      para {params.marca} {params.modelo}
                    </p>
                  </div>

                  <img src="/images/image1.jpg" alt="" />
                </div>
                <Swiper spaceBetween={50} slidesPerView={nroSlides}>
                  {Array(10)
                    .fill(null)
                    .map((_, i) => (
                      <SwiperSlide key={`proveedores-${i}`}>
                        <div className={styles.proveedores_slideritem}>
                          <img src="/images/tienda.jpg" alt="" />

                          <div>
                            <button className="btn btn-outline-primary">
                              <Home /> Contactar tienda
                            </button>
                            <button className="btn btn-primary">
                              <Whatsapp /> Escríbele
                            </button>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            ))}
          </>
        ) : (
          <>
            {/* Resultados para desk */}
            {categorias.map((_, i) => (
              <div className={styles.proveedores_grid} key={`categoria-${i}`}>
                <div className={styles.proveedores_categoria}>
                  <div>
                    <h3>Reparo de motor</h3>

                    <p>
                      para {params.marca} {params.modelo}
                    </p>
                  </div>

                  <img src="/images/image1.jpg" alt="" />
                </div>
                {Array(8)
                  .fill(null)
                  .map((_, i) => (
                    <SwiperSlide key={`proveedores-${i}`}>
                      <div className={styles.proveedores_slideritem}>
                        <img src="/images/tienda.jpg" alt="" />

                        <div>
                          <button className="btn btn-outline-primary">
                            <Home /> Contactar tienda
                          </button>
                          <button className="btn btn-primary">
                            <Whatsapp /> Escríbele
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </div>
            ))}
          </>
        )}

        {/* eslint-enable */}

        {/* Resultados para desktop > 992px */}

        <div onClick={handleMore} className={styles.proveedores_mostrar}>
          <button className="btn btn-primary">Mostrar mas</button>
        </div>
      </div>
    </div>
  )
}

export default Proveedores
