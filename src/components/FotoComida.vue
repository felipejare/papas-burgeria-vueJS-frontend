<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    ingrediente: Object
})

</script>

<template>
        <div class="fotinhas">
            <p>{{props.ingrediente.nome}}</p>
            <p>{{props.ingrediente.preco}}</p>
            <p>{{props.ingrediente.descricao}}</p>
            <img src="ingrediente.images[0].url" alt="">


        </div>
        

</template>

<style>
.fotinhas2{
    margin: 30px;
    width: 150px;
    height: 150px;
    background-color: #D9D9D9;
}
.fotinhas{
    margin: 30px;
    width: 150px;
    height: 150px;
    background-color: #D9D9D9;
}


</style>