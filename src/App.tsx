import './App.css';
import BasicProps from './pages/basic-props/basic-props.component';
import { default as ContainerProps } from './pages/container-props/container-props.component';
import EventProps from './pages/event-props/event-props.component';

function App() {
  return (
    <div className="App">
      <BasicProps />
      <EventProps />
      <ContainerProps />
    </div>
  );
}

export default App;
