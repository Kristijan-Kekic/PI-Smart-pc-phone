<template>
    
<div class="card">
  <div class="slika"></div>
  <div class="card-body">
    <h5 class="card-title">Ime mob {{info.naslov}} <br> {{info.cijena}} <br> {{info.ekran}} <br>
    <a href="#" class="btn btn-primary"><img src="../assets/ikone/cart.svg" width="20" height="20" style="margin-bottom:5px;"> Dodaj u kosaricu</a>
    </h5>
  </div>
</div>



</template>

<script>

export default {
  props: ['info'],
  name : 'Proizvod_mob'
}
</script>

<style scoped>

.btn-primary{
  background-color:rgb(124, 213, 240);
  border-color:rgb(124, 213, 240) ;
}

.card{
    margin:auto;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 12px;
    width: 300px;
    height: 400px;
    display: inline-block;
    
}

.slika{
    border-width: 1px;
    border-color: lightgray;
    border-style: solid;
    height:250px;
}

</style>