import api from '../plugins/api'

class burgerService {
    async getAllBurger() {
        const response = await api.get('/burgers/')
        return response.data
    }
    async saveBurger(burger) {
        let response
        if (burger.id) {
            response = await api.put(`/burgers/${burger.id}/`, burger)
        } else {
            response = await api.post('/bugers/',burger)
        }
        return response.data
    }

    async deleteBurger(burger){
        const response = await api.delete(`/burgers/${burger.id}/`)
        return response.data
    }
}

export default new burgerService()