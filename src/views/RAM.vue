<template>
<div class="container-md-2">
  <br>
  <h1>Odabir specifikacije za RAM</h1>
  <br>
  <div class="col-lg-6">
    
      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected>Odaberi proizvodaca</option>
        <option value="1">Corsair</option>
        <option value="2">Crucial</option>
        <option value="3">HyperX</option>
        <option value="4">Kingston</option>
        <option value="5">Patriot</option>
      </select>
    
      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected>Odaberi velicinu</option>
        <option value="1">2GB</option>
        <option value="2">4GB</option>
        <option value="3">8GB</option>
        <option value="4">16GB</option>
        <option value="5">32GB</option>
      </select>
    
    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected>Odaberi DDR Seriju</option>
        <option value="1">DDR1</option>
        <option value="2">DDR2</option>
        <option value="3">DDR3</option>
        <option value="4">DDR4</option>
      </select>
    
    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected>Odaberi RAM</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
  <button class="button" type="button" onclick="funkcija()">Potvrda odabira</button>
  
  <br>
  <router-link class="rl" to="/Home/Slaganje-PC">Natrag</router-link>
  <div>Trebas pomoc?</div>      
  
  </div>
  

</div>  

</template>

<script>



</script>

<style>

.container-md-2{
background-color:white;
margin: 20px 0px 0px 0px;
height:700px;
border-color:black;
border-style:solid;
}

.col-lg-6{
background-color:aqua;
padding:60px;
margin:auto;
border-color:black;
border-style:solid;}

.button {
  border-radius: 4px;
  background-color: #39c648;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 20px;
  padding: 20px;
  width: 250px;
  margin: 5px;
}


</style>