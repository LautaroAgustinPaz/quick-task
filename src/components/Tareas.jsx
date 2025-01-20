import React, { useEffect, useState } from 'react';
import TareasFormulario from './TareasFormulario';
import TareasLista from './TareasLista';
import { getTasks, createTask, updateTask, deleteTask } from '../services/tasksService';

const Tareas = () => {

  // Valores iniciales y su actualización
  const [tasks, setTasks] = useState([]);                   // Tareas --> Vacio
  const [editingTask, setEditingTask] = useState(null);     // Editar Tarea --> Null

  // Cuando se monte el componente (Pagina) traemos las tasks
  useEffect(() => {
    fetchTasks();                                           // Traer todas las tareas
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(Array.isArray(data) ? data : []); // Asegúrate de que data es un array
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
    }
  };

  const handleAddTask = async (newTask) => {
    try {
      const data = await createTask(newTask);
      setTasks([...tasks, data]);
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  const handleUpdateTask = async (updatedTask) => {
    try {
      const data = await updateTask(updatedTask.id, updatedTask);
      setTasks(tasks.map((task) => (task.id === data.id ? data : task)));
      setEditingTask(null);
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  };

  return (
    <div className='tareas-contenedor'>
      <TareasFormulario
        onAddTask={handleAddTask}
        onUpdateTask={handleUpdateTask}
        editingTask={editingTask}
        onCancel={() => setEditingTask(null)}
      />
      <TareasLista
        tasks={tasks}
        onEditTask={setEditingTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default Tareas;
