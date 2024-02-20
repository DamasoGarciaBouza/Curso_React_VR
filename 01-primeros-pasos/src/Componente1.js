import React from 'react'

const Componente1 = (diccionario) => {

  const otraPalabra = "teléfonos";

  return (
    <div>Componente 1:
      <span>{diccionario.peras}</span>
      <span>{diccionario.medicinas}</span>
      <strong>{otraPalabra}</strong>
    </div>
  )
}

export default Componente1;