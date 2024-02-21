import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

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
    GuardarEnStorage("movies", movie);
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
