import { useEffect, useState } from 'react'

const initialState = {
  sm: false,
  md: false,
  lg: false,
  xl: false
}

export const useBreakPoint = ({ sm = 1, md = 2, lg = 3, xl = 5 }) => {
  const [nroSlides, setNroSlides] = useState(1)
  const [breakpoints, setBreakpoints] = useState(initialState)

  useEffect(() => {
    const onChange = () => {
      if (query('(min-width: 576px)')) {
        setBreakpoints({ ...initialState, sm: true })
      }
      if (query('(min-width: 768px)')) {
        setBreakpoints({ ...initialState, md: true })
      }
      if (query('(min-width: 992px)')) {
        setBreakpoints({ ...initialState, lg: true })
      }
      if (query('(min-width: 1200px)')) {
        setBreakpoints({ ...initialState, xl: true })
      }
    }

    onChange()

    window.addEventListener('resize', onChange)
    return () => window.removeEventListener('resize', onChange)
  }, [])

  useEffect(() => {
    if (breakpoints.sm) setNroSlides(sm)
    if (breakpoints.md) setNroSlides(md)
    if (breakpoints.lg) setNroSlides(lg)
    if (breakpoints.xl) setNroSlides(xl)
  }, [breakpoints])

  function query(br) {
    return window.matchMedia(br).matches
  }

  return { nroSlides }
}
