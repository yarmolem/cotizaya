import { useState } from 'react'
import Head from 'next/head'

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
import styles from '@/styles/components/detalle-tienda/detalle-tienda.module.scss'
import ChevronDown from '@/svg/ChevronDown'

const DetalleTienda = () => {
  const [actualTab, setActualTab] = useState('SEDES')
  const { params } = useParams({
    motor: '',
    marca: '',
    modelo: '',
    tienda: ''
  })

  const tabs = {
    SEDES: <SedesTab />,
    WHATSAPP: <WhatsappTab />,
    'CUENTAS BANCARIAS': <CuentasBancariasTab />,
    CORREOS: <CorreoTab />,
    GENERAL: <GeneralTab />
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
      <h1 className={styles.detalleTienda_title}>
        TIENDA{' '}
        <span>{params.tienda.toUpperCase()}</span>
      </h1>

      {/* SELECT PARA MOBILE */}
      <Select name="options" value={actualTab} onChange={handleChange} className={styles.select}>
        {Object.keys(tabs).map((tab) => (
          <option key={`TABM-${tab}`} value={tab}>
            {tab}
          </option>
        ))}
      </Select>

      {/* TABS PARA DESKTOP */}
      <div className={styles.tabs}>
        {Object.keys(tabs).map((tab) => (
          <button className={styles.tabs_item} onClick={() => setActualTab(tab)} key={`TABD-${tab}`}>
            <span>{tab}</span>
            <ChevronDown />
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className={styles.content}>{renderTabContent()}</div>
    </div>
  )
}

export default DetalleTienda