<script setup>
import { ref, onMounted } from 'vue'
import FotoComida from '../components/FotoComida.vue'

import ingredienteService from '@/services/estoques.js'

const ingredientes = ref([])



onMounted(async () => {
  const data = await ingredienteService.getAllIngredientes()
  ingredientes.value = data
})

</script>

<template>

<div class="contido">  
      <FotoComida v-for="ingrediente in ingredientes" :key="ingrediente.id" :ingrediente=ingrediente />
  </div>
</template>

<style scoped>
.block {
  height: 300px;
  width: 400px;
  overflow-y: scroll;
  background-color: #ececec;
  display: block;
}

.contido{
    display: flex;
    overflow-y: scroll;
    flex-wrap: wrap;
}
</style>