<script setup>
import NavBar from '../components/NavBar.vue'
import { ref, reactive, onMounted } from 'vue'
import BlockEstoq from '../components/BlockEstoq.vue'
import { RouterLink } from 'vue-router'
import Modal from '@/components/template/Modal.vue'

import ingredienteService from '@/services/estoques.js'

const currentIngrediente = reactive({
  nome:'',
  preco:'',
  descricao:'',
})

async function save() {
  await ingredienteService.saveIngrediente(currentIngrediente)
  Object.assign(currentIngrediente)
}


</script>
<template>
    <NavBar />
    <div class="container">
      <div class="divCenter">
        <h1>Gerenciamento de Estoque</h1>
        <div><button class="AddButton" @click="showForm = true">Adicionar</button></div>
        <hr>
        <modal :visible="showForm" @close="showForm = false">
          <template #header>
      <h3>Cadastro de filme</h3>
    </template>
    <template #body>
      <form class="form">
        <div class="row">
          <div id="preview">
            <input type="file" @change="onFileChange" />
            <div class="cover">
              <img v-if="coverUrl" :src="coverUrl" />
            </div>
          </div>
        </div>
        <div class="form-item">
          <input type="text" placeholder="Título" id="title" v-model="currentMovie.title" />
          <label for="title">Título</label>
        </div>
        <div class="form-item">
          <input
            type="text"
            placeholder="Ano de lançamento"
            id="year"
            v-model="currentMovie.year"
          />
          <label for="year">Ano de lançamento</label>
        </div>
        <div class="form-item">
          <select v-model="currentMovie.genre">
            <option disabled value="">Selecione um gênero</option>
            <option v-for="genre in genres" :key="genre.id" :value="genre.id">
              {{ genre.name }}
            </option>
          </select>
          <label for="year">Gênero</label>
        </div>
        <div class="form-item">
          <select v-model="currentMovie.rating">
            <option disabled value="">Rating</option>
            <option v-for="n in [0, 1, 2, 3, 4, 5]" :key="n" :value="n">
              {{ n }}
            </option>
          </select>
          <label for="year">Rating</label>
        </div>
      </form>
    </template>
    <template #footer>
      <div class="footerButtons">
        <button @click="showForm = false">Cancelar</button>
        <button class="saveButton" @click="save">Salvar</button>
      </div>
    </template>
        </modal>
        <BlockEstoq />
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
    height: 800px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: #ececec;

  }
  </style>
  