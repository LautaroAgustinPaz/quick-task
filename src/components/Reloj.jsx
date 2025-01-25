import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const Reloj = () => {
  const [time, setTime] = useState(new Date());                // Inicializa con una fecha

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);                          // Limpia el intervalo cuando el componente se desmonta
  }, []);

  return (
      <h1 className='tiempo'>{format(time, 'HH:mm')}</h1>       // formatear la hora actual 
  );
};

export default Reloj;
