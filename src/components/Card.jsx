import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card(props) {
  const {min, max } = props;
  
  return(
    <div className={styles.card}>
      <button className={styles.card__button} id="buton" onClick= {props.onClose}>X</button>
      <h5 className={styles.card__div}>
        <Link to={`/${props.name}/${props.id}`}>{props.name}</Link>
      </h5>
      <div >
        <p className={styles.card__p}>Min: <br/> {min}</p>
        <p className={styles.card__p}>Max: <br/> {max}</p>
        <img className={styles.card__img} src = { `http://openweathermap.org/img/wn/${props.img}@2x.png`}  />
      </div>  
      
    </div>
  ) 
};  