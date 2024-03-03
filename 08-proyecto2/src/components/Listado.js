import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

// valor por defecto en limite para cuando no pasamos prop
export const Listado = ({ limite = 10}) => {
    return (
        <section className='works'>
            {// solo pasamos el limite al llamar al componente listado desde la pag inicio
                trabajos.slice(0,limite).map(trabajo => {
                    return (
                    <article className='work-item' key={trabajo.id}>
                        <h4><Link to={"/trabajo/" + trabajo.id}>{trabajo.nombre}</Link></h4>
                        <div className='mask'>
                            <img alt="logo_trabajo" src={"/images/" + trabajo.id + ".png"} />{/*No ponemos la carpeta public en la ruta */}
                        </div>
                        <h5>{trabajo.web}</h5>
                    </article>
                    )
                })
            }
        </section>
    )
}
