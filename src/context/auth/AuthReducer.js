import { types } from '../types'
import { initialState } from './AuthState'

const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN:
      return { ...state, user: { ...payload } }
    case types.LOGOUT:
      return { ...state, user: { ...initialState.user } }

    default:
      return state
  }
}

export default AuthReducer
