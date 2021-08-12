import { useEffect, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'



// data
import { SLIDES } from '@/data/SLIDES'

// SVGS
import ChevronRight from '@/svg/ChevronRight'

// styles
import styles from './features.module.scss'
import { useBreakPoint } from '@/hooks/useBreakPoint'

const FeaturesItem = ({ slide = SLIDES[0], onClick }) => {
  const { icon, content, last } = slide

  return (
    <div className={styles.features}>
      <div>
        {icon}
        <h3> {content} </h3>
      </div>

      {
        /* eslint-disable */
        !last ? (
          <button className="btn-icon" onClick={onClick}>
            <ChevronRight />
          </button>
        ) : null
        /* eslint-enable */
      }
    </div>
  )
}

const Features = () => {
  const { nroSlides } = useBreakPoint()
  const [actualSlide, setActualSlide] = useState(0)

  useEffect(() => {
    setActualSlide(1)
  }, [nroSlides])

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide)
  }

  const handleNext = () => {
    if (actualSlide === SLIDES.length) return
    if (nroSlides === SLIDES.length) return
    setActualSlide((a) => a + 1)
  }

  return (
    <div>
      {
        <Swiper
          spaceBetween={20}
          slidesPerView={nroSlides}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {SLIDES.map((slide, i) => (
            <SwiperSlide key={`slide-${i}`}>
              <FeaturesItem {...{ slide, onClick: handleNext }} />
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </div>
  )
}

export default Features
