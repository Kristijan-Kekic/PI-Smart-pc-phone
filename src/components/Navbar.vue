<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="col-1"></div>
        <div class="col-1">
          <router-link class="rl" to="/Wishlist"><img src="../assets/ikone/cart.svg" width="20" height="20" style="margin-bottom:5px;"> Lista želja
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

.navbar{
box-shadow: 4px 4px 5px rgba(145, 144, 144, 0.747);
border: 1px solid lightgrey;
margin:30px 30px 0px 30px;
}


</style>