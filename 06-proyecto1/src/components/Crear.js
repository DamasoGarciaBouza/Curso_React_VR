import React, { useState } from 'react'

export const Crear = () => {

  const componentTitle = "Añadir película";

  const [movieState, setMovieState] = useState({
    title: '',
    description: ''
  });

  const { title, description } = movieState;

  const getFormData = e => {
    e.preventDefault();

    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    let movie = {
      id: new Date().getTime(),
      title,
      description
    };

    setMovieState(movie);
    console.log(movie);

    //Guardar en almacenamiento local (tiene que ser numero o string, no un array directamente)

    saveInLocalStorage(movie);

  }

  const saveInLocalStorage = movie => {
    //Conseguir elementos ya guardados en local storage
    let elements = JSON.parse(localStorage.getItem('movies'));

    console.log(elements);

    //Comprobar si es un array
    if (Array.isArray(elements)) {
      elements.push(movie);
    } else {
      elements = [movie];
    }

    console.log(elements);

    //Guardar en local storage

    localStorage.setItem('movies', JSON.stringify(elements));
  }

  return (
    <div className="add">
      <h3 className="title">{componentTitle}</h3>
      <strong>
        {(title && description) && "Has creado la pelicula:" + movieState.title}
      </strong>
      <form onSubmit={getFormData}>
        <input type="text" id='title' name='title' placeholder="Titulo" />
        <input type="textarea" id='description' name="description" placeholder="Descripción" />
        <input type="submit" id='save' value="Guardar" />
      </form>
    </div>
  )
}
