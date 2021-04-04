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
    margin:auto;
    margin-top: 10px;
    margin-left: 12px;
    margin-right: 12px;
    width: 300px;
    height: 350px;
    display: inline-block;
    
}

.slika{
    border-width: 1px;
    border-color: lightgray;
    border-style: solid;
    height:250px;
}

</style>