<script setup>
import NavBar from '../components/NavBar.vue'
import { ref, reactive, onMounted } from 'vue'
import BlockEstoq from '../components/BlockEstoq.vue'
import BlockbEstoq from '../components/BlockbEstoq.vue'
import BlockhEstoq from '../components/BlockhEstoq.vue'
import { RouterLink } from 'vue-router'

import bebidaService from '../services/bebidas'
import ingredienteService from '@/services/estoques.js'
import imageService from '../services/images.js'
import burgerService from '../services/burger.js'

const coverUrl = ref('')
const file = ref(null)
const currentIngrediente = reactive({
  nome:'',
  preco:'',
  descricao:'',
})
const currentBebida = reactive({
  nome:'',
  preco:'',
  descricao:'',
})


function onFileChange(e) {
  file.value = e.target.files[0]
  coverUrl.value = URL.createObjectURL(file.value)
}

async function save() {
  await ingredienteService.saveIngrediente(currentIngrediente)
  await bebidaService.saveBebida(currentBebida)
  Object.assign(currentBebida)
  Object.assign(currentIngrediente)
}



</script>
<template>
    <NavBar />
    <div class="container">
      <div class="divCenter">
        <h1>Gerenciamento de Estoque</h1>
        <input type="text" placeholder="Ingrediente" v-model="(currentIngrediente.nome)" > <input type="text" placeholder="Descrição" v-model="(currentIngrediente.descricao)"><input type="number" placeholder="Preço" v-model="(currentIngrediente.preco)">  <div class="AddInputs"><button class="AddButton" @click="save">Adicionar</button></div>
        <hr>
        <BlockEstoq />
        <hr>
        <h2>Bebidas</h2>
        <input type="text" placeholder="Bebida" v-model="(currentBebida.nome)" > <input type="text" placeholder="Descrição" v-model="(currentBebida.tipo)"><input type="number" placeholder="Preço" v-model="(currentBebida.preco)"> <input type="text" placeholder="Nulo" v-model="(currentBebida.descricao)">  <div class="AddInputs"><button class="AddButton" @click="save">Adicionar</button></div>
        <hr>
        <BlockbEstoq />
        <hr>
        <h2>Hamburgueres</h2>
        <input type="text" placeholder="Bebida" v-model="(currentBebida.nome)" > <input type="text" placeholder="Descrição" v-model="(currentBebida.tipo)"><input type="number" placeholder="Preço" v-model="(currentBebida.preco)"> <input type="text" placeholder="Nulo" v-model="(currentBebida.descricao)">  <div class="AddInputs"><button class="AddButton" @click="save">Adicionar</button></div>
        <hr>
        <BlockhEstoq />
      </div>
    </div>
  </template>
  <style scoped>
 
 
 
 .container {
    background-color: white;
    min-width: 100%;
    height: 100%;
    display: flex;


  }
  .divCenter {
    width: 1468px;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: #ececec;

  }

.AddInputs button{
  width: 10%;
  height: 6%;
  background-image: linear-gradient(144deg,#d51b2a, #791121 50%,#940e3f);
  border-radius: 20px;
  color: white;
  box-shadow: rgba(215, 29, 29, 0.2) 0 15px 30px -5px;
  text-decoration: none;
  user-select: none;
  margin-left: 30px;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  border: none;
}
.AddInputs:hover button, span {
  background-color: #891f1f;
  transition: 300ms;
}

.AddInputs button, span {
  background: rgb(189, 28, 0) ;
}

.divCenter input{
  margin-left: 2%;
  width: 10%;
  margin-left: 30px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
}

</style>
  