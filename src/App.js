import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import members from './components/Members';
import Form from "./components/Forms";
import { notStrictEqual } from 'assert';

function App() {

const [teamMember, setTeamMember] = useState(members)
const addMember = member => {
  setTeamMember([... teamMember, member])
}

  return (
    <div className="App">
      <h2>Please fill this form</h2>
      <Form addMember={addMember}/>
      <div className="cards">
        {teamMember.map(person => <Card name={person.name} email={person.email} role={person.role}/> )} 
      </div>
    </div>
  );
}

export default App;
