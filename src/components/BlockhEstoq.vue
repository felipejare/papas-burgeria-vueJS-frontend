<script setup>
import { ref, onMounted } from 'vue'
import FotoHamburguer from './FotoHamburguer.vue';

import burgerService from '../services/burger.js'
const burgers = ref([])



onMounted(async () => {
  const data = await burgerService.getAllBurger()
  burgers.value = data
})

</script>

<template>

<div class="contido"> 
      <FotoHamburguer v-for="burger in burgers" :key="burger.id" :burger="burger" />
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