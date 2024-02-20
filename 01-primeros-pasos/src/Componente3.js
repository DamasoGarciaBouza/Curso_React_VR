import React, { Fragment } from 'react'

const Componente3 = () => {

  /* Interpolación typescript con ` y $ */
  const revisarAlt = e => alert(`Ese alert está en una función externa - Tecla alt pulsada: ${e.altKey}`);

  return (
    <Fragment>
        <button onClick={e => alert("Este alert está inline")}>Un click!</button>
        &nbsp;&nbsp;
        <button onClick={revisarAlt}>Otro click!</button>
        {/*El evento se pasa automaticamente a la funcion*/}
    </Fragment>
  )
}

export default Componente3;