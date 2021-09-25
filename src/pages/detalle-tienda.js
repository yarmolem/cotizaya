import { useState } from 'react'
import Head from 'next/head'
import Arrow from '@/svg/Arrow'

// components
import Select from '@/components/Select'
import {
  SedesTab,
  CorreoTab,
  GeneralTab,
  WhatsappTab,
  CuentasBancariasTab
} from '@/components/TiendaTabs'

// utils
import useParams from '@/hooks/useParams'
import ChevronDown from '@/svg/ChevronDown'
import { useGetIdTiendasQuery } from '../generated/graphql'
import styles from '@/styles/components/detalle-tienda/detalle-tienda.module.scss'

import { useRouter } from 'next/router'
// import { route } from 'next/dist/server/router'

const initialData = {
  GetIdTiendas: {
    ruc: '',
    banco: '',
    nombre: '',
    correo: '',
    razonSocial: '',
    imagenPrincipal: {
      id: '',
      url: '',
      descripcion: ''
    }
  }
}

const DetalleTienda = () => {
  const router = useRouter()
  console.log(router)

  const [actualTab, setActualTab] = useState('SEDES')
  const { params } = useParams({
    motor: '',
    marca: '',
    modelo: '',
    tienda: ''
  })

  const { data = initialData } = useGetIdTiendasQuery({
    variables: { slug: params.tienda }
  })

  const tabs = {
    SEDES: <SedesTab sedes={data.GetIdTiendas.Sede} />,
    WHATSAPP: <WhatsappTab asesores={data.GetIdTiendas.Asesor} />,
    'CUENTAS BANCARIAS': (
      <CuentasBancariasTab bancos={data.GetIdTiendas.banco} />
    ),
    CORREOS: <CorreoTab correos={data.GetIdTiendas.correo} />,
    GENERAL: <GeneralTab ruc={data.GetIdTiendas.ruc} />
  }

  const renderTabContent = () => tabs[actualTab]

  const handleChange = ({ target: { value } }) => setActualTab(value)

  return (
    <div className={styles.detalleTienda}>
      <Head>
        <title>Cotizaya | {params.tienda}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Generated by create next app" />
      </Head>
      <button className={styles.detalleTienda_btnBack} onClick={router.back}>
        <Arrow />
      </button>
      <div className={styles.detalleTienda_mobile}>
        <h1 className={styles.detalleTienda_title}>
          TIENDA <span>{data.GetIdTiendas.nombre.toUpperCase()}</span>
        </h1>
        <div className={styles.detalleTienda_logoM}>
          <img src={data.GetIdTiendas.imagenPrincipal.url} alt="" />
        </div>
      </div>

      {/* SELECT PARA MOBILE */}
      <Select
        name="options"
        value={actualTab}
        onChange={handleChange}
        className={styles.select}
      >
        {Object.keys(tabs).map((tab) => (
          <option key={`TABM-${tab}`} value={tab}>
            {tab}
          </option>
        ))}
      </Select>

      {/* TABS PARA DESKTOP */}
      <div className={styles.tabs}>
        {Object.keys(tabs).map((tab) => (
          <button
            className={styles.tabs_item}
            onClick={() => setActualTab(tab)}
            key={`TABD-${tab}`}
          >
            <span>{tab}</span>
            <ChevronDown />
          </button>
        ))}

        <div className={styles.detalleTienda_logoD}>
          <img src={data.GetIdTiendas.imagenPrincipal.url} alt="" />
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>{renderTabContent()}</div>
    </div>
  )
}

export default DetalleTienda
