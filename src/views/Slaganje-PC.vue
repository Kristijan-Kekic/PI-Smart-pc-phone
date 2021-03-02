<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col mx-auto">
          <router-link class="rl" to="/Slaganje-PC/RAM">RAM</router-link>
          <div>GPU</div> 
          <div>CPU</div> 
          <div>Maticna</div>
          <div>PSU</div>
          <div>HDD/SDD</div>              
        
        </div>
        <div class="col mx-auto">

          <div class="col-md-4">
          <b>Slaganje konfiguracije</b>
          </div>
          <div class="col-md-3">
          Klikni na svaku od komponenata da krenes sa odabirom
          </div>
              <div class= "col-md-2">
              RAM: nije odabrano
              </div>
              <div class= "col-md-2">
              GPU: nije odabrano
              </div>
              <div class= "col-md-2">
              CPU: nije odabrano
              </div>
              <div class= "col-md-2">
              Maticna: nije odabrano
              </div>
              <div class= "col-md-2">
              PSU: nije odabrano
              </div>
              <div class= "col-md-2">
              HDD/SDD: nije odabrano
              </div>

        </div>
      </div>  
    </div>      
  </div>

  </template>
<style>

.container{
  padding:20px;
}

.col{
height: 800px;
border-color:black;
border-style:solid;
}

.col-md-4{

background:white;
padding:15px;
width:650px;
height:60px;
border-color:black;
border-style:solid;
}

.col-md-3{
margin:25px;  
padding:15px;
width:600px;
height:60px;
border-color:black;
border-style:solid;  
}

.col-md-2{
background:white;
margin:20px 0px 0px 70px;
padding:10px;
width:500px;
height:50px;
border-color:black;
border-style:solid;


}


</style>

<script>
</script>