import logo from './logo.svg';
import './App.css';
import Componente1 from './Componente1.js';
import Componente2 from './Componente2.js';
import Componente3 from './Componente3.js';
import Componente4 from './Componente4.js';
import Componente5 from './Componente5.js';
import Forms1 from './forms/Forms1.js';

function App() {

  const objetoCualquiera = {//Vamos a pasar este objeto al componente 2
    name: "Joe",
    houseColor: "Blue",
    weight: 300
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
        <p>
          Comenzamos con React!
        </p>
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}

<section>
        <h3>Primeros componentes a los que pasamos propiedades:</h3>
        <Componente1 peras='manzanas' medicinas='cracks' />
        <br></br>
        <Componente2 objetoCualquiera={objetoCualquiera} />
      </section>

      <section>
        <h3>Probemos los eventos:</h3>
        <Componente3 />
        &nbsp;&nbsp;
        <Componente4 />
      </section>

      <section>
        <Componente5 />
      </section>

      <section>
        <h3>Formularios:</h3>
        <Forms1 />
      </section>

      </header>



    </div>

  );
}

export default App;