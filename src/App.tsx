import './App.css';
import Greet from './components/greet/greet.component';

function App() {
  return (
    <div className="App">
      <Greet name="Samir" msgcount={20} isLoggedin={true} />
    </div>
  );
}

export default App;
