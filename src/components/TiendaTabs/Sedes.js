import Location from '@/svg/Location'
import styles from './tabs.module.scss'

const Sedes = () => {
  return (
    <div className={styles.sedes}>
      <h3>SEDES</h3>

      <h4>LA VICTORIA</h4>

      <ul>
        <li>
          <Location />
          <span>
            Av. Nicolás Arriola 1723 (Sucursal Central) – (Especialistas en
            VOLVO)
          </span>
        </li>
        <li>
          <Location />
          <span>
            Av. Nicolás Arriola 1551 – (Especialistas en MB, VW, SCANIA)
          </span>
        </li>
        <li>
          <Location />
          <span>Av. Nicolás Arriola 1473 – (Especialistas en VOLVO)</span>
        </li>
      </ul>

      <h4>ATE</h4>

      <ul>
        <li>
          <Location />
          <span>Av. Nicolás Ayllón 3238 – (Todas las líneas de buses)</span>
        </li>
      </ul>

      <h4>LOS OLIVOS</h4>

      <ul>
        <li>
          <Location />
          <span>
            Av. Alfredo Mendiola 4159 / 4163 – (Especialistas en VOLVO y MB)
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Sedes
