import '@fontsource/roboto'
import '@/styles/styles.scss'

// terceros
import { ToastContainer } from 'react-toastify'
import { ApolloProvider } from '@apollo/client'

// components
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

// utils
import client from '../apollo'
import AuthState from '@/context/auth/AuthState'
import useDisclosure from '../hooks/useDisclosure'

const MyApp = ({ Component, pageProps }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <ApolloProvider client={client}>
        <AuthState>
          <Navbar {...{ onOpen }} />
          <Sidebar {...{ isOpen, onClose }} />
          <Component {...pageProps} />
          <ToastContainer />
        </AuthState>
      </ApolloProvider>
    </div>
  )
}

export default MyApp
