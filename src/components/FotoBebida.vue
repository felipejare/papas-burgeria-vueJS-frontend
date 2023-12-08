<script setup>
import { ref, defineProps } from 'vue'
import bebidaService from '@/services/estoques.js'

const props = defineProps({
  bebida: Object,
});


  const bebidas = ref([])
  const currentBebida = ref({
    name: ''
  })

  // onMounted(async () => {
  //   const data = await ingredienteService.getAllIngredientes()
  //   ingredientes.value = data
  // })

  async function deleteBebida(bebida) {
    await bebidaService.deleteBebida(bebida)
    const data = await bebidaService.getAllBebidas()
    bebidas.value = data
  }

  function editBebida(bebida) {
    currentBebida.value = { ...bebida }
  }


</script>



<template>
    <div class="container">
      <div class="fotinhas">
        <div class="fotoes">foto aqui</div>
        <input type="text" v-model="(props.bebida.nome)">
        <input type="text" v-model="(props.bebida.tipo)">
        <input type="text" v-model="(props.bebida.descricao)" >
        <input type="text" v-model="(props.bebida.preco)">
        <button @click="editBebida(currentIngrediente)"><span class="type">Editar</span></button> <button @click="deleteBebida(props.bebida)"><span type="text">Deletar</span></button>
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
    margin-left: 10px;
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