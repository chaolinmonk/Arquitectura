import React from 'react';
import "./Home.css";
import CustomCard from "../Components/atoms/Card"
import HomeFuncBtns from "../Components/atoms/HomeFuncBtns"

export default function Home() {
  const publicIMGs= `${process.env.PUBLIC_URL}/images/`
  return (
    <div id='HomeContent'>
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
            <div id="MainBentoTitleProducts">
              <CustomCard title="Cancún" text="Lorem ipsum dolor sit amet consectetur adipisicing elit" src={`${publicIMGs}plasticbag.webp`} width='200px' height='200px'></CustomCard>
              <CustomCard title="Punta Cana" text="Lorem ipsum dolor sit amet consectetur adipisicing elit" src={`${publicIMGs}tropical-island-resorts-sandals-royal-caribbean.jpg`} width='200px' height='200px'></CustomCard>
              <CustomCard title="El Callao Premium" text="Lorem ipsum dolor sit amet consectetur adipisicing elit" src={`${publicIMGs}bungalous.jpg`} width='200px' height='200px'></CustomCard>
              <CustomCard title="sadfsdf" text="Lorem ipsum dolor sit amet consectetur adipisicing elit" src={`${publicIMGs}bungalous.jpg`} width='200px' height='200px'></CustomCard>
              <CustomCard title="El Callao Premium" text="Lorem ipsum dolor sit amet consectetur adipisicing elit" src={`${publicIMGs}bungalous.jpg`} width='200px  ' height='200px'></CustomCard>
              <CustomCard title="El Callao Premium" text="Lorem ipsum dolor sit amet consectetur adipisicing elit" src={`${publicIMGs}bungalous.jpg`} width='200px  ' height='200px'></CustomCard>
              <CustomCard title="El Callao Premium" text="Lorem ipsum dolor sit amet consectetur adipisicing elit" src={`${publicIMGs}bungalous.jpg`} width='200px  ' height='200px'></CustomCard>
              <CustomCard title="El Callao Premium" text="Lorem ipsum dolor sit amet consectetur adipisicing elit" src={`${publicIMGs}bungalous.jpg`} width='200px  ' height='200px'></CustomCard>
            </div>
          </div>
          <div id='MainBentoTitleFunctions'>
            <HomeFuncBtns icon={`${process.env.PUBLIC_URL}/svg/pfp.svg`} text='Iniciar Sesión' where="/login"></HomeFuncBtns>
            <HomeFuncBtns icon={`${process.env.PUBLIC_URL}/svg/pfp.svg`} text='Iniciar Sesión'></HomeFuncBtns>
            <HomeFuncBtns icon={`${process.env.PUBLIC_URL}/svg/pfp.svg`} text='Iniciar Sesión'></HomeFuncBtns>
            <HomeFuncBtns icon={`${process.env.PUBLIC_URL}/svg/pfp.svg`} text='Iniciar Sesión'></HomeFuncBtns>
            <HomeFuncBtns icon={`${process.env.PUBLIC_URL}/svg/pfp.svg`} text='Iniciar Sesión'></HomeFuncBtns>
            <HomeFuncBtns icon={`${process.env.PUBLIC_URL}/svg/pfp.svg`} text='Iniciar Sesión'></HomeFuncBtns>
          </div>
        </div>
      </div>
    </div>
  );
}
