import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"
import { Inicio } from '../components/Inicio'
import { Portfolio } from '../components/Portfolio'
import { Servicios } from '../components/Servicios'
import { Curriculum } from '../components/Curriculum'
import { Contacto } from '../components/Contacto'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Footer } from '../components/layout/Footer'

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* HEADER Y NAV */}
      <HeaderNav />
      {/* CONTENIDO CENTRAL */}
      <section className='content'>
        <Routes>
          <Route path='/' element={<Navigate to={"/inicio"}/>} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='*' element={<h1>Error</h1>} />          
        </Routes>
      </section>
      {/* FOOTER */}
      <Footer />
    </BrowserRouter>
  )
}
