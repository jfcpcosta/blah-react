import axios from 'axios'

export const api = axios.create({
  baseURL: 'blah.reativ.dev',
})

api.interceptors.request.use((options) => {
  const token = localStorage.getItem('@Blah::token-1.0.0')

  if (token) {
    options.headers.Authorization = `Bearer ${token}`
  }

  return options
})
