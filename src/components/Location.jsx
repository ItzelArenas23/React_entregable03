import React from 'react'

const Location = ({location}) => {

  return (
    <section className='text-white'>
    <h2 className='flex justify-center font-bold text-2xl'>{location?.name}</h2>
    <ul className='flex gap-10 justify-center py-6'>
      <li>Type: {location?.type}</li>
      <li>Dimension: {location?.dimension}</li>
      <li>Population: {location?.residents.length}</li>
    </ul>
  </section>
  )
}

export default Location