import api from '../plugins/api'

class bebidaService {
    async getAllBebida() {
        const response = await api.get('/bebidas/')
        return response.data
    }
    async saveBebida(bebida) {
        let response
        if (bebida.id) {
            response = await api.put(`/bebidas/${bebida.id}/`, bebida)
        } else {
            response = await api.post('/bebidas/',bebida)
        }
        return response.data
    }

    async deleteBebida(bebida){
        const response = await api.delete(`/bebidas/${bebida.id}/`)
        return response.data
    }
}

export default new bebidaService()