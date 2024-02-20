import React from 'react'

const Componente4 = () => {
    const miFuncion = (e, nombre) => {
        console.log(e.target);
        alert(`Hemos pasado esta variable: ${nombre}`)
    }
    /*Declaramos ahora la función fuera (funcionaria fuera del componente incluso)*/
    return (
        <>
            {/*Para pasar parametros hay que invocar la funcion poniendo el evento primero, o se llamara sola*/}
            <button onDoubleClick={e => miFuncion(e, "Fulanito")}>Doble click!</button>
        </>
    )
}

export default Componente4;