<script>
import { RouterLink } from 'vue-router';


</script>
<template>
    <div class="navbar">
        <RouterLink to="/login"><div class="logo">logo foda</div></RouterLink>
        <RouterLink to="/login" ><div class="botoes"><button>Inicio</button></div></RouterLink>
        <div class="botoes"><button>Comandas ativas!</button></div>
        <div class="botoes"><button>lankes</button></div>
        <RouterLink to="/lucro" ><div class="botoes"><button>Lucro</button></div></RouterLink>
        <input type="text" name="" id="" placeholder="pesquisar">
        <RouterLink to="/" ><button class="botoes">Logout</button></RouterLink>
    </div>
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
.navbar button{
    margin-left: 3vh;
}
.navbar input{
    margin-right: 20vh;
    margin-left: 60vh;
    height: 30px;
    width: 500px;
   

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
    background-color: #ECECEC;
}

.logo{
    text-decoration: underline;
}

</style>