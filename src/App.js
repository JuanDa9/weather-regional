import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Swal from 'sweetalert2';




function App() {
  const [cities, setCities] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setTodos(json))
  }, []);

  function onSearch(ciudad) {
    const apiKey = '9ec47a8150e44e6385aae05be36f9e11';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(response => response.json()) // ----Devuelve algo = recurso
      // .then (recurso => console.log(recurso)) // ----
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          Swal.fire("Ciudad no encontrada");
        }
      });
    }

  return (
    <div className="App">
      <div>
        {
          todos.map(user => <p key= {user.id}>{user.name}</p>)
        }
      </div>
      <div>
         <Cards
          cities={cities}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={onSearch}
        />
      </div>
    </div>

  );
}

export default App;






