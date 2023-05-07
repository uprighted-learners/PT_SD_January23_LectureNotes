import { useState } from 'react';
import './Counter.css';

export default function Counter() {
    const [ count, setCount ] = useState(0);

    const countUp = () => {
        setCount(count + 1)
    }

    const countDown = () => {
        setCount(count - 1)
    }

  return (
    <div className="counter">
        <h1>Basic Counter Component</h1>
        <button onClick={countDown}>-</button>
        <span>{count}</span>
        <button onClick={countUp}>+</button>
    </div>
  )
}
