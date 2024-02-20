import React, {useState} from 'react'

export const MiPrimerEstado = () => {

    /* Esto no funciona sin useState
    let nombre = "Fulano"

    const cambiarNombre = e => nombre = "Mengano"
    */

    let [ nombre, setNombre] = useState("Fulano")

    let cambiarNombre = (e, nombre) => {setNombre(nombre)}

    return (
        <div>
            <h3>Mi Primer Estado</h3>
            <strong>
                {nombre}
            </strong>
            &nbsp;
            <button onClick={ e => cambiarNombre(e, "Mengano") }> Cambiar nombre por Mengano</button>
            &nbsp;            
            <input type='text' onChange={e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre' />
        </div>
    )
}
