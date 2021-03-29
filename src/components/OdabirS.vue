<template>
    
    <div class="col-lg-6">
    
      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected>Odaberi</option>
      </select>
    
      <button class="button" type="button">Potvrda odabira</button>
  <br>
  <router-link class="rl" to="/Home/Slaganje-PC">Natrag</router-link>
  <div>Trebas pomoc?</div>      
  
  </div>

</template>

<script>

export default {
    name: 'OdabirS'
}
</script>


<style scoped>
.col-lg-6{
background-color:aqua;
padding:60px;
margin:auto;
border-color:lightgray;
border-style:solid;
border-width: 1px;
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


