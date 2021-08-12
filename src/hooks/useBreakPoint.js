import { useEffect, useState } from 'react'

const initialState = {
  sm: false,
  md: false,
  lg: false,
  xl: false
}

export const useBreakPoint = () => {
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
    if (breakpoints.sm) setNroSlides(1)
    if (breakpoints.md) setNroSlides(2)
    if (breakpoints.lg) setNroSlides(3)
    if (breakpoints.xl) setNroSlides(5)
  }, [breakpoints])

  function query(br) {
    return window.matchMedia(br).matches
  }

  return { nroSlides }
}
