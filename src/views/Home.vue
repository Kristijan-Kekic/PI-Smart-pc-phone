<template>
  <div class="home">
        <div class="d-grid gap-3 col-4 mx-auto">
          <div class="col-5 mx-auto">
          <router-link class="rl" to="/Pregled-PC">Pregled konfiguracije (PC)</router-link>
          </div>
          <div class="col-5 mx-auto">
          <router-link class="rl" to="/Slaganje-PC">Slaganje konfiguracije (PC)</router-link>
          </div>
          <div class="col-5 mx-auto">
          <router-link class="rl" to="/BPPK">Best Price/Performance komponente</router-link>
          </div>
          <div class="col-5 mx-auto">
          <router-link class="rl" to="/Mobitel">Odabir mobitela</router-link>
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
  background-color:rgb(114, 218, 236);
}
.col-4{
  padding:2%;
  }
.btn-light{
  padding:5%;
  }

.col-5{
  border-radius: 10px;
  background:white;
  width:100%;
  height:100%;
  padding:4.5%;
  box-shadow: 4px 4px 5px rgba(145, 144, 144, 0.747);
border: 1px solid lightgrey;
}

.rl{
  color:black;
  text-decoration:none;
}

</style>