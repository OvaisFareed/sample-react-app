import React, { useState } from 'react';
import './Counter.scss'
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    
    <div>
      <h2>Update counter using useState( ) hook:</h2>
      <p>Counter: {count}</p>
      <IconButton className="counter-inc-button" onClick={() => setCount(count + 1)}>
        <AddIcon />
      </IconButton>
      <IconButton className="counter-dec-button" onClick={() => setCount(count - 1 > 0 ? count - 1 : 0)}>
        <RemoveIcon />
      </IconButton>
    </div>
  );
}

export default Counter;