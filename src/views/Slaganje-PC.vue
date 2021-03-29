<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col mx-auto">
          <br>
          <router-link to="/Slaganje-PC/RAM"><img src="../assets/images/ram.png"></router-link>
          <br>
          <br>
          <router-link to="/Slaganje-PC/GPU"><img src="../assets/images/gpu.png"></router-link>
          <br>
          <br>
          <router-link to="/Slaganje-PC/CPU"><img src="../assets/images/cpu.png"></router-link>
          <br>
          <br>
          <router-link to="/Slaganje-PC/Maticna"><img src="../assets/images/maticna.png"></router-link> 
          <br>
          <br>
          <router-link to="/Slaganje-PC/PSU"><img src="../assets/images/psu.jpg"></router-link>
          <br>
          <br>
          <router-link to="/Slaganje-PC/HDD-SSD"><img src="../assets/images/hdd-sdd.jpg"></router-link>
                        
        
        </div>
        <div class="col mx-auto">
          <br>
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
        <br>
        <router-link class="rl" to="/">Natrag</router-link>
        <div>Trebas pomoc?</div>
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
background-color: #f8f9fa;
border-color:#f8f9fa;
  border-style: solid;
  border-width: 1px;
}

.col-md-4{

background:white;
padding:15px;
width:650px;
height:60px;
border-color:lightgray;
  border-style: solid;
  border-width: 1px;
}

.col-md-3{
margin:25px;  
padding:15px;
width:600px;
height:60px;
border-color:lightgray;
  border-style: solid;
  border-width: 1px;
}

.col-md-2{
background:white;
margin:20px 0px 0px 70px;
padding:10px;
width:500px;
height:50px;
border-color:lightgray;
  border-style: solid;
  border-width: 1px;
}</style>

<script>
</script>