import React, { useState } from "react";
import { GuardarStorage } from "../helpers/GuardarStorage";

export const Crear = ({ setList }) => {
  const [peli, setPeli] = useState({
    titulo: "",
    descripcion: "",
    id: "",
  });

  const tituloComponente = "Añadir película";

  const { titulo, descripcion } = peli;

  const formValues = (e) => {
    e.preventDefault();
    let datos = e.target;
    let titulo = datos.titulo.value;
    let descripcion = datos.descripcion.value;

    let pelicula = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };

    setPeli(pelicula);

    setList((element) => {
      return [...element, pelicula];
    });

    GuardarStorage("Pelis", pelicula);
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      <strong>
        {titulo && descripcion && "Has creado una película:" + " " + titulo}
      </strong>
      <form onSubmit={formValues}>
        <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="descripcion"
        />
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};
