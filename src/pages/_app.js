import '@fontsource/roboto'
import '@/styles/styles.scss'
import { useEffect } from 'react'

// terceros
import { ToastContainer } from 'react-toastify'
import { ApolloProvider } from '@apollo/client'

// components
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import AuthBlock from '@/components/AuthBlock'

// utils
import client from '../apollo'
import useAuth from '../hooks/useAuth'
import AuthState from '@/context/auth/AuthState'
import useDisclosure from '../hooks/useDisclosure'

const privateRoutes = ['/tienda', '/proveedores', '/detalle-tienda']

const Routes = ({ children, router }) => {
  const { user } = useAuth()
  const authModal = useDisclosure()
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    const isPrivate = privateRoutes.some((r) => r === router.pathname)
    if (isPrivate && !user.apiToken) {
      console.log('MOSTRAR_MODAL')
      authModal.onOpen()
    } else {
      authModal.onClose()
    }
  }, [router.pathname])

  return (
    <>
      <Navbar {...{ onOpen }} />
      <Sidebar {...{ isOpen, onClose }} />
      {children}
      <AuthBlock {...authModal} />
      <ToastContainer />
    </>
  )
}

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <div>
      <ApolloProvider client={client}>
        <AuthState>
          <Routes router={router}>
            <Component {...pageProps} />
          </Routes>
        </AuthState>
      </ApolloProvider>
    </div>
  )
}

export default MyApp
