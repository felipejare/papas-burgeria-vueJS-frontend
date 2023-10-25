<template>
    <div class="container">
      <div class="fotinhas">
        <p>{{ props.ingrediente.nome }}</p>
        <p>{{ props.ingrediente.preco }}</p>
        <p>{{ props.ingrediente.descricao }}</p>
        <p><strong>quero a foto aq</strong></p>
        <img v-if="props.ingrediente.images && props.ingrediente.images.length > 0" :src="props.ingrediente.images[0].url" alt="" width="350" height="350">
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    ingrediente: Object,
  });
  </script>
  
  <style scoped>
  .fotinhas {
    margin: 30px;
    width: 400px;
    height: 400px;
    background-color: #D9D9D9;
  }
  </style>