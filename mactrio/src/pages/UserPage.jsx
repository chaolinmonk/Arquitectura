import React, { useEffect, useState } from 'react';
import "./UserPage.css"
import HamButton from '../Components/atoms/HamButton'
import HamCard from '../Components/atoms/HamCard'
import activityService from '../services/activityService'



export default function UserPage() {
  const [activities, setActivities] = useState([]); // Estado para guardar las actividades
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Llamada al servicio para obtener las actividades
    activityService.getActivities()
      .then(data => {
        setActivities(data); // Establecer las actividades en el estado
      })
      .catch(err => {
        setError('Error al cargar las actividades');
        console.error(err);
      });
  }, []); // El array vacío asegura que esto solo se ejecute una vez, al montar el componente

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="background">
      <div className="banner">

        <div id="backgroundSVGs">
        <img id="blob1" src= {`${process.env.PUBLIC_URL}/svg/blob1.svg`} alt="" />
        <img id="blob2" src= {`${process.env.PUBLIC_URL}/svg/beans.svg`} alt="" />
        </div>
        <div id="mainContent">
          <div className="navbar">
            <div id="logo">
                <h1>The Mactrio</h1>
            </div>
            <div id="navigate">a</div>
          </div>
          <div className="content">
            <div className="option">
              <div className="optionHamButton">
                <HamButton></HamButton>
                <HamButton></HamButton>
                <HamButton></HamButton>
              </div>
              <div className="logOut">
                <HamButton></HamButton>
              </div>
            </div>
            <div className="data">
              <div className="planData">
                <div id="planDataAmount">
                  <span>Total Recaudado</span><p>$400/$1000</p>
                </div>
                <div id="planDataDate">
                  <span>Fecha</span><p>$400/$1000</p>
                </div>
                <div id="planDataPlan">
                  <span>Plan</span><p>$400/$1000</p>
                </div>
              </div>
              <div className="planactions">
                <HamButton></HamButton>
                <HamButton></HamButton>
                <HamButton></HamButton>
                <HamButton></HamButton>
              </div>
            </div>
            <div className="activities">
              <div className="activitiesData">
                {activities.length > 0 ? (
                  activities.map(activity => (
                    <HamCard key={activity.act_id} activity={activity} title={activity.act_nombre} desc={activity.act_Desc} hamImg={activity.act_img}/>
                  ))
                ) : (
                  <p>No hay actividades disponibles</p>
                )}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
