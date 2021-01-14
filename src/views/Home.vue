<template>
  <div class="home">
      <logo />
        <div class="d-grid gap-3 col-4 mx-auto">
          <a class="btn btn-light" href="/Pregled-PC" role="button">Pregled konfiguracija (PC)</a>
          <a class="btn btn-light" href="/Slaganje-PC" role="button">Slaganje konfiguracije (PC)</a>
          <a class="btn btn-light" href="/BPPK" role="button">Best Price/Performance komponente</a>
          <a class="btn btn-light" href="/Mobitel" role="button">Odabir mobitela</a>
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
.col-4{
  padding:2%;
  }


</style>