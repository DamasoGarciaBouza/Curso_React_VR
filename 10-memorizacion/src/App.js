import './App.css';
import { Gestion } from './components/Gestion';
import { Tareas } from './components/Tareas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*Ejercicio con hook useMemo*/}
        <Tareas/>

        {/*Ejercicio con memo para componentes */}
        {/*<Gestion />*/}
      </header>
    </div>
  );
}

export default App;
