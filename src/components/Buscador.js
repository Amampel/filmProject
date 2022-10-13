import React, { useState } from "react";

export const Buscador = ({ list, setList }) => {
  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEcontrado] = useState(false);

  const buscarPeli = (e) => {
    setBusqueda(e.target.value);

    let pelisEncontradas = list.filter((peli) => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });

    if (busqueda.length <= 1 || pelisEncontradas <= 0) {
      pelisEncontradas = JSON.parse(localStorage.getItem("Pelis"));
      setNoEcontrado(true);
    } else {
      setNoEcontrado(false);
    }

    setList(pelisEncontradas);
  };

  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>

      {noEncontrado == true && busqueda.length >= 1 && (
        <span className="no-encontrado">
          No se ha encontrado ninguna coincidencia
        </span>
      )}
      <form>
        <input
          type="text"
          id="search_field"
          name="busqueda"
          autoComplete="off"
          onChange={buscarPeli}
        />
        <button id="search">Buscar</button>
      </form>
    </div>
  );
};
