import React, { useEffect, useState } from 'react'

export const Listado = () => {

    const [listState, setListState] = useState([]);

    useEffect(() => {
        console.log("Componente del listado de peliculas cargado!");
        getMovies();
    }, []);

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem("movies"));
        console.log(movies);
        setListState(movies);
    }

    return (
        <>
            {listState != null ?
                listState.map(movie => {

                    return (
                        <article key={movie.id} className="peli-item">
                            <h3 className="title">{movie.title}</h3>
                            <p className="description">{movie.description}</p>
                            <button className="edit">Editar</button>
                            <button className="delete">Borrar</button>
                        </article>
                    )

                }) : <h3>&nbsp;No hay pelis</h3>
            }
        </>
    )
}
