import React from 'react'
import "./Login.css"
import FormInput from '../Components/atoms/FormInput'
import CustomButton from '../Components/atoms/Button'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado
    console.log('Formulario enviado');
    navigate('/userpage') // Aquí puedes agregar lógica adicional
  };
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
            <form action="" onSubmit={handleSubmit}>
              <div className="inputs">
                <h1>Iniciar Sesión</h1>
                <FormInput placeholder='Nombre de usuario'></FormInput>
                <FormInput placeholder='Contraseña' password={true}></FormInput>
                <div className="buttonscontainer">
                  <CustomButton width='100%' texto = 'No tengo cuenta' color={'Search'}></CustomButton>
                  <CustomButton width='100%' texto = 'Iniciar Sesión' color={'Accept'}></CustomButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
