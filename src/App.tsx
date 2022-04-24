import './App.css';
import User from './components/context/user.component';
import { UserContextProvider } from './components/context/user.context';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
