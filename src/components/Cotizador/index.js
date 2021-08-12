import React from 'react'

// hooks
import { useCotizador } from '@/hooks/useCotizador'

// data
import { brands } from '@/data/cars'

// styles
import styles from './cotizador.module.scss'

const Cotizador = () => {
  const { form, motors, models, setForm, handleChange } = useCotizador()

  return (
    <div className={styles.cotizador}>
      <h2>COMIENZA A BUSCAR TIENDAS</h2>

      <div className={styles.cotizador_header}>
        <div>
          <span>1</span>
          <p>Selecciona la marca del vehículo</p>
        </div>

        <div>
          <span>2</span>
          <p>Selecciona el modelo</p>
        </div>
      </div>

      <form
        className={styles.cotizador_form}
        onSubmit={(e) => e.preventDefault()}
      >
        {/* marcas */}
        <select
          name="brand"
          value={form.brand}
          onChange={(e) => {
            handleChange(e)
            setForm((f) => ({ ...f, model: '', motor: '' }))
          }}
        >
          <option value="">Ingresa la marca del vehículo</option>
          {brands.map((brand, i) => (
            <option key={`brand-${i}`} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        {/* modelos */}
        <select
          name="model"
          value={form.model}
          onChange={(e) => {
            handleChange(e)
            setForm((f) => ({ ...f, motor: '' }))
          }}
        >
          <option value="1">Ingresa el modelo</option>
          {models.map((m) => (
            <option key={`model-${m.model}`} value={m.model}>
              {m.model}
            </option>
          ))}
        </select>
        {/* motores */}
        <select name="motor" value={form.motor} onChange={handleChange}>
          <option value="1">Ingresa el motor</option>
          {motors.map((motor) => (
            <option key={`motor-${motor}`} value={motor}>
              {motor}
            </option>
          ))}
        </select>

        <button className="btn btn-primary">Buscar</button>
      </form>
    </div>
  )
}

export default Cotizador
