<script setup>
import { defineProps } from 'vue';
import { ref, onMounted } from 'vue'

const props = defineProps({
  ingrediente: Object,
});

import ingredienteService from '@/services/estoques.js'


  const ingredientes = ref([])
  const currentIngrediente = ref({
    name: ''
  })

  onMounted(async () => {
    const data = await ingredienteService.getAllIngredientes()
    ingredientes.value = data
  })

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
      <div class="fotinhas" v-for="ingrediente in ingredientes" :key="ingrediente.id">
        <input type="text" v-model="ingrediente.nome">
        <input type="text" v-model="ingrediente.preco">
        <input type="text" v-model="ingrediente.descricao">
        <button @click="deleteIngredientes(ingrediente)">editar</button> <button @click="editIngrediente(ingrediente)">deletar</button>
        <!-- <p>{{ props.ingrediente.nome }}</p>
        <p>{{ props.ingrediente.preco }}</p>
        <p>{{ props.ingrediente.descricao }}</p>
        <p><strong>quero a foto aq</strong></p>
        <img v-if="props.ingrediente.images && props.ingrediente.images.length > 0" :src="props.ingrediente.images[0].url" alt="" width="350" height="350"> -->
      </div>
    </div>
  </template>
  

  <style scoped>
  .fotinhas {
    margin: 30px;
    width: 400px;
    height: 400px;
    background-color: #D9D9D9;
  }
  </style>