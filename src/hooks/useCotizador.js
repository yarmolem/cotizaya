import { useEffect, useState } from 'react'

// data
import { cars } from '@/data/cars'

export const useCotizador = () => {
  const [models, setModels] = useState([])
  const [motors, setMotors] = useState([])
  const [form, setForm] = useState({
    brand: '',
    model: '',
    motor: ''
  })

  useEffect(() => {
    setModels([])
    setMotors([])
    handleModel()
  }, [form.brand])

  useEffect(() => {
    setMotors([])
    handleMotor()
  }, [form.model])

  const handleModel = () => {
    if (form.brand === '') return
    const models = cars.filter((c) => c.brand === form.brand)
    setModels(models)
  }

  const handleMotor = () => {
    if (form.model === '') return
    const motors = models.filter((c) => c.model === form.model)

    if (motors.length === 0) return
    const [data] = motors
    setMotors(data.motor)
  }

  const handleChange = ({ target: { value, name } }) => {
    setForm((f) => ({ ...f, [name]: value }))
  }

  return {
    form,
    models,
    motors,
    setForm,
    handleChange
  }
}
