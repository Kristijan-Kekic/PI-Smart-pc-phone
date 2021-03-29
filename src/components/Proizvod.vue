<template>
    
<div class="card">
  <div class="slika"></div>
  <div class="card-body">
    <h5 class="card-title">Ime proizvoda</h5>
    <a href="#" class="btn btn-primary">Dodaj u kosaricu</a>
  </div>
</div>



</template>

<script>

export default {
   name : 'Proizvod'
}
</script>

<style scoped>

.card{
    width: 300px;
    height: 300px;
}

.slika{
    border-width: 1px;
    border-color: lightgray;
    border-style: solid;
    height:200px;
}

</style>