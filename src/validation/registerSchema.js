import * as Yup from 'yup'

export const registerSchema = Yup.object().shape({
  nombre: Yup.string().required('Requerido'),
  correo: Yup.string().email('Debes colocar un formato de correo correcto'),
  password: Yup.string().required('Requerido'),
  celular: Yup.string().length(9, 'El numero telefonico debe tener 9 digitos')
})
