import axios from "axios";

const clienteAxios = axios.create({
    //Se crea la URL para usarla en todas las paginas con la variable de entorno
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
})

export default clienteAxios;