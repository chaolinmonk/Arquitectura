import React from 'react'
import './styles/FormInput.css'
export default function FormInput({password = false, placeholder = ''}) {
  if(!password){
    return (
      <div className='InpContainer'>
        <input type="text" placeholder={placeholder}/>
      </div>
    )  
  }else{
    return(
      <div className='InpContainer'>
        <input type="password" />
      </div>
    )
  }
}
