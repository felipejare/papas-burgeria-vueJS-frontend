<script setup>
import { ref, onMounted } from 'vue'
import NavBar from '../components/NavBar.vue'

import comandaService from '@/services/comandas.js'


const comandas = ref([])
const currentComanda = ref({
  name: ''
})

onMounted(async () => {
  const data = await comandaService.getAllComandas()
  comandas.value = data
})

async function deleteComanda(comanda) {
  await comandaService.deleteComanda(comanda)
  const data = await comandaService.getAllComandas()
  comanda.value = data
}

function editComanda(comanda) {
  currentComanda.value = { ...comanda }
}


</script>

<template>
  <NavBar />

  <div class="container">
    <div class="divCenter">
      <table>
        <thead>
          <tr class="contents">
            <th class="idezinho">Pedido</th>
            <th class="tituloe">Nome cliente</th>
            <th class="editorae">ID</th>
            <th class="precoe">Valor</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="comanda in comandas" :key="comanda.id" :comanda=comanda>
            <td class="editorad">{{ comanda.itens }}</td>
            <td class="titulod">{{ comanda.usuario }}</td>
            <td class="idezinhod">{{ comanda.id }}</td>
            <td class="precod">{{ comanda.preco }}</td>
            <td>
              <button @click="deleteComanda(comanda)">deletar</button>
              <button @click="editComanda(comanda)">editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
.container {
  background-color: white;
  width: 100%;
  height: 100%;
}
.divCenter {
  width: 1468px;
  height: 800px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  background-color: #ececec;
}

table {
  width: 100%;
  margin: 2% auto;
  border-collapse: collapse;
}

table tr th {
  border: 1px solid #c21e1e;
  padding: 10px;
}

table tr td {
  border: 1px solid #de2b2b;
}

table tr:nth-child(odd) {
  background-color: #de2b2b;
}

select {
  width: 60%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}

td {
  width: 50%;
}

th {
  width: 40%;
}
</style>
