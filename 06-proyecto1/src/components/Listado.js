import React, { useEffect } from 'react'

export const Listado = ({listState, setListState}) => {

    //const [listState, setListState] = useState([]);

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem("movies"));
        console.log(movies);
        setListState(movies);
    }

    useEffect(() => {
        console.log("Componente del listado de peliculas cargado!");
        getMovies();
    }, []);



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
