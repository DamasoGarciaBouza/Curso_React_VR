import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Trabajo = () => {

  const params = useParams();
  const [trabajo, setTrabajo] = useState({});

  useEffect(() => {

    const trabajoActual = trabajos.filter(t => t.id === params.id)
    setTrabajo(trabajoActual[0]);

  }, []);

  return (
    <div className='page'>
      <h2>Trabajo: {trabajo.nombre}</h2>
      <p>{trabajo.descripcion}</p>
      <p><a href={"https://" + trabajo.web} target='_blank'>{trabajo.web}</a></p>
    </div>
  )
}
