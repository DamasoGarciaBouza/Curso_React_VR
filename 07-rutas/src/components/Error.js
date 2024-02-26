import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
    return (
        <>
            <h1>404</h1>
            <p>Página no existe</p>
            <Link to="/inicio">Volver a inicio</Link>
            {//Funciona con un navlink sin hacer recargar la pagina -usar tambien enlaces externos
            }
        </>
    )
}
