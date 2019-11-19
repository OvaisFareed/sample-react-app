import React, { useState } from 'react';
import './Counter.css'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    
    <div>
      <h2>Update counter using useState( ) hook:</h2>
      <p>Counter: {count}</p>
      <button className="counter-inc-button" onClick={() => setCount(count + 1)}>+</button>
      <button className="counter-dec-button" onClick={() => setCount(count - 1 > 0 ? count - 1 : 0)}>-</button>
    </div>
  );
}

export default Counter;