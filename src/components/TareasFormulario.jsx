import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';

const TareasFormulario = ({ onAddTask, onUpdateTask, editingTask, onCancel }) => {
  const [task, setTask] = useState({ title: "", description: "", completed: false });

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      onUpdateTask(task);
    } else {
      onAddTask(task);
    }
    setTask({ title: "", description: "", completed: false });
  };

  // Reset
  const handleCancel = () => {
    setTask({ title: "", description: "", completed: false });
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Agregar una tarea"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Descripción"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />

      <div className="form-actions">
        <Button label="Cancelar" className="p-button-secondary pi pi-times button-cancelar" onClick={handleCancel} />
        <Button className="pi pi-check button-anadir" type="submit" label={editingTask ? "Actualizar" : "Añadir"} />
      </div>
    </form>
  );
};

export default TareasFormulario;
