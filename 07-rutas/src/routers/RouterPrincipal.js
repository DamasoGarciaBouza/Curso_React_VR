import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Error } from '../components/Error'
import { Persona } from '../components/Persona'

export const RouterPrincipal = () => {

    return (
        <BrowserRouter>

            <h1>Cabecera</h1>
            <hr />

            <nav>
                <ul>
                    <li>
                        <NavLink to='/inicio' className={({ isActive }) => isActive ? "activado" : ""}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/articulos' className={({ isActive }) => isActive ? "activado" : ""}>Artículos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacto' className={({ isActive }) => isActive ? "activado" : ""}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/articulos' element={<Articulos />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/persona/:nombre/:apellido' element={<Persona />} />                
                <Route path='/*' element={<Error />} />


{/*                 <Route path='*' element={
                        <>
                            <h1>404</h1>
                            <p>Página no existe</p>
                        </>
                    }
                /> */}


            </Routes>
        </BrowserRouter>
    )
}
