import './App.css';
import React, {useState} from "react";

function App() {
  const [num, setNum] = useState(0);

  return (
    <div >
      <h1>Counter App</h1>
      <p>Count: {num}</p>
      <button onClick = {() => setNum(num+1)}>Increment</button>
      <button onClick = {() => setNum(num-1)}>Decrement</button>
    </div>
  );
}

export default App;
