<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  ingrediente: Object,
});

import ingredienteService from '@/services/estoques.js'


  const ingredientes = ref([])
  const currentIngrediente = ref({
    name: ''
  })

  // onMounted(async () => {
  //   const data = await ingredienteService.getAllIngredientes()
  //   ingredientes.value = data
  // })

  async function deleteIngredientes(ingrediente) {
    await ingredienteService.deleteIngrediente(ingrediente)
    const data = await ingredienteService.getAllIngredientes()
    ingredientes.value = data
  }

  function editIngrediente(ingrediente) {
    currentIngrediente.value = { ...ingrediente }
  }


</script>



<template>
    <div class="container">
      <div class="fotinhas">
        <div class="fotoes">foto aqui</div>
        <input type="text" v-model="(props.ingrediente.nome)">
        <input type="text" v-model="(props.ingrediente.descricao)">
        <input type="text" v-model="(props.ingrediente.preco)">
        <button @click="deleteIngredientes(props.ingrediente)"><span class="type">editar</span></button> <button @click="deleteIngredientes(props.ingrediente)"><span type="text">deletar</span></button>
        <!-- <p>{{ props.ingrediente.nome }}</p>
        <p>{{ props.ingrediente.preco }}</p>
        <p>{{ props.ingrediente.descricao }}</p>
        <p><strong>quero a foto aq</strong></p>
        <img v-if="props.ingrediente.images && props.ingrediente.images.length > 0" :src="props.ingrediente.images[0].url" alt="" width="350" height="350"> -->
      </div>
    </div>
  </template>
  

  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }
  .fotinhas {
    margin: 30px;
    width: 400px;
    height: 400px;
    background-color: #D9D9D9;
    border-radius: 10px;
  }
  .fotoes{
   background-color: rgb(123, 123, 123);
   margin: 5%;
   width: 90%;
   height: 70%;
  }
  .fotinhas input{
    margin-left: 2%;
    width: 20%;
    margin-left: 30px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
  }
  .fotinhas button{
    width: 30%;
    height: 6%;
    margin-left: 50px;
    background-image: linear-gradient(144deg,#d51b2a, #791121 50%,#940e3f);
    border-radius: 20px;
    color: white;
    box-shadow: rgba(215, 29, 29, 0.2) 0 15px 30px -5px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    border: none;
  }
  .fotinhas:hover button, span {
  background-color: #891f1f;

  transition: 300ms;
}

.fotinhas button, span {
  background: none;
}
  </style>