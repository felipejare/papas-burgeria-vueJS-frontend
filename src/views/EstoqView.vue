<script setup>
import NavBar from '../components/NavBar.vue'
import BlockEstoq from '../components/BlockEstoq.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
    <NavBar />
    <div class="container">
      <div class="divCenter">
        <h1>Gerenciamento de Estoque</h1>
        <div class="botoes "><button>deletar</button> <button>adicionar</button> <button>editar</button> </div>
        <div><input placeholder="Ingredientes" type="text"><input placeholder="Preço" type="text"><input placeholder="Descrição" type="text"></div>
        <hr>
        <BlockEstoq />
      </div>
    </div>
  </template>
  <style scoped>
  .container {
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;


  }
  .divCenter {
    width: 1468px;
    height: 800px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: #ececec;

  }
  </style>
  