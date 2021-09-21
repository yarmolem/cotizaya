import * as Yup from 'yup'

export const tiendaSchema = Yup.object().shape({
  ruc: Yup.string()
    .length(11, 'El RUC debe tener 11 dígitos')
    .required('Requerido'),
  nombre: Yup.string().required('Requerido'),
  email: Yup.string().email('Debes colocar un formato de correo correcto'),
  celular: Yup.string().length(9, 'El numero telefonico debe tener 9 digitos')
})
