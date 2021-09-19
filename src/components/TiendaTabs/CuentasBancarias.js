// styles
import styles from './tabs.module.scss'

const CuentasBancarias = ({ bancos = '' }) => {
  return (
    <div className={styles.cuentas}>
      <h3>CUENTAS BANCARIAS</h3>

      <div className={styles.cuentas_flex}>
        {bancos.split(',').map((banco, i) => (
          <p key={`${banco}-${i}`}>{banco}</p>
        ))}
      </div>
    </div>
  )
}

export default CuentasBancarias
