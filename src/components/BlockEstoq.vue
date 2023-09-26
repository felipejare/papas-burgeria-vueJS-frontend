<script setup>
import FotoComida from '../components/FotoComida.vue'
</script>

<template>
  <div class="contido">
    <div class="block">
      <FotoComida />
      <FotoComida />
      <FotoComida />
      <FotoComida />
    </div>
  </div>
</template>

<style>
.block {
  height: 300px;
  width: 400px;
  overflow-y: scroll;
  background-color: #ececec;
  display: block;
}

.contido{
    display: flex;
}
</style>