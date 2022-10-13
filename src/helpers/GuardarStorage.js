export const GuardarStorage = (id, pelicula) => {
  let elementos = JSON.parse(localStorage.getItem(id));

  Array.isArray(elementos)
    ? elementos.push(pelicula)
    : (elementos = [pelicula]);

  localStorage.setItem(id, JSON.stringify(elementos));

  console.log(elementos);
  return pelicula;
};
