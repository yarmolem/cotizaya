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
  const { nroSlides } = useBreakPoint({ max: 5 })

  return (
    <div>
      <Swiper spaceBetween={20} slidesPerView={nroSlides}>
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={`slide-${i}`}>
            <FeaturesItem {...{ slide }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Features
