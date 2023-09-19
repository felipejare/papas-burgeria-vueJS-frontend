import api from '../plugins/api'

class comandaService {
    async getAllComandas() {
        const response = await api.get('/comandas/')
        return response.data
    }

    async deleteComanda(comanda){
        const response = await api.delete(`/comandas/${comanda.id}/`)
        return response.data
    }
}

export default new comandaService()