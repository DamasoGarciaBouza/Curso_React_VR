import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import Componente1 from './components/Componente1';

function App() {

  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>El estado en React - Hook useState</h1>
        <MiPrimerEstado />

        <br></br>
        <Componente1 currentYear={currentYear} />
        
      </header>

      
    </div>
  );
}

export default App;
