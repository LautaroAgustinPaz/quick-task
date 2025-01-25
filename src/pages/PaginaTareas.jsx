import React from 'react'
import Tareas from '../components/Tareas.jsx';
import Reloj from '../components/Reloj.jsx';

const PaginaTareas = () => {

  return (
    <div className='contenedor-global'>
        <div className='navbar'><Reloj /></div>
        <Tareas />
    </div>
  );
}

export default PaginaTareas
