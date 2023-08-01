<script>

</script>
<template>
    <div class="navbar">
        <div class="logo">logo foda</div>
        <div class="botoes"><button>Comandas ativas!</button></div>
        <div class="botoes"><button>Pedidos Cozinha</button></div>
        <div class="botoes"><button>Histórico de compras</button></div>
        <input type="text" name="" id="" placeholder="pesquisar">
        <RouterLink to="/" >Logout</RouterLink>
    </div>
    <div class="container">
        <div class="divCenter">

            saas
        </div>


    </div>
</template>
<style scoped>

.navbar{
    width: 1920px;
    height: 100px;
    align-items: center;
    display: flex;
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
    width: 1920px;
    height: 830px;
    
}
.divCenter{
    width: 1768px;
    height: 724px;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    background-color: #ECECEC;
}

</style>