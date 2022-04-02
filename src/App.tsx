import './App.css';
import Greet from './components/greet/greet.component';
import Person from './components/person/person.component';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  return (
    <div className="App">
      <Greet name="Samir" msgcount={20} isLoggedin={true} />
      <Person name={personName} />
    </div>
  );
}

export default App;
