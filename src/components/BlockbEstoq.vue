    <script setup>
import { ref, onMounted } from 'vue'
import FotoBebida from '../components/FotoBebida.vue'

import bebidaService from '../services/bebidas'
const bebidas = ref([])



onMounted(async () => {
  const data = await bebidaService.getAllBebida()
  bebidas.value = data
})

</script>

<template>

<div class="contido"> 
      <FotoBebida v-for="bebida in bebidas" :key="bebida.id" :bebida="bebida" />
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