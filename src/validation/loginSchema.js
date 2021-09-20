import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  correo: Yup.string().email('Debes colocar un formato de correo correcto'),
  password: Yup.string().required('Requerido')
})
