import axios from 'axios'

const api = axios.create({
  baseURL: 'https://papas-burgueria-django-backend-dev-pfxc.1.ie-1.fl0.io/api/'
})

export default api
