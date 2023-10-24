<script>
</script>

<template>
  <div class="navbar">
    <RouterLink to="/login"
      ><img src="../components/icons/436873f8-a55a-4359-b418-b824d59bed64.png" alt=""
    /></RouterLink>
    <RouterLink to="/login"><button class="botoes">Inicio</button></RouterLink>
    <RouterLink to="/estoque"><button class="botoes">Estoque</button></RouterLink>
    <RouterLink to="/caixa"><button class="botoes">Caixa!!</button></RouterLink>
    <RouterLink to="/lucro"><button class="botoes">Lucro</button></RouterLink>
    <RouterLink to="/perfil"><div class="perfil"></div></RouterLink>
    <RouterLink to="/"><button class="botoes">Logout</button></RouterLink>
  </div>
</template>

<style scoped>
.perfil {
  background-color: blue;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  margin-left: 100vh;
}

/*.botoes {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 7px 20px !important;
  border-radius: 5px;
  margin: 0px 0px 0px 20px;
  background-color: #ff7b7b;
  border-radius: 5px;
}*/

.botoes {
  background-color: transparent;
  border: 3px blue;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  transition: 0.3s;
}

img {
  height: 50px;
}

.botoes:hover {
  background-color: rgb(124, 2, 2);
}

.navbar {
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
  background-color: #de2b2b;
}

/* .navbar input {
  margin-right: 20vh;
  margin-left: 60vh;
  height: 30px;
  width: 40px;
} */

/*Search Bar */

.navbar input {
  margin-right: 20vh;
  margin-left: 60vh;
  color: white;
  height: 36px;
  width: 360px;
  font-size: 20px;
  border-radius: 30px;
  background-color: white;
  box-shadow: -1.5px -1.5px 3px #ffffffa2,
               1px 1px 3px rgba(255, 255, 255, 0.671);
}

</style>
