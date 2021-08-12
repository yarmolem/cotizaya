// styles
import styles from './navbar.module.scss'

const Navbar = ({ onOpen = () => {} }) => {
  return (
    <div className={styles.navbar}>
      <button className="btn-icon" onClick={onOpen}>
        <svg
          role="img"
          data-icon="bars"
          focusable="false"
          data-prefix="fas"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className={styles.navbar_bars}
        >
          <path
            fill="#1f4e81"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          />
        </svg>
      </button>

      <img src="/logo/logo.png" alt="Logo Cotiza ya" />
    </div>
  )
}

export default Navbar
