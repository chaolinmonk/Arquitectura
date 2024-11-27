import React from 'react'
import "./Login.css"
import FormInput from '../Components/atoms/FormInput'
import CustomButton from '../Components/atoms/Button'




export default function Login() {
  return (
    <div className="background">
      <div className="banner">

        <div id="backgroundSVGs">
        <img id="blob1" src= {`${process.env.PUBLIC_URL}/svg/blob1.svg`} alt="" />
        <img id="blob2" src= {`${process.env.PUBLIC_URL}/svg/beans.svg`} alt="" />
        </div>
        <div id="MainBento">
          <div id="MainBentoTitle">
            <div id="MainBentoTitlePicture">
              <div id="MainBentoTitlePictureImg">
                <img src={`${process.env.PUBLIC_URL}/images/MainBentoTitlePicture.png`} alt="" />
              </div>
              <div id="MainBentoTitlePictureText">
                <div id="MainBentoTitlePictureTextTitle"><h1>The Mactrio</h1></div>
                <div id="MainBentoTitlePictureTextSubTitle"><p>Tu gira de confianza</p></div>
              </div>
            </div>
          </div>
          <div id='FormContainer'>
            <form action="">
              <div className="inputs">
                <h1>Login</h1>
                <FormInput placeholder='Nombre de usuario'></FormInput>
                <FormInput placeholder='Contraseña' password={true}></FormInput>
              </div>
              <div className="buttonscontainer">
                <CustomButton texto = 'No tengo cuenta' color={'Warning'}></CustomButton>
                <CustomButton texto = 'Iniciar Sesión' color={'Accept'}></CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
