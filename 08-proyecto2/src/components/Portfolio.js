import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const Portfolio = () => {
  return (
    <div className='page'>
      <h2>Portfolio</h2>

      <section className='works'>
        {
          trabajos.map(trabajo => {
            return (
              <article className='work-item' key={trabajo.id}>
                <h4><Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link></h4>
                <div className='mask'>
                  <img src={"/images/" + trabajo.id + ".png"} />{/*No ponemos la carpeta public en la ruta */}
                </div>
                <h5>{trabajo.web}</h5>
              </article>)
          })
        }
      </section>
    </div>
  )
}
