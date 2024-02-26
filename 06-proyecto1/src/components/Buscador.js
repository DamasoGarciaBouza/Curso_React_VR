import React, { useEffect, useState } from 'react'

export const Buscador = ({ listState, setListState }) => {

    // Método mostrado por Víctor solo actualiza al segundo valor, con el valor anterior
    // Solución: llamamos a "searchMovie" con use effect

    const [search, setSearchState] = useState('');

    useEffect(() => {
        searchMovie()
    }, [search]);

    const searchMovie = (e) => {
        // Crear estado y actualizarlo

        //setSearchState(e.target.value);


        console.log("Search: " + search);


        // Filtrar listado para buscar coincidencias
        let found_movies = listState.filter(movie => {
            return movie.title.toLowerCase().includes(search.toLowerCase());
        })

        if (search.length < 1) {
            console.log("Not enough chars");
            found_movies = JSON.parse(localStorage.getItem("movies"));
        }

        if (found_movies == 0) {
            console.log("No movies found");            
            found_movies = JSON.parse(localStorage.getItem("movies"));
        }

        // Actualizar estado del listado principal con lo que he logrado filtar
        console.log(found_movies);
        setListState(found_movies);
    }

    return (
        <div className="search">
            <h3 className="title">Buscador: {search}</h3>
            <form>
                <input type="text"
                    id='search_field'
                    name='search'
                    autoComplete='off'
                    value={search}
                    //onChange={searchMovie}
                    onChange={(e) => setSearchState(e.target.value)}
                />
                <button id='search' onClick={searchMovie}>Buscar</button>
            </form>
        </div>
    )
}
