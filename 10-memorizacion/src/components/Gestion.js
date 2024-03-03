import React, { useState, useRef, useEffect } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

  const [name, setName] = useState("");
  const [page, setPage] = useState(1);

  //no ejecutar metodos directamente en el componente, si no de forma reactiva mejor
  //usaremos este use effect cuando modifiquemos nombre o pagina

  useEffect(() => console.log("USE EFFECT - La vista de gestion se ha renderizado!"), [name, page]);

  const managerInput = useRef();
  // usamos la referencia para recoger los datos de manera mas actualizada pero no es necesaria aqui
  const assignManager = e => {
    //let managerName = managerInput.current.value;
    setName(e.target.value);
  }

  return (
    <div>
      <h1>Nombre del gestor: {name}</h1>
      <input type='text' ref={managerInput} onChange={assignManager} placeholder='Introduce tu nombre de gestor' />
      <h2>Listado de empleados: </h2>
      <p>Usuarios son gestionados por: {name}</p>
      <button onClick={() => { setPage(1) }}>Página 1</button>
      <button onClick={() => { setPage(2) }}>Página 2</button>
      <Empleados page={page} />
    </div>
  )
}
