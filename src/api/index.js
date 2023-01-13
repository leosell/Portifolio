import axios from "axios";

const api = axios.create({
    baseURL: 'https://leosell.vercel.app:4000'
})

export default api