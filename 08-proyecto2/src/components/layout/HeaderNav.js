import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <span></span>
                <h2>My React Portfolio</h2>
            </div>
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/inicio' className={({isActive}) => isActive ? "active" : ""}>inicio</NavLink>
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
