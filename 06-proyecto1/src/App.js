import './App.css';

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
        <article className="peli-item">
          <h3 className="title">Batman</h3>
          <p className="description">A bat hero</p>
          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Batman</h3>
          <p className="description">A bat hero</p>
          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Batman</h3>
          <p className="description">A bat hero</p>
          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Batman</h3>
          <p className="description">A bat hero</p>
          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>
      </section>

      <aside className="lateral">
        <div className="search">
          <h3 className="title">Buscador</h3>
          <form>
            <input type="text" />
            <button>Buscar</button>
          </form>
        </div>
        <div className="add">
          <h3 className="title">Añadir película </h3>
          <form>
            <input type="text" placeholder="Titulo" />
            <input type="textarea" placeholder="Descripción" />
            <input type="submit" value="Guardar" />
          </form>
        </div>
      </aside>

      <footer className="footer">
        &copy; Proyecto React Pelis
      </footer>
    </div>

  );
}

export default App;
