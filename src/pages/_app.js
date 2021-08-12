import '@fontsource/poppins'
import '@/styles/styles.scss'
import 'react-slidy/lib/index.scss'
import 'swiper/swiper.scss'

// components
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import useDisclosure from '@/hooks/useDisclosure'

function MyApp ({ Component, pageProps }) {
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
