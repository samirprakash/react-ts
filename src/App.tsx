import './App.css';
import User from './components/context/user/user.component';
import { UserContextProvider } from './components/context/user/user.context';

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
