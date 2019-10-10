import React from 'react'
import unicornData from './data/unicorn-data'
import './image-display.css'

const Unicorn = () => {
  const displayUnicorns = unicornData.map( unicorn =>{
    const { id, image} =  unicorn;
    return <img src={image} className='app-img' alt='img' key={id}/>
  })
return (
  <section>
    <h1>Unicorns!!</h1>
    {displayUnicorns}
  </section>
)
}

export default Unicorn;