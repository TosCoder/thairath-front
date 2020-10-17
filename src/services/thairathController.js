import api from './apiService'

export const thairathController = () => {
    return {
      getAll: () => {
        return api.get(`/`)
      }
    }
  }
  