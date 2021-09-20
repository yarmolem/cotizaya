import { useEffect, useState } from 'react'
// terceros
import Slider from 'react-slidy'

// svg
import Dot from '@/svg/Dot'

// styles
import styles from './presentation.module.scss'

const SLIDES = ['NEUMATICO.jpg', 'MOTOR.jpg', 'ACEITES.jpg']

const Presentation = () => {
  const [timer, setTimer] = useState(false)
  const [actualSlide, setActualSlide] = useState(0)

  useEffect(() => {
    const timer = play()
    setTimer(timer)
    return () => {
      setTimer(false)
      setActualSlide(0)
      clearTimeout(timer)
    }
  }, [])

  const play = () => {
    return setInterval(() => {
      setActualSlide((state) => {
        if (state + 1 === 3) return 0
        return state + 1
      })
    }, 3000)
  }

  const reset = () => clearInterval(timer)

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide)
  }

  const dotStyles = (isActive) => {
    return isActive ? styles.slider_dotactive : styles.slider_dotinactive
  }

  return (
    <div
      className={styles.slider}
      onTouchStart={reset}
      onMouseEnter={reset}
      onTouchEnd={() => setTimer(play())}
      onMouseLeave={() => setTimer(play())}
    >
      <Slider showArrows={false} doAfterSlide={updateSlide} slide={actualSlide}>
        {SLIDES.map((img, i) => (
          <img key={`img-${i}`} src={`/images/${img}`} alt="" />
        ))}
      </Slider>
      <div className={styles.slider_dots}>
        {SLIDES.map((_, index) => {
          const isActive = index === actualSlide
          return (
            <span
              key={index}
              onClick={() => updateSlide({ currentSlide: index })}
              className={`${styles.slider_dot} ${dotStyles(isActive)}`}
            >
              <Dot />
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Presentation
