// styles
import styles from './tabs.module.scss'

const General = ({ ruc = '' }) => {
  return (
    <div className={styles.general}>
      <h3>GENERAL</h3>

      <span className={styles.general_ruc}>R.U.C.: {ruc}</span>
    </div>
  )
}

export default General
