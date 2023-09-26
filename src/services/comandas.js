import api from '../plugins/api'

class comandaService {
    async getAllComandas() {
        const response = await api.get('/comandas/')
        return response.data
    }
    async saveComanda(comanda) {
        let response
        if (comanda.id) {
            response = await api.put(`/comandas/${comanda.id}/`, comanda)
        } else {
            response = await api.post('/comandas/',comanda)
        }
        return response.data
    }

    async deleteComanda(comanda){
        const response = await api.delete(`/comandas/${comanda.id}/`)
        return response.data
    }
}

export default new comandaService()