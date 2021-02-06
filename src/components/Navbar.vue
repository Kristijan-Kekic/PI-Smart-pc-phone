<template>
  <div id="app">
    <div id="nav" class="navbar navbar-light">
      <router-link to="/kosarica">Košarica</router-link> |
      <router-link to="/">Naslovnica</router-link>
      <router-link to="/login-reg">Prijava/registracija</router-link> |
      </div>
    <router-view/>
  </div>
 </template>

 <script>
export default {
  name: 'Navbar',
};
</script>