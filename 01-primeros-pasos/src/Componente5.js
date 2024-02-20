import React from 'react';

const Componente5 = () => {

    const pelis = ['Terminator', 'Batman', 'Jurassic Park']
    //const pelis = []

    return (
        <div className='componente-5'>
            <h3>Listado de pelis</h3>
            {pelis.length >= 1 ? (
                <ul>
                    {//Debemos usar el indice para quitar error en consola
                        pelis.map(
                            (peli, indice) => {
                                return <li key={indice}>{peli}</li>
                            }
                        )
                    }
                </ul>)
                : (
                    <p>No hay pelis</p>
                )
            }
        </div>
    )
}

export default Componente5;
