import * as Yup from 'yup'

export const registerSchema = Yup.object().shape({
  nombre: Yup.string().required('Requerido'),
  correo: Yup.string().required('Requerido'),
  password: Yup.string().required('Requerido'),
  celular: Yup.number().min(9, 'El numero telefonico debe tener 9 digitos')
})
