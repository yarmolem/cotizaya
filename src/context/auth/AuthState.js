import { createContext, useEffect, useReducer } from 'react'

import AuthReducer from './AuthReducer'
import { authAction } from './AuthActions'

export const initialState = {
  user: {
    userId: '',
    nombre: '',
    correo: '',
    celular: '',
    tipoUsuario: ''
  }
}

export const AuthContext = createContext()

const AuthState = ({ children }) => {

  const [state, dispatch] = useReducer(AuthReducer, initialState)


  useEffect(() => {

    if (localStorage.getItem('usuario')) {
      
      let usuarioStorage = localStorage.getItem('usuario');
      usuarioStorage = JSON.parse(usuarioStorage)

      dispatch({ type: 'LOGIN', payload : usuarioStorage })
    }
    
  }, [])


  const props = {
    ...state,
    ...authAction(state, dispatch)
  }

  return <AuthContext.Provider value={props}>{children}</AuthContext.Provider>
}

export default AuthState
