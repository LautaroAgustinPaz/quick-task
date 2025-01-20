import React from 'react'
import Tareas from '../components/Tareas';
import Reloj from '../components/Reloj';

const PaginaTareas = () => {

  return (
    <div className='contenedor-global'>
        <div className='navbar'><Reloj /></div>
        <Tareas />
    </div>
  );
}

export default PaginaTareas
