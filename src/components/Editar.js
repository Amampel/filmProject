import React from "react";

export const Editar = ({ peli, getPeliculas, setEditar, setList }) => {
  const titulo_componente = "Editar Pelicula";

  const guardarEdicion = (e, id) => {
    e.preventDefault();

    let datos = e.target;

    const peliculasAlmacenadas = getPeliculas();

    const indice = peliculasAlmacenadas.findIndex((e) => e.id === id);

    let peliActualizada = {
      id,
      titulo: datos.titulo.value,
      descripcion: datos.descripcion.value,
    };

    peliculasAlmacenadas[indice] = peliActualizada;

    localStorage.setItem("Pelis", JSON.stringify(peliculasAlmacenadas));

    setList(peliculasAlmacenadas);

    setEditar(0);
  };

  return (
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>
      <form onSubmit={(e) => guardarEdicion(e, peli.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue={peli.titulo}
        ></input>
        <textarea
          name="descripcion"
          defaultValue={peli.descripcion}
          className="descripcion_editada"
        ></textarea>
        <input type="submit" className="editar" value="Actualizar"></input>
      </form>
    </div>
  );
};
