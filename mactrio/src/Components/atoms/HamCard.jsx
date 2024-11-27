import React from 'react'
import './styles/HamCard.css'
export default function HamCard({hamImg,desc,title}) {
  console.log(hamImg)
  return (
    <div className='HamCard'>
      <div className="HamCardImg">
        <img src= {`${process.env.PUBLIC_URL}/images/${hamImg}`} alt="" />
      </div>
      <div className="HamCardDesc">
        <div>{title}</div>
        <div>{desc}</div>
      </div>
    </div>
  )
}
