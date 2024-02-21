import './App.css';
import { Buscador } from './components/Buscador';
import { Crear } from './components/Crear';
import { Listado } from './components/Listado';

function App() {
  return (

    <div className="layout">
      <header className="header">
        <h1>Mis pelis</h1>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Películas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>

      </nav>

      <section className="content">
        <Listado/>
      </section>

      <aside className="lateral">
        <Buscador/>
        <Crear/>
      </aside>

      <footer className="footer">
        &copy; Proyecto React Pelis
      </footer>
    </div>

  );
}

export default App;
