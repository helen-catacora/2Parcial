import React from 'react'
import Portada from './Portada'
import Perfil from './Perfil'

function Card() {
  return (
    <div className='card'>
        <Portada />
        <Perfil />
    </div>
  )
}

export default Card