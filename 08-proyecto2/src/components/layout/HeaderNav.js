import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header>
        <h1>Portfolio React</h1>
        <nav>
            <ul>
                <li>
                    <NavLink to='/inicio'>inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio'>portfolio</NavLink>
                </li>
                <li>
                    <NavLink to='/servicios'>servicios</NavLink>
                </li>
                <li>
                    <NavLink to='/curriculum'>curriculum</NavLink>
                </li>
                <li>
                    <NavLink to='/contacto'>contacto</NavLink>
                </li>                                                                
            </ul>
        </nav>
    </header>
  )
}
