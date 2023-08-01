<script setup>

import { RouterLink, RouterView } from 'vue-router';
{RouterView}{ RouterLink }
</script>

<template>
  <main class="container">
    <body>
      <!-- <div class="content">
        <div class="divCenter">
          <h1 class="bemvindo">Login</h1>
          <div class=”field”>
            <span class="fa fa-user"></span>
            <input type=”text” placeholder="Email Id" required>
            </div>
            <div class=”field”>
                <span class="fa fa-lock"></span>
                <input type=”password” placeholder=Password>
            </div>

          <button class="button-64" role="button"><span class="text">Entrar</span></button>
        
        </div>
      </div> -->
                <div class="loginBox">
            <h2>Entrar!</h2>
            <form>
              <p>Email</p>
              <input type="email" name="email" placeholder="Email" required>
              <p>Password</p>
              <input type="password" name="password" placeholder="Senha" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
              <RouterLink to="/login">
              <button class="button-64" role="button"><span class="text">Entrar</span></button></RouterLink>
              <a href="#">Esqueci a senha!</a>
              <RouterLink to="/about" >Criar conta</RouterLink>
              <RouterView />
            </form>
          </div>
    </body>
    
  </main>
</template>

<style scoped>


.divCenter{
  background-color: transparent;
  width: 400px;
  height: 300px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  margin-top: 360px;
  text-align: center;
  color: white;
  box-shadow: -3px -3px 9px #aaa9a9a2,
               3px 3px 7px rgba(147, 149, 151, 0.671);
 

}



/* .divCenter text {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 35px;
  color: rgb(247, 233, 233);
} */



/* .divCenter input{
  display: flex;
  margin-left: 110px;
  margin-bottom: 10px;
  width: 170px;
  height: 40px;
  

} */





/* CSS */
.button-64 {
  margin: auto;
  margin-top: 40px;
  align-items: center;
  background-image: linear-gradient(144deg,#d51b2a, #791121 50%,#940e3f);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(215, 29, 29, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
} 
 
.button-64:active,
.button-64:hover {
  outline: 0;
} 

.button-64 span {
  background-color: #891f1f;
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

.button-64:hover span {
  background: none;
}

@media (min-width: 768px) {
  .button-64 {
    font-size: 24px;
    min-width: 196px;
  }
}





.loginBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 420px;
  padding: 70px 40px;
  box-sizing: border-box;

  box-shadow: -1px -1px 7px #aaa9a9a2,
               1px 3px 4px rgba(147, 149, 151, 0.671);
}

.user {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: calc(-100px/2);
  left: calc(50% - 50px);
}

h2 {
  margin: 0;
  padding: 0 0 26px;
  color: #ffffff;
  text-align: center;
}

.loginBox p {
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #fff;
}

.loginBox input {
  width: 100%;
  margin-bottom: 20px;
}

.loginBox input[type="email"],
.loginBox input[type="password"] {
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 40px;
  color: #fff;
  font-size: 16px;
}

::placeholder
{
  color: rgba(255, 255, 255, 0.5);
}

.loginBox input[type="submit"] {
  border: none;
  outline: none;
  height: 40px;
  color: #eee;
  font-size: 16px;
  background-color: #FF8C00;
  cursor: pointer;
  border-radius: 20px;
  margin: 12px 0 18px;
}

.loginBox input[type="submit"]:hover {
  background-color: #ff9719;
  color: #fff;
}

.loginBox a {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
}



</style>
