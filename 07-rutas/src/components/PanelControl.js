import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const PanelControl = () => {
    return (
        <div>
            <h1>PanelControl</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/panel/inicio'>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/panel/crear-articulos'>Crear articulos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/panel/gestion-usuarios'>Gestion usuarios</NavLink>
                    </li>                                     
                </ul>
            </nav>
            <div>
                {/*Cargar aquí componentes de las subrutas*/}
                <Outlet/>
            </div>
        </div>
    )
}
