import React from 'react'

// hooks
import { useCotizador } from '@/hooks/useCotizador'

// data
import { brands } from '@/data/cars'

// styles
import styles from './cotizador.module.scss'
import Check from '@/svg/Check'

const Cotizador = () => {
  const { form, motors, models, setForm, handleChange } = useCotizador()

  const isActive = (bool) => {
    return bool ? styles.item_active : styles.item_inactive
  }

  const isModelActive = form.brand !== ''
  const isMotorActive = form.model !== ''
  const isComplete = isModelActive && isMotorActive && form.motor !== ''

  return (
    <div className={styles.cotizador}>
      <div className={styles.cotizador_header}>
        <div className={styles.item_active}>
          <span>1</span>
          <p>Selecciona la marca del vehículo</p>
        </div>

        <div className={isActive(isModelActive)}>
          <span>2</span>
          <p>Selecciona el modelo</p>
        </div>

        <div className={isActive(isMotorActive)}>
          <span>3</span>
          <p>Selecciona el tipo de motor</p>
        </div>
      </div>

      <form
        className={styles.cotizador_form}
        onSubmit={(e) => {
          e.preventDefault()
          console.log(form)
        }}
      >
        {/* marcas */}
        <div className={styles.input_active}>
          {isModelActive ? <Check /> : null}
          <select
            name="brand"
            value={form.brand}
            style={{ paddingLeft: isModelActive ? '5rem' : '' }}
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
        </div>
        {/* modelos */}
        <div className={isModelActive ? styles.input_active : ''}>
          {isMotorActive ? <Check /> : null}
          <select
            name="model"
            value={form.model}
            style={{ paddingLeft: isMotorActive ? '5rem' : '' }}
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
        </div>
        {/* motores */}
        <div
          className={isModelActive && isMotorActive ? styles.input_active : ''}
        >
          {form.motor !== '' ? <Check /> : null}
          <select
            name="motor"
            value={form.motor}
            onChange={handleChange}
            style={{ paddingLeft: form.motor !== '' ? '5rem' : '' }}
          >
            <option value="1">Ingresa el motor</option>
            {motors.map((motor) => (
              <option key={`motor-${motor}`} value={motor}>
                {motor}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={!isComplete}
          className="btn btn-primary"
        >
          Buscar
        </button>
      </form>
    </div>
  )
}

export default Cotizador
