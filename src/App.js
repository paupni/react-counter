import { useState } from 'react';
import Counter from './components/Counter';
import Buttons from './components/Buttons';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  // const increaseCounter = () => {
  //   setCounter(counter+1);
  // }

  return (
    <div className="App">
      <Counter counter={counter} fontSize={220} subtitle={'Click buttons'}/>
      <Buttons counter={counter} handleSetCounter={setCounter}/>
      
    </div>
  );
}



export default App;
