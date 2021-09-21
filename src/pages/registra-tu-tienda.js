import Head from 'next/head'
import { useRouter } from 'next/router'

// terceros
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import Error from '@/components/Error'

// utils
import { handleError } from 'src/utils/handleError'
import { tiendaSchema } from '@/validation/tiendaSchema'
import { useCrearFormularioMutation } from '@/generated/graphql'

// styles
import styles from '@/styles/components/ingresa/ingresa.module.scss'

const initialState = {
  ruc: '',
  nombre: '',
  email: '',
  celular: ''
}

const RegistroTienda = () => {
  const router = useRouter()
  const [crearForm] = useCrearFormularioMutation({
    onError: (err) => {
      handleError(err)
      const error = err.graphQLErrors[0].debugMessage
      if (error === 'CORREO_EXISTE') {
        toast.error('Corres ya ha sido ingresado, por favor intente con otro')
      }
    }
  })

  const { values, ...formik } = useFormik({
    initialValues: initialState,
    validationSchema: tiendaSchema,
    onSubmit: async (input, { resetForm }) => {
      await crearForm({ variables: { input } }).then(({ data }) => {
        if (data.CrearFormulario.formularioId) {
          resetForm()
          toast.success(
            'Nos pondremos en contacto contigo a la brevedad posible'
          )
          router.push('/')
        }
      })
    }
  })

  const isAllFill = () => {
    return (
      values.ruc.trim() !== '' &&
      values.nombre.trim() !== '' &&
      values.email.trim() !== '' &&
      values.celular.trim() !== ''
    )
  }

  const filledInput = (name = '') => {
    return values[name].trim() !== '' ? styles.filled : ''
  }

  return (
    <div>
      <Head>
        <title>Cotizaya | Registra tu tienda</title>
      </Head>

      <div className="container">
        <div className={styles.ingresa}>
          <h3>REGISTRA TU TIENDA</h3>

          <form onSubmit={formik.handleSubmit} className={styles.ingresa_form}>
            <div>
              <div className={`${styles.input} ${filledInput('nombre')}`}>
                <input
                  required
                  name="nombre"
                  type="text"
                  id="storeName"
                  value={values.nombre}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <label htmlFor="storeName">Nombre de la tienda</label>
              </div>
              <Error {...formik} name="nombre" />
            </div>

            <div>
              <div className={`${styles.input} ${filledInput('ruc')}`}>
                <input
                  required
                  name="ruc"
                  type="text"
                  id="storeRUC"
                  value={values.ruc}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <label htmlFor="storeRUC">R.U.C.</label>
              </div>
              <Error {...formik} name="ruc" />
            </div>

            <div>
              <div className={`${styles.input} ${filledInput('email')}`}>
                <input
                  required
                  name="email"
                  type="email"
                  id="storeEmail"
                  value={values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <label htmlFor="storeEmail">
                  E-mail corporativo o personal
                </label>
              </div>
              <Error {...formik} name="email" />
            </div>

            <div>
              <div className={`${styles.input} ${filledInput('celular')}`}>
                <input
                  required
                  type="text"
                  name="celular"
                  id="storePhone"
                  value={values.celular}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <label htmlFor="storePhone">Teléfono</label>
              </div>
              <Error {...formik} name="celular" />
            </div>

            <button
              type="submit"
              disabled={!isAllFill()}
              className="btn btn-primary"
            >
              CONTINUAR
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistroTienda
