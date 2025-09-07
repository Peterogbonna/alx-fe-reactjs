import { useState } from 'react';

function Counter() {
  // State to hold the count value
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '20px' }}>Current Count: {count}</p>
      
      {/* Buttons for actions */}
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ margin: '5px', padding: '10px' }}
      >
        Increment
      </button>

      <button 
        onClick={() => setCount(count - 1)} 
        style={{ margin: '5px', padding: '10px' }}
      >
        Decrement
      </button>

      <button 
        onClick={() => setCount(0)} 
        style={{ margin: '5px', padding: '10px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
