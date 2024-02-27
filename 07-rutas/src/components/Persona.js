import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

    //valores por defecto en parametros opcionales
    //let {nombre = "Fulano", apellido = "Fulanez"} = useParams();

    const {nombre, apellido} = useParams();
    const navegar = useNavigate();

    const enviar = (e) => {
        e.preventDefault();
        let nombre = e.target.nombre.value;
        let apellido = e.target.apellido.value;
        let url = `/persona/${nombre}/${apellido}`;

        if(nombre.length < 1 || apellido.length < 1){
            navegar('/inicio');
        }
        else {
            navegar(url);
        }
    }

    return (
        <div>
            {!nombre && <h1>Sin persona</h1>}
            {nombre && <h1>Página de persona: {nombre} {apellido}</h1>}
            
            <form onSubmit={enviar}>
                <input type='text' name='nombre' />
                <input type='text' name='apellido' />
                <input type='submit' name='enviar' value='enviar' />
            </form>
        </div>
    )
}
