import axios from "axios";

const api = axios.create({
    baseURL: 'https://192.168.1.14:4000'
})

export default api