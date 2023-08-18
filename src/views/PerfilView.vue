<script setup>
import NavBar from '../components/NavBar.vue'
import PerfilCard from '../components/PerfilCard.vue';
import BlockComidas from '../components/BlockComidas.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <NavBar />
  <div class="container">
    <div class="divCenter"><PerfilCard />
    <BlockComidas />
    
    </div>
  </div>
</template>

<style>
.botoes button a:hover {
  background-color: transparent;
  color: #22e9ce;
}

.perfil {
  background-color: blue;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.botoes button {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 7px 20px !important;
  border-radius: 5px;
  margin: 0px 0px 0px 20px;
  background-color: #c21e1e;
  border: 3px solid #c21e1e;
  border-radius: 5px;
}
.botoes button a {
  text-decoration: none;
  color: #fff;
}


.navbar {
  width: 100%;
  height: 80px;
  align-items: center;
  display: flex;
  background-color: #de2b2b;
}
.navbar button {
  margin-left: 3vh;
}
.navbar input {
  margin-right: 20vh;
  margin-left: 60vh;
  height: 30px;
  width: 500px;
}
.container {
  background-color: white;
  width: 100%;
  height: 100%;
}
.divCenter {
  width: 1468px;
  height: 724px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  background-color: #ffffff;
}

.logo {
  text-decoration: underline;
}
</style>
