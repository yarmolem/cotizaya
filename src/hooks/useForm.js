import { useState } from 'react'

export const useForm = (initialState) => {
  const [state, setState] = useState(initialState)

  const handleChange = ({ target: { name, value } }) => {
    setState((s) => ({ ...s, [name]: value }))
  }

  const reset = () => setState(initialState)

  return { form: state, setForm: setState, handleChange, reset }
}
