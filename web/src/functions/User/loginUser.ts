import api from '../../services/api'

export const loginUser = async (username: string, password: string) => {
  const response = await api.post('/login', {
    username,
    password
  })

  return response.data
}
