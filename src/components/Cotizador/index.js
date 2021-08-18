import React from 'react'
import { useRouter } from 'next/dist/client/router'

// components
import Select from '../Select'

// utils
import Check from '@/svg/Check'
import { brands } from '@/data/cars'
import { useCotizador } from '@/hooks/useCotizador'

// styles
import styles from './cotizador.module.scss'

const Cotizador = () => {
  const router = useRouter()
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
          router.push({
            pathname: '/proveedores',
            query: {
              marca: form.brand,
              modelo: form.model,
              motor: form.motor
            }
          })
        }}
      >
        {/* marcas */}
        <div className={styles.input_active}>
          {isModelActive ? <Check /> : null}
          <Select
            name="brand"
            value={form.brand}
            className={isModelActive ? styles.select_active : ''}
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
          </Select>
        </div>
        {/* modelos */}
        <div className={isModelActive ? styles.input_active : ''}>
          {isMotorActive ? <Check /> : null}
          <Select
            name="model"
            value={form.model}
            className={isMotorActive ? styles.select_active : ''}
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
          </Select>
        </div>
        {/* motores */}
        <div
          className={isModelActive && isMotorActive ? styles.input_active : ''}
        >
          {form.motor !== '' ? <Check /> : null}
          <Select
            name="motor"
            value={form.motor}
            onChange={handleChange}
            className={form.motor !== '' ? styles.select_active : ''}
          >
            <option value="1">Ingresa el motor</option>
            {motors.map((motor) => (
              <option key={`motor-${motor}`} value={motor}>
                {motor}
              </option>
            ))}
          </Select>
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
