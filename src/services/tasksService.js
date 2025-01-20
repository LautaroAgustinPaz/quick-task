import api from "./api";

// Obtener todas las tareas
export const getTasks = async () => {
  const response = await api.get("/");
  return response.data;
};

// Crear una nueva tarea
export const createTask = async (task) => {
  if (!task.title) {
    throw new Error("El campo 'title' es requerido");
  }
  const response = await api.post("/", task);
  return response.data;
};

// Actualizar una tarea
export const updateTask = async (id, updatedTask) => {
  const response = await api.put(`/${id}`, updatedTask);
  return response.data;
};

// Eliminar una tarea
export const deleteTask = async (id) => {
  await api.delete(`/${id}`);
};
