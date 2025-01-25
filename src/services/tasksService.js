import api from "./api";

//                              CRUD (Crear, Leer, Actualizar, Eliminar)

// Obtener todas las tareas (Leer)
export const getTasks = async () => {                     // unción asincrónica llamada
  const response = await api.get("/");              // Llamada a la api con el Metodo .GET
  return response.data.response;                                   // Devolver los datos de la respuesta:
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
