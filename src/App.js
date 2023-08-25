import './App.css';
import { Banner } from './components/Banner';
import { Form } from './components/Form';
import { useState } from 'react';
import { Squad } from './components/Squad';

function App() {

  const [squads, setSquads] = useState([])
  const addedSquad = (squad) => {
    console.log(squad)
    setSquads([...squads, squad])
    console.log(squads)
  }

  return (
    <div className="App">
      <Banner/>
      <Form onRegisteredSquad = {squad => addedSquad(squad)}/>
      <Squad squads={squads}/>
    </div>
  );
}

export default App;
