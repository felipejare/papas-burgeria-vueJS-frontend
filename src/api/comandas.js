import axios from 'axios'
export default class ComandasApi {
    async buscarTodasAsComandas() {
      const { data } = await axios.get('/caminho/');
      return data;
    }
    async adicionarComanda(comanda) {
        const { data } = await axios.post("/caminho/", comanda)
        return data;
    }
    async atualizarComanda(comanda) {
        const { data } = await axios.put (`/caminho/${comanda.id}`, comanda);
        return data;
    }
    async excluirComanda(id) {
        const { data } = await axios.delete(`/caminho/${id}`);
        return data;
    }
}