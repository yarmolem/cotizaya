import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  correo: Yup.string().required('Requerido'),
  password: Yup.string().required('Requerido')
})
