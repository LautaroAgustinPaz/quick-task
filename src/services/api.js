import axios from "axios";

// Configura una instancia de Axios con:
// facilitar las solicitudes HTTP a una API específica
const api = axios.create({
  baseURL: "https://678d6b4cf067bf9e24ea404e.mockapi.io/tasks", // URL base de la API
  // headers: {
  //   Authorization: "Bearer IogZmie8OsTA8lRtVkC7", // tipo de token de seguridad
  // },
});

export default api;
