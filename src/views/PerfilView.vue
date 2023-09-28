<script setup>
import NavBar from '../components/NavBar.vue'
import PerfilCard from '../components/PerfilCard.vue'
</script>
<template>
  <NavBar />
  <div class="container">
    <div class="divCenter">
      <PerfilCard />

      <div class="conteudos">
      </div>
    </div>
  </div>
</template>

<style scoped>
.perfil {
  background-color: blue;
  width: 40px;
  height: 40px;
  border-radius: 50%;
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

</style>
