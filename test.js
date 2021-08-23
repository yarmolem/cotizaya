const test = [
  'Fantastic',
  'Fantastic',
  'Fantastic',
  'Fantastic',
  'Fantastic',
  '',
  'Fantastic',
  'Fantastic',
  'Fantastic',
  ''
]


const data2 = () => {
  let contador = 0;

  test.forEach((v, i) => {
    if (i === 0) return

    if (v === 'Fantastic' && test[i-1] === 'Fantastic') {
      contador++
    }
  })

  return contador
}

console.log(data2())