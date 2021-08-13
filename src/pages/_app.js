import '@fontsource/roboto'
import '@/styles/styles.scss'
import 'react-slidy/lib/index.scss'
import 'swiper/swiper-bundle.min.css'

// components
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import useDisclosure from '@/hooks/useDisclosure'

const MyApp = ({ Component, pageProps }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <Navbar {...{ onOpen }} />
      <Sidebar {...{ isOpen, onClose }} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
