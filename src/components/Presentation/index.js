// terceros
import { useState } from 'react'
import Slider from 'react-slidy'

// styles
import styles from './presentation.module.scss'

const SLIDES = ['image1.jpg', 'image2.jpg', 'image3.jpg']

const Presentation = () => {
  const [actualSlide, setActualSlide] = useState(0)

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide)
  }

  const dotStyles = (isActive) => {
    return isActive ? styles.slider_dotactive : styles.slider_dotinactive
  }

  return (
    <div>
      <Slider showArrows={false} doAfterSlide={updateSlide} slide={actualSlide}>
        {SLIDES.map((img, i) => (
          <img key={`img-${i}`} src={`/images/${img}`} alt="" />
        ))}
      </Slider>
      <div className={styles.slider_dots}>
        {SLIDES.map((_, index) => {
          const isActive = index === actualSlide
          return (
            <button
              key={index}
              onClick={() => updateSlide({ currentSlide: index })}
              className={`${styles.slider_dot} ${dotStyles(isActive)}`}
            >
              <span>&bull;</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Presentation
