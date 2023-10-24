<script setup>
import CalendarioBlock from '../components/CalendarioBlock.vue'
import NavBar from '../components/NavBar.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <NavBar />
  <div class="container">
    <div class="divCenter">
      <h2>Bem vindo fulano de tal | Pronto para o trabalho? c: </h2>
      <CalendarioBlock />
      <button class="button-64" role="button"><span class="text">Ir para Lucros  -></span></button>
      <button class="button-64" role="button"><span class="text">Ir para Caixa  -></span></button>
      <button class="button-64" role="button"><span class="text">Ir para Estoque -></span></button>


    </div>
  </div>
</template>
<style scoped>
.container {
  background-color: white;
  width: 100%;
  height: 100%;
}
.divCenter {
  width: 75%;
  height: 800px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  background-color: #ececec;
}
.button-64 {
  margin: auto;
  margin-top: 40px;
  background-image: linear-gradient(144deg,#d51b2a, #791121 50%,#940e3f);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(215, 29, 29, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
} 
 
.button-64:active,
.button-64:hover {
  outline: 0;
} 

.button-64 span {
  background-color: #891f1f;
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

.button-64:hover span {
  background: none;
}

@media (min-width: 768px) {
  .button-64 {
    font-size: 24px;
    min-width: 196px;
  }
}

</style>
