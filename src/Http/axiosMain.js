import axios from 'axios'

const axiosMain = axios.create({
  baseURL: 'http://localhost:3001/',
})



export default axiosMain