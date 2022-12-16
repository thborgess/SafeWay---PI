import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:3000/api"
})

export default api;