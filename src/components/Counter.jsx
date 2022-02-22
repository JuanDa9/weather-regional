import React, { useState } from 'react'

function Counter(props) {
    const {value} = props
    const [count, setCount] = useState(value);
  

    const increment = () => setCount(prev => prev+1)
    const decrement = (param) => setCount(count-param)


  return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={() => decrement(2) }>-</button>

        </div>

  )
}

export default Counter