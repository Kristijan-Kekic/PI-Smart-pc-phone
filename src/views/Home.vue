<template>
  <div class="home">
        <div class="d-grid gap-3 col-4 mx-auto">
          <div class="col-5 mx-auto">
          <router-link class="rl" to="/Home/Pregled-PC">Pregled konfiguracije (PC)</router-link>
          </div>
          <div class="col-5 mx-auto">
          <router-link class="rl" to="/Home/Slaganje-PC">Slaganje konfiguracije (PC)</router-link>
          </div>
          <div class="col-5 mx-auto">
          <router-link class="rl" to="/Home/BPPK">Best Price/Performance komponente</router-link>
          </div>
          <div class="col-5 mx-auto">
          <router-link class="rl" to="/Home/Mobitel">Odabir mobitela</router-link>
          </div>
    </div>
  </div>

  </template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  name: 'home',
  components: {
    Logo,
  },
};
</script>

<style>

body{
  background-color:aqua;
}
.col-4{
  padding:2%;
  }
.btn-light{
  padding:5%;
  }

.col-5{
  border-radius: 10px;
  background:#f1f5f5;
  width:100%;
  height:100%;
  padding:4.5%;
  border-style:solid;
  border-width: 1px;
  border-color:#e8eaea;
}

.rl{
  color:black;
  text-decoration:none;
}

</style>