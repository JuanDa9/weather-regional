import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './cityDetails.css';


export default function CityDetails({cities}) {
    const params = useParams();
    const {id} = params
    const city = cities.filter(c => c.id == id)
    console.log(city)
   
    return (
        <div className="ciudad">
                {/* <div className="container">
                    <h2>city.name</h2>
                    <div className="info">
                        <div>Temperatura: city.temp ºC</div>
                        <div>Clima: city.weather</div>
                        <div>Viento: city.wind km/h</div>
                        <div>Cantidad de nubes: city.clouds</div>
                        <div>Latitud: city.latitudº</div>
                        <div>Longitud: city.longitudº</div>
                    </div>
            </div> */}
        </div>
    )
}