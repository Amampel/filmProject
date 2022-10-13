import React, { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({ list, setList }) => {
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    getPeliculas();
  }, []);

  const getPeliculas = () => {
    let getPelis = JSON.parse(localStorage.getItem("Pelis"));

    setList(getPelis);

    return getPelis;
  };

  const borrarPelicula = (id) => {
    let peliculasAlmacenadas = getPeliculas();

    let newArrayPelis = peliculasAlmacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );

    setList(newArrayPelis);

    localStorage.setItem("Pelis", JSON.stringify(newArrayPelis));
  };

  return (
    <>
      {list.length >= 1 ? (
        list?.map((peli) => {
          return (
            <article className="peli-item" key={peli.id}>
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>

              <button
                className="edit"
                onClick={() => {
                  setEditar(peli.id);
                }}
              >
                Editar
              </button>
              <button
                className="delete"
                onClick={() => borrarPelicula(peli.id)}
              >
                Borrar
              </button>
              {editar === peli.id && (
                <Editar
                  peli={peli}
                  getPeliculas={getPeliculas}
                  setEditar={setEditar}
                  setList={setList}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2>No hay películas para mostrar</h2>
      )}
    </>
  );
};
