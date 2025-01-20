import React from 'react';
import TareasCard from './TareasCard';

const TareasLista = ({ tasks, onEditTask, onDeleteTask }) => {

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TareasCard
          key={task.id}  // Asegúrate de que cada tarea tiene una key única
          task={task}
          onEdit={() => onEditTask(task)}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </div>
  );
};

export default TareasLista;
