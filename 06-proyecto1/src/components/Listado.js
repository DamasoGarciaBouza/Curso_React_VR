import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({ listState, setListState }) => {

    //const [listState, setListState] = useState([]);

    const [editar, setEditar] = useState(0);

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem("movies"));
        console.log(movies);
        setListState(movies);
        return movies;
    }

    useEffect(() => {
        console.log("Componente del listado de peliculas cargado!");
        getMovies();
    }, []);

    const deleteMovie = (id) => {
        let stored_movies = getMovies();

        let new_movie_array = stored_movies.filter(movie => movie.id !== parseInt(id));

        setListState(new_movie_array);


        localStorage.setItem('movies', JSON.stringify(new_movie_array));
    }

    return (
        <>

            {(listState != null) ?

                listState.map(movie => {

                    return (
                        <article key={movie.id} className="peli-item">
                            <h3 className="title">{movie.title}</h3>
                            <p className="description">{movie.description}</p>
                            <button className="edit" onClick={() => setEditar(movie.id)}>Editar</button>
                            <button className="delete" onClick={() => deleteMovie(movie.id)}>Borrar</button>
                            {/*aparece formulario para editar*/}
                            {editar === movie.id && (
                                <Editar movie={movie} 
                                getMovies={getMovies} 
                                setEditar={setEditar} 
                                setListState={setListState} />
                            )}
                        </article>
                    )

                }) : <h3>&nbsp;No hay pelis</h3>
            }
        </>
    )
}
