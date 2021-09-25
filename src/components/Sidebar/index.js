import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'

// Terceros
import { motion } from 'framer-motion'

// SVGS
import User from '@/svg/User'
import List from '@/svg/List'
import Home from '@/svg/Home'
import Store from '@/svg/Store'

// styles
import styles from './sidebar.module.scss'
import { AuthContext } from '@/context/auth/AuthState'
import useAuth from '@/hooks/useAuth'

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { ease: 'easeInOut' }
  },
  closed: {
    opacity: 0,
    x: '-100%',
    transition: { ease: 'easeOut' }
  }
}

const fade = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
}

const Sidebar = ({ isOpen = false, onClose }) => {

  const { logout, user } = useAuth();
  const [showMenuPerfil, setShowMenuPerfil] = useState(false);


  return (
    <aside
      className={styles.sidebar}
      style={{ pointerEvents: isOpen ? 'all' : 'none' }}
    >
      <motion.div
        variants={fade}
        onClick={onClose}
        initial={{ opacity: 0 }}
        className={styles.sidebar_overlay}
        animate={isOpen ? 'open' : 'closed'}
      />
      <motion.div
        variants={variants}
        className={styles.sidebar_content}
        initial={{ opacity: 0, x: '-100%' }}
        animate={isOpen ? 'open' : 'closed'}
      >
        <button
          onClick={onClose}
          className={`btn-icon ${styles.sidebar_buttonClose}`}
        >
          X
        </button>
        <div className={styles.sidebar_logo}>
          <img
            width={157}
            height={48}
            src="/logo/logo-nombre.svg"
            alt="Logo Cotizaya"
          />
        </div>
        <div>
        {
          user?.apiToken && 
        <h4 className={styles.sidebar_username}>Bienvenido {user?.nombre.split(' ')[0]}</h4>
        }
        <ul className={styles.sidebar_links}>
          <li>
            <Link href="/">
              <a onClick={onClose}>
                <Home /> Inicio
              </a>
            </Link>
          </li>
          <li>
            {
              user?.apiToken ?
               
                <>
                  <Link href="">
                    <a
                      onClick={() => setShowMenuPerfil(prevState => !prevState)}
                    >
                      <User />Perfil
                    </a>

                  </Link>
                  {
                    showMenuPerfil ?
                      <ul className={styles.sidebar_menuPerfil}>
                        <Link href="/editarPerfil" >
                          <a onClick={onClose}>
                            Editar Perfil
                          </a>

                        </Link>
                        <Link href="/cambiarPassword">
                          <a onClick={onClose}>
                            Cambiar contraseña
                          </a>

                        </Link>
                        <Link href="/">
                          <a
                          className="btn-logout"
                            onClick={() => {
                              logout()
                              setDataStorage(null)
                              setShowMenuPerfil(false)
                            }}
                          >
                            Cerrar sesión
                          </a>

                        </Link>
                      </ul>
                      :
                      null
                  }
                </>
                :
                <Link href="/ingresa">
                  <a onClick={onClose}>
                    <User /> Ingresa
                  </a>

                </Link>
            }
          </li>
          {
            !user?.apiToken &&
            <li>
            <Link href="/registrate">
              <a onClick={onClose}>
                <List /> Regístrate
              </a>
            </Link>
          </li>
          }
          
          <li>
            <Link href="/registra-tu-tienda">
              <a onClick={onClose}>
                <Store /> Registra tu tienda
              </a>
            </Link>
          </li>
        </ul>
        </div>
      </motion.div>
    </aside>
  )
}

export default Sidebar
