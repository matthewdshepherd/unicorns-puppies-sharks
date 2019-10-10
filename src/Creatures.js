import React from 'react'
import './image-display.css'

const Creatures = ({ data }) => {
  const displayCreatures = data.map(creature => {
    const { id, image } = creature;
    return <img src={image} className='app-img' alt='' key={id} />
  })

  return (
    <>
    <h1>Creatures</h1>
    {displayCreatures}
    </>
  )
}

export default Creatures;