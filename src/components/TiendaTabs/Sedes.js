import { Fragment } from 'react'
import Location from '@/svg/Location'
import styles from './tabs.module.scss'

const Sedes = ({ sedes = [] }) => {
  return (
    <div className={styles.sedes}>
      <h3>SEDES</h3>

      {sedes.map(({ sedeId, lugar, direccion }) => (
        <Fragment key={`sede-${sedeId}`}>
          <h4>{lugar}</h4>
          <ul>
            {direccion.split('|').map((text, i) => (
              <li key={`direccion-${sedeId}-${i}`}>
                <Location />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  )
}

export default Sedes
