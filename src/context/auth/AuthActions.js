import { types } from '../types'

export const authAction = (state, dispatch) => {
  const login = (payload) => {
    localStorage.setItem('token', payload.apiToken)
    dispatch({ type: types.LOGIN, payload })
  }
  const logout = () => {
    localStorage.removeItem('token')
    dispatch({ type: types.LOGOUT })
  }
  return { login, logout }
}
