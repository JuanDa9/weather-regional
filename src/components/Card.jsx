import styles from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return(
    <div className={styles.card}>
      <button className={styles.card__button} id="buton" onClick= {props.onClose}>X</button>
      <h5 className={styles.card__div}>{props.name}</h5>
      <div >
        <p className={styles.card__p}>Min: <br/> {props.min}</p>
        <p className={styles.card__p}>Max: <br/> {props.max}</p>
        <img className={styles.card__img} src = { `http://openweathermap.org/img/wn/${props.img}@2x.png`}  />
      </div>  
      
    </div>
  ) 
};  