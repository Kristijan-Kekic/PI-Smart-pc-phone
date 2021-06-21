<template>
  <div class="container">
    <div class="row">
      <div class="col-6" id="lista">{{info.naziv}}</div>
      <div class="col-2" id="lista">{{info.score}}</div>
      <div class="col-2" id="lista">{{info.snaga}}</div>
      <div class="col-2" id="lista">{{info.cijena}}</div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['info'],
  name : 'BPPKGPU'
}
</script>

<style>
#lista {
   border: 1px solid black;
}
</style>