// terceros
import { useFormik } from 'formik'

// utils
import useAuth from '@/hooks/useAuth'

// styles
import styles from '@/styles/components/ingresa/ingresa.module.scss'
import Error from '@/components/Error'

import { useUpdateUsuarioMutation } from '@/generated/graphql'
import { handleError } from 'src/utils/handleError'

const EditarPerfil = () => {
  const { user, login } = useAuth()

  const [updateUser, { loading }] = useUpdateUsuarioMutation({
    onError: handleError
  })

  const initialEdit = {
    nombre: user.nombre,
    correo: user.correo,
    celular: user.celular
  }

  const formik = useFormik({
    onSubmit: async (values) => {
      const data = await updateUser({
        variables: {
          input: values
        }
      })

      const user = data.data.UpdateUsuario

      console.log(user)
      login({
        ...user,
        userId: user.userId,
        tipoUsuario: user.tipoUsuario
      })
    },
    initialValues: initialEdit,
    enableReinitialize: true
  })

  const isEdited = () => {
    const { correo, nombre, celular } = formik.values
    return (
      nombre.trim() !== initialEdit.nombre ||
      celular.trim() !== initialEdit.celular ||
      correo.trim() !== initialEdit.correo
    )
  }

  const filledInput = (name = '') => {
    return formik.values[name].trim() !== '' ? styles.filled : ''
  }

  return (
    <div>
      <div className="container">
        <div className={styles.registrate}>
          <h3>EDITAR DATOS</h3>

          <form
            className={styles.registrate_form}
            onSubmit={formik.handleSubmit}
          >
            <div>
              <div className={`${styles.input} ${filledInput('nombre')}`}>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                />
                <label htmlFor="nombre">Nombre completo</label>
              </div>
              <Error {...formik} name="nombre" />
            </div>

            <div>
              <div className={`${styles.input} ${filledInput('correo')}`}>
                <input
                  id="correo"
                  type="email"
                  name="correo"
                  value={formik.values.correo}
                  onChange={formik.handleChange}
                />
                <label htmlFor="correo">Email</label>
              </div>
              <Error {...formik} name="correo" />
            </div>

            <div>
              <div className={`${styles.input} ${filledInput('celular')}`}>
                <input
                  id="celular"
                  type="text"
                  name="celular"
                  value={formik.values.celular}
                  onChange={formik.handleChange}
                />
                <label htmlFor="celular">Celular</label>
              </div>
              <Error {...formik} name="celular" />
            </div>

            <div></div>

            <button
              type="submit"
              disabled={!isEdited() || loading}
              className="btn btn-primary"
            >
              EDITAR
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditarPerfil
