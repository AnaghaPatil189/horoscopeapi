import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SelecStign } from './Component/SelectSign';
import { SelectTimeframe } from './Component/SelectTimeframe';
import { Horoscope } from './Component/Horoscope';
import Form from './Component/Form';

function App() {

  const [selectedsigns, setselectedsigns] = useState([]);
  const[selectedTimeframe, setSelectedTimeframe,] = useState(null);
  const restart=()=>{
    setselectedsigns(null);
    setSelectedTimeframe(null);
  }

  return (
<>
<div className='App'>
<h1>The Horoscope App</h1>
<br></br>
  <Form/>
 
  {(  <SelecStign onSignSelected={setselectedsigns}/>)}
  {(<SelectTimeframe onTimeframeSelected={setSelectedTimeframe}/>)}

    {selectedsigns && selectedTimeframe && (<Horoscope sign={selectedsigns} timeframe={selectedTimeframe}/>)}
  <button onClick={restart}>Restart</button>
  
</div>
</>
  );
}

export default App
