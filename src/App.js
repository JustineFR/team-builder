import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import members from './components/Members';
import Form from "./components/Forms";

function App() {

const [teamMember, setTeamMember] = useState(members)

  return (
    <div className="App">
      <Form />
      <div>
        {teamMember.map(person => <Card name={person.name} email={person.email} role={person.role}/> )} 
      </div>
    </div>
  );
}

export default App;
