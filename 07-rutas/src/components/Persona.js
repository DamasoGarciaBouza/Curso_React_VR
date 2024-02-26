import React from 'react'
import { useParams } from 'react-router-dom'

export const Persona = () => {

    const params = useParams();

    return (
        <div>
            <h1>Página de persona: {params.nombre} {params.apellido}</h1>
            <p></p>
        </div>
    )
}
