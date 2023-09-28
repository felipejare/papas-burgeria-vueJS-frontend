<script></script>

<template>
  <div class="navbar">
    <RouterLink to="/login"
      ><img src="../components/icons/436873f8-a55a-4359-b418-b824d59bed64.png" alt=""
    /></RouterLink>
    <RouterLink to="/login"><button class="botoes">Inicio</button></RouterLink>
    <RouterLink to="/estoque"><button class="botoes">Estoque</button></RouterLink>
    <RouterLink to="/caixa"><button class="botoes">caixa!!</button></RouterLink>
    <RouterLink to="/lucro"><button class="botoes">Lucro</button></RouterLink>
    <div class="search-box">
      <button class="btn-search"><i class="fas fa-search"></i></button>
      <input type="text" class="input-search" placeholder="Type to Search..." />
    </div>

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

.navbar input {
  margin-right: 20vh;
  margin-left: 60vh;
  height: 30px;
  width: 500px;
}
.logo {
  text-decoration: none;
}

/*Search Bar */

/*.input-search{
  height: 25px;
  width: 25px;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 25px;
  transition: all .5s ease-in-out;
  background-color: #22a6b3;
  padding-right: 10px;
  color:#fff;
}
.input-search::placeholder{
  color:rgba(255,255,255,.5);
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 10;
}
.btn-search{
  width: 25px;
  height: 25px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  color:#ffffff ;
  background-color:transparent;
  pointer-events: painted;  
}
.btn-search:focus ~ .input-search{
  width: 50px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
.input-search:focus{
  width: 100px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
*/
</style>
