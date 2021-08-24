import Head from 'next/head'

// terceros
import { toast } from 'react-toastify'

// utils
import { useForm } from '@/hooks/useForm'

// styles
import styles from '@/styles/components/ingresa/ingresa.module.scss'

const RegistroTienda = () => {
  const { form, handleChange } = useForm({
    ruc: '',
    name: '',
    email: '',
    telefono: ''
  })

  const isAllFill = () => {
    return form.ruc.trim() !== '' && form.name.trim() !== '' && form.email.trim() !== '' && form.telefono.trim() !== ''
  }

  const filledInput = (name = '') => {
    return form[name].trim() !== '' ? styles.filled : ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    toast.success('Nos pondremos en contacto contigo a la brevedad posible')
  }

  return (
    <div>
      <Head>
        <title>Cotizaya | Registra tu tienda</title>
      </Head>

      <div className="container">
        <div className={styles.ingresa}>
          <h3>REGISTRA TU TIENDA</h3>

          <form
            className={styles.ingresa_form}
            onSubmit={handleSubmit}
          >
            <div className={`${styles.input} ${filledInput('name')}`}>
              <input
                required
                name="name"
                type="text"
                id="storeName"
                value={form.name}
                onChange={handleChange}
              />
              <label htmlFor="storeName">Nombre de la tienda</label>
            </div>

            <div className={`${styles.input} ${filledInput('ruc')}`}>
              <input
                required
                name="ruc"
                type="text"
                id="storeRUC"
                value={form.ruc}
                onChange={handleChange}
              />
              <label htmlFor="storeRUC">R.U.C.</label>
            </div>

            <div className={`${styles.input} ${filledInput('email')}`}>
              <input
                required
                name="email"
                type="email"
                id="storeEmail"
                value={form.email}
                onChange={handleChange}
              />
              <label htmlFor="storeEmail">E-mail corporativo o personal</label>
            </div>

            <div className={`${styles.input} ${filledInput('telefono')}`}>
              <input
                required
                type="text"
                name="telefono"
                id="storePhone"
                value={form.telefono}
                onChange={handleChange}
              />
              <label htmlFor="storePhone">Teléfono</label>
            </div>

            <button type="submit" disabled={!isAllFill()} className="btn btn-primary">
              CONTINUAR
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistroTienda
