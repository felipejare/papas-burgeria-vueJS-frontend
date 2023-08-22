<script setup>
import CupomFoto from '../components/CupomFoto.vue'
</script>
<template>
  <div class="block">

    <CupomFoto />
    <CupomFoto />
    <CupomFoto />
    <CupomFoto />
 
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

</style>
