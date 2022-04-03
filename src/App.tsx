import './App.css';
import Greet from './components/greet/greet.component';
import Heading from './components/heading/heading.component';
import Oscar from './components/oscar/oscar.component';
import Person from './components/person/person.component';
import Persons from './components/person/persons.component';
import Status from './components/status/status.component';

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
      <hr />
      <Person name={personName} />
      <hr />
      <Persons names={names} />
      <hr />
      <Status status="success" />
      <hr />
      <Heading>Placeholder Txt</Heading>
      <hr />
      <Oscar>
        <Heading>Oscar goes to Leonardo Di Caprio</Heading>
      </Oscar>
      <hr />
    </div>
  );
}

export default App;
