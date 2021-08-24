import '@fontsource/roboto'
import '@/styles/styles.scss'

// terceros
import { ToastContainer } from 'react-toastify'

// components
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

// utils
import useDisclosure from '@/hooks/useDisclosure'

const MyApp = ({ Component, pageProps }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <Navbar {...{ onOpen }} />
      <Sidebar {...{ isOpen, onClose }} />
      <Component {...pageProps} />
      <ToastContainer />
    </div>
  )
}

export default MyApp
