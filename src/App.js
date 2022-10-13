import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>MisPelis</h1>
      </header>

      <nav className="nav">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Peliculas</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>

      <section id="content" className="content">
        <Listado list={list} setList={setList} />
      </section>

      <aside className="lateral">
        <Buscador list={list} setList={setList} />
        <Crear setList={setList} />
      </aside>

      <footer className="footer">
        &copy; Máster en React -{" "}
        <a href="https://victorroblesweb.es">victorroblesweb.es</a>
      </footer>
    </div>
  );
}

export default App;
