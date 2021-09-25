import { types } from '../types'

export const authAction = (state, dispatch) => {
  const login = (payload) => {
    localStorage.setItem('token', payload.apiToken)

    localStorage.setItem('usuario', JSON.stringify({
      ...payload
      // nombre: payload.nombre,
      // correo: payload.correo,
      // celular: payload.celular,     
      // userId: payload.userId,
      // tipoUsuario: payload.tipoUsuario,
      // apiToken: payload.apiToken
    }))

    dispatch({ type: types.LOGIN, payload })
  }
  const logout = () => {
    localStorage.removeItem('usuario')
    dispatch({ type: types.LOGOUT })
  }
  return { login, logout }
}
