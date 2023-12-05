import api from '../plugins/api'

class ingredienteService {
    async getAllIngredientes() {
        const response = await api.get('/ingredientes/')
        return response.data
    }
    async saveIngrediente(ingrediente) {
        let response
        if (ingrediente.id) {
            response = await api.put(`/ingredientes/${ingrediente.id}/`, ingrediente)
        } else {
            response = await api.post('/ingredientes/',ingrediente)
        }
        return response.data
    }

    async deleteIngrediente(ingrediente){
        const response = await api.delete(`/ingredientes/${ingrediente.id}/`)
        return response.data
    }
}

export default new ingredienteService()