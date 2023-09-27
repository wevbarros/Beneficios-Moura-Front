import axios from 'axios'

export const api = axios.create({
  // baseURL: 'http//localhost:5218'
  baseURL: 'https://apibeneficiosmoura.azurewebsites.net/'
})