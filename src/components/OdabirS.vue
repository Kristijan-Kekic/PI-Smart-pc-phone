<template>
    
    <div class="col-lg-6">
    
      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected>Odaberi</option>
      </select>
    
      <button class="button" type="button">Potvrda odabira</button>
  <br>
  <p class="natrag-m"><router-link class="rl" to="/Home/Slaganje-PC"><img src="../assets/ikone/arrow-left.svg" width="20" height="20" style="margin-bottom:5px;"> Natrag</router-link></p>
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
background-color:rgb(114, 218, 236);
padding:60px;
margin:auto;
border-color:lightgray;
border-style:solid;
border-width: 1px;
}

.button {
 background-color:rgb(36, 114, 160);
  border-color:rgb(55, 144, 196) ;
  color: #FFFFFF;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  padding: 20px;
  width: 250px;
  margin: 5px;
}


</style>


