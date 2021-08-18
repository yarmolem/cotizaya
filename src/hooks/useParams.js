import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

const useParams = (initialState = {}) => {
  const router = useRouter()
  const [params, setParams] = useState(initialState)

  useEffect(() => {
    const isValid = Object.keys(router.query).length !== 0

    if (isValid) setParams(router.query)
  }, [router.query])

  return { params }
}

export default useParams
