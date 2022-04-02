import './App.css';
import Greet from './components/greet/greet.component';
import Person from './components/person/person.component';
import Persons from './components/person/persons.component';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const names = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Peter',
      last: 'Parker',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
  ];

  return (
    <div className="App">
      <Greet name="Samir" msgcount={20} isLoggedin={true} />
      <Person name={personName} />
      <Persons names={names} />
    </div>
  );
}

export default App;
