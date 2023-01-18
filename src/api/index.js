import axios from "axios"
export const baseBackend = "http://localhost:2000"


export default axios.create({
        baseURL: baseBackend
})