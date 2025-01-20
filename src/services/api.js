import axios from "axios";

const api = axios.create({
  baseURL: "https://678d6b4cf067bf9e24ea404e.mockapi.io/tasks", // URL base de la API
  // headers: {
  //   Authorization: "Bearer IogZmie8OsTA8lRtVkC7", // Token de autorización
  // },
});

export default api;
