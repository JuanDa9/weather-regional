

 export default function Card(props) {
  const {img, min, max, name, onClose} = props; //destructuring
  return(
    <div className='contenedor'>
         <button>X</button>
         <h5>{name}</h5>
         <ul>
           <li>MIN<span>{min}</span></li>
           <li>MAX<span>{max}</span></li>
           <li><img src={img}></img></li>
         </ul>
    </div>
  ) 
};  


