import React from 'react'
import { Link } from 'react-router-dom'
import { Listado } from './Listado'

export const Inicio = () => {
  return (
    <div>
      <h1>Aprendiendo React!</h1>
      <h2><Link to="/contacto">Contacta conmigo.</Link></h2>
      <Listado limite="2"/>
    </div>
  )
}
