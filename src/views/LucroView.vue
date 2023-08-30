<script setup>
import NavBar from '@/components/NavBar.vue';
import { RouterLink } from 'vue-router';

</script>
<template>
    <NavBar />
    <div class="container">
        <div class="divCenter">
            aq tem lucros eim
        </div>


    </div>
</template>

<style>
.botoes button a:hover{
  background-color: transparent;
  color: #22e9ce;
}

.perfil{
    background-color: blue;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.botoes button{
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

.navbar{
    width: 100%;
    height: 80px;
    align-items: center;
    display: flex;
    background-color: #DE2B2B;
}

.container{
    background-color: white;
    width: 100%;
    height: 100%;
    
}
.divCenter{
    width: 1468px;
    height: 724px;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    background-color: #ececec;
}

.logo{
    text-decoration: underline;
}

</style>