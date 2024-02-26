import React from 'react'

export const Editar = ({ movie, getMovies, setEditar, setListState }) => {
  const titulo_componente = "Editar pelicula";

  const saveEdit = (e, id) => {
    e.preventDefault();

    let target = e.target;
    const stored_movies = getMovies();
    const index = stored_movies.findIndex(movie => movie.id === id);
    
    let updated_movie = {
      id, title: 
      target.title.value, 
      description: target.description.value
    }
    console.log('Peli actual');
    console.log(index, updated_movie);
    stored_movies[index] = updated_movie;
    console.log(stored_movies);

    localStorage.setItem("movies",JSON.stringify(stored_movies));

    setListState(stored_movies);
    setEditar(0);//para cerrar el formulario?

  }

  return (
    <div className='edit_form'>
      <h2 className='title'>{titulo_componente}: {movie.title}</h2>
      <form onSubmit={e => saveEdit(e, movie.id)}>
        <input type='text'
          name='title'
          className='titulo_editado'
          defaultValue={movie.title} />
        <textarea name='description'
          defaultValue={movie.description}
          className='descripcion_editada' />
        <input type='submit' className='editar' value='Actualizar' />
      </form>
    </div>
  )
}
