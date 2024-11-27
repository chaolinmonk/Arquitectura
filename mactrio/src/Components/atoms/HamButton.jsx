import React from 'react'
import './styles/HamButton.css'
export default function HamButton() {
  return (
    <button 
      type="button" 
      className='HamButton'
    >
      <div className='HamButtonIcon'>
        <img src= {`${process.env.PUBLIC_URL}/svg/pfp.svg`} alt="" />
      </div>
      <div className='HamButtonDesc'><p>Hola</p></div>
    </button>
  )
}
