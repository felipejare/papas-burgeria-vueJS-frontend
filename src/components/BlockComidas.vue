<script setup>
import FotoComida from '../components/FotoComida.vue'

</script>

<template>
    
    <div class="block">
        <FotoComida />
        <FotoComida />
        <FotoComida />
        <FotoComida />
        

    </div>

</template>

<style>

.block {
    height: 300px;
    width: 400px;
    overflow-y: scroll;
    background-color: #ECECEC;
    display: block;
}


</style>