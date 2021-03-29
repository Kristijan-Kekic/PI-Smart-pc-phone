<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-2">
    <Selekcija-p />
    </div>
    <div class="col-2"></div>
    <div class="col-6">
      <Grid-p />
    </div>
    <div class="col-1"></div>
  </div>
        
  

  </template>

<script>
import SelekcijaP from '@/components/SelekcijaP'
import GridP from '@/components/GridP.vue'
export default {
  name: 'Pregled-PC',
  components: {
    SelekcijaP,
    GridP
  }
}
</script>

<style>
</style>