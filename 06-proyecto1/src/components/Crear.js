import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({ setListState }) => {

  const componentTitle = "Añadir película";

  const [movieState, setMovieState] = useState({
    title: '',
    description: ''
  });

  const { title, description } = movieState;

  const getFormData = e => {
    e.preventDefault();

    //Conseguir datos del formulario
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    //Crear objeto de pelicula a guardar
    let movie = {
      id: new Date().getTime(),
      title,
      description
    };

    //Guardar estado
    setMovieState(movie);
    console.log(movie);

    //Actualizar el estado del listado principal


    setListState(elements => {
      if (elements == null) {
        return [movie];
      }
      else {
        return [...elements, movie]
      }
    })


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
