import React from 'react'
import sharkData from './data/shark-data'
import './image-display.css'

const Shark = () => {
  const displaySharks = sharkData.map(shark => {
    const { id, image } = shark;
    return <img src={image} className='app-img' alt='img' key={id} />
  })
  return (
    <section>
      <h1>Sharks!!</h1>
      {displaySharks}
    </section>
  )
}

export default Shark;