// styles
import styles from './tabs.module.scss'

const CuentasBancarias = () => {
  return (
    <div className={styles.cuentas}>
      <h3>CUENTAS BANCARIAS</h3>

      <div className={styles.cuentas_flex}>
        <p>BCP SOLES 191-2223273-0-02</p>
        <p>BCP DÓLARES 191-2194983-1-53</p>
        <p>BBVA SOLES 0011-0113-0100055664</p>
        <p>BBVA DÓLARES 0011-0113-0100055672</p>
      </div>
    </div>
  )
}

export default CuentasBancarias
