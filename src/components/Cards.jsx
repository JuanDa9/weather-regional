import React from 'react';
import Swal from 'sweetalert2';
import Card from './Card';
import styles from './Cards.module.css';



export default function Cards(props) {
  // cities = city1, city2, city3
  return (
    
    <div className={styles.col}>
      {
       props.cities && props.cities.map((city, index)=> (
       
         //city1 --- city2 ---- city3
        <Card
          key = {city.id}
          id= {city.id}
          max={city.max}
          min={city.min}
          name={city.name}
          img={city.img}
          onClose={() => Swal.fire(city.name)}
          
        />
        ))
      }
     </div>
  )
};
  
/*class Cards extends React.Component {
  render(){
    return (
      <div classname={styles.col}>
        {
         this.props.cities && this.props.cities.map(city=> (
          <Card
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={() => Swal.fire(city.name)}
            
          />
          ))
        }
       </div>
    )
  }
};*/