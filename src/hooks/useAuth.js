import { useContext } from 'react'
import { AuthContext } from '@/context/auth/AuthState'

const useAuth = () => {
  const { user, login, logout } = useContext(AuthContext)
  return { user, login, logout }
}

export default useAuth
