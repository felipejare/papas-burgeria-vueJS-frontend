<script setup>
import NavBar from '../components/NavBar.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <NavBar />
  <div class="container">
    <div class="divCenter">aq tem o inicio eim</div>
  </div>
</template>
<style scoped>
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
  background-color: #ececec;
}
</style>
