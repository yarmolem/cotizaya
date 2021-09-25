// terceros
import { useFormik } from 'formik'

// utils
import useAuth from '@/hooks/useAuth'

// styles
import styles from '@/styles/components/ingresa/ingresa.module.scss'
import Error from '@/components/Error'

import { useCambiarContrasenaUsuarioMutation } from '@/generated/graphql'
import { handleError } from 'src/utils/handleError'
import router from 'next/router'
import { toast } from 'react-toastify'

const CambiarPassword = () => {

    const initialValues = {
        passwordAntiguo: "",
        passwordNuevo: "",
    }

    const [updatePassword, { loading }] = useCambiarContrasenaUsuarioMutation({
        onError: handleError
    })


    const formik = useFormik({
        onSubmit: async (values) => {
            const data = await updatePassword({
                variables: {
                    input: values
                }
            });
            if (data?.data?.CambiarContrasenaUsuario) {
                console.log("CONTRASEÑA CAMBIADA");
                router.push('/')
                toast.success("Contraseña cambiada")
            } else {
                const error = data.errors.graphQLErrors[0].debugMessage
                if (error) {
                    toast.error(error)
                }
            }
        },
        initialValues: initialValues,
        enableReinitialize: true,

    })

    const isAllFill = () => {
        const { passwordAntiguo, passwordNuevo } = formik.values
        return (
            passwordAntiguo.trim() !== '' &&
            passwordNuevo.trim() !== ''
        )
    }

    const filledInput = (name = '') => {
        return formik.values[name].trim() !== '' ? styles.filled : ''
    }

    return (
        <div>

            <div className="container">
                <div className={styles.registrate}>
                    <h3>CAMBIAR CONTRASEÑA</h3>

                    <form
                        className={styles.registrate_form}
                        onSubmit={formik.handleSubmit}
                    >
                        <div>
                            <div className={`${styles.input} ${filledInput('passwordAntiguo')}`}>

                                <input
                                    id="passwordAntiguo"
                                    type="password"
                                    name="passwordAntiguo"
                                    value={formik.values.passwordAntiguo}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor="passwordAntiguo">Contraseña actual</label>
                            </div>
                            <Error {...formik} name="passwordAntiguo" />
                        </div>

                        <div>
                            <div className={`${styles.input} ${filledInput('passwordNuevo')}`}>

                                <input
                                    id="passwordNuevo"
                                    type="password"
                                    name="passwordNuevo"

                                    value={formik.values.passwordNuevo}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor="passwordNuevo">Nueva contraseña</label>
                            </div>
                            <Error {...formik} name="passwordNuevo" />
                        </div>



                        <button
                            type="submit"
                            disabled={!isAllFill() || loading}
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

export default CambiarPassword
