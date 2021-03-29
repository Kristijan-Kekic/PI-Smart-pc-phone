<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="col-1"></div>
        <div class="col-1">
          <router-link class="rl" to="/Košarica">Košarica
          </router-link>
        </div>
        <div class="col-1"></div>
        
        <div class="col-6" id="naslovnica">
        <router-link to="/">
    <img alt="Vue logo" width="100%" src="../assets/images/logo.png">
      </router-link>
        </div>
        <div class="col-1"></div>
      <div class="col-1">
          <router-link class="rl" to="/Login-reg">Prijava/registracija
          </router-link>
        <div class="col-1"></div>
        </div>
      </nav>
    <router-view/>
  </div>
 </template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>
#naslovnica{
  border-style:solid;
}
</style>