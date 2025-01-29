import React, { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';

// Checkbox component
const CustomCheckbox = ({ checked, onChange }) => { 
  return ( 
  <label className="custom-checkbox">
    <input type="checkbox" checked={checked} onChange={onChange} /> <span className="checkmark">
    </span>
  </label> ); };

 const CustomButton = ({ iconClass, label, onClick, className }) => { return ( <button className={`custom-button ${className}`} onClick={onClick}> <i className={`pi ${iconClass}`} style={{ marginRight: '0.5rem' }}></i> {label} </button> ); };

// COMPONENTE PRINCIPAL
const TareasCard = ({ task, onEdit, onDelete }) => {

    const [checked, setChecked] = useState(false);

  return (
    <div className="task-card">
      <div className="task-actions">
        <div className="card flex justify-content-center">
          <CustomCheckbox checked={checked} onChange={(e) => setChecked(e.target.checked)} /> 
        </div>
          <CustomButton className="btn-editar" iconClass="pi-pencil" onClick={() => onEdit(task)} /> 
          <CustomButton className="btn-eliminar" iconClass="pi-trash" onClick={() => onDelete(task.id)} />
      </div>
      <h3 className='card-title'>{task.title}</h3>


      <p>{task.description}</p>
      {/* <p>Estado: {task.completed ? "Completada" : "Pendiente"}</p> */}
    </div>
  );
};

export default TareasCard;
