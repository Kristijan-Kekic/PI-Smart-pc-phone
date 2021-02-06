<template>
  <div id="app">
    <div id="nav" class="navbar navbar-light">
        <div class="col-2 mx-auto">
          <router-link class="rl" to="/Košarica">Košarica
          </router-link>
        </div>
        </router-link>
        <router-link to="/">
    <img alt="Vue logo" src="../assets/images/logo.png">
      </router-link>
      <div class="col-2 mx-auto">
          <router-link class="rl" to="/Login-reg">Prijava/registracija
          </router-link>
        </div>
      </div>
    <router-view/>
  </div>
 </template>

 <script>
export default {
  name: 'Navbar',
};
</script>