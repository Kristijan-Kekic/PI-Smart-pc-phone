<template>
    
    <div class="col-lg-6">
    
      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected>Odaberi</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
      </select>
    
      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected>Odaberi</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
      </select>
    
    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected>Odaberi</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
      </select>
    
    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected>Odaberi</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
      </select>
  <button class="button" type="button" onclick="funkcija()">Potvrda odabira</button>
  <br>
  <router-link class="rl" to="/Home/Slaganje-PC">Natrag</router-link>
  <div>Trebas pomoc?</div>      
  
  </div>

</template>

<style scoped>
.col-lg-6{
background-color:aqua;
padding:60px;
margin:auto;
border-color:black;
border-style:solid;
}

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



<script>

export default {
    name: 'OdabirS'
}
</script>
