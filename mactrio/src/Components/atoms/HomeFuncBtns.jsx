import React from 'react'
import "./styles/HomeFuncBtns.css";
import {Link} from 'react-router-dom';

export default function HomeFuncBtns({icon,text="Hola",where}) {
  return (
    <Link className='HomeFuncBtns' to={where}>
      <img className="HomeFuncBtnsBg" src="" alt=""/>
      <div className="HomeFuncBtnsElements">
        <div className="HMBEIcon">
          <img src={icon} alt=""/>
        </div>
        <div className="HMBEText">{text}</div>
      </div>
    </Link>
  )
}

