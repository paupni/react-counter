import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  // const increaseCounter = () => {
  //   setCounter(counter+1);
  // }

  return (
    <div className="App">
      <h1 className="digit">{counter}</h1>
      <button className="btn" onClick={() => setCounter(counter+1)}>inc</button>
      <button className="btn" onClick={() => setCounter(counter-1)}>dec</button>
      <br />
      <button className="btn btn-reset" onClick={() => setCounter(0)}>reset</button>
    </div>
  );
}



export default App;
