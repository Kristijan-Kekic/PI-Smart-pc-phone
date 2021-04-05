<template>
 
    <div class="container-fluid">
      <br>
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <br>
            <div class="row justify-content-center">
            <div class="col-lg-3" style="border:1px solid red; width:500px">
                
                      <img style="width:400px; height:300px;" src="../assets/images/pc.jpg">
                  </div>  
                  
                  <div class="col-lg-3" style="border:1px solid red">
                        <router-link to="/Slaganje-PC/RAM"><img src="../assets/images/ram.png"></router-link>
                        
                        <router-link to="/Slaganje-PC/GPU"><img src="../assets/images/gpu.png"></router-link>
                        
                  </div>
                </div>  
            <br>
            <div class="row justify-content-center">
            <div class="col-lg-3" style="border:1px solid red; width:500px">      
                  <router-link to="/Slaganje-PC/CPU"><img src="../assets/images/cpu.png"></router-link>
                  
                  <router-link to="/Slaganje-PC/Maticna"><img src="../assets/images/maticna.png"></router-link> 
                 
            </div>
            <br>
            <div class="col-lg-3" style="border:1px solid red"> 
                  <router-link to="/Slaganje-PC/PSU"><img src="../assets/images/psu.jpg"></router-link>
               
                  <router-link to="/Slaganje-PC/HDD-SSD"><img src="../assets/images/hdd-sdd.jpg"></router-link>
             </div>     

             </div>
        </div>

            <div class="col-lg-5">

                <div class="row"> 
                        <div class="col-lg-4">
                          
                          <div class="box1"><b>Slaganje konfiguracije</b></div>
                                                  
                          <div class="box2"> Klikni na svaku od komponenata da krenes sa odabirom</div>
                          
                          </div>
                                <div class="col-lg-2">
                                  <ul class="list-group">
                                    <li class="list-group-item">RAM: nije odabrano <img src="../assets/ikone/x-circle.svg" width="20" height="20" style="margin-bottom:5px;"></li>
                                    <li class="list-group-item">GPU: nije odabrano <img src="../assets/ikone/x-circle.svg" width="20" height="20" style="margin-bottom:5px;"></li>
                                    <li class="list-group-item">CPU: nije odabrano <img src="../assets/ikone/x-circle.svg" width="20" height="20" style="margin-bottom:5px;"></li>
                                    <li class="list-group-item">Matična ploča: nije odabrano <img src="../assets/ikone/x-circle.svg" width="20" height="20" style="margin-bottom:5px;"></li>
                                    <li class="list-group-item">PSU: nije odabrano <img src="../assets/ikone/x-circle.svg" width="20" height="20" style="margin-bottom:5px;"></li>
                                    <li class="list-group-item">HDD/SDD: nije odabrano <img src="../assets/ikone/x-circle.svg" width="20" height="20" style="margin-bottom:5px;"></li>
                                  </ul>
                                </div>
                        
                        <div class="col-lg-4">
                        <div class="row justify-content-center">
                          <div class="col-lg-1">
                          <p class="natrag-m"><router-link class="rl" to="/"><img src="../assets/ikone/arrow-left.svg" width="20" height="20" style="margin-bottom:5px;"> Natrag</router-link></p>
                          </div>
                          
                          <div class="col-lg-1" style="width:100px;">
                          </div>

                          <div class="col-lg-1">
                          <div class="pomoc">Trebas pomoc?</div>
                          </div>
                        </div>  
                       </div> 
                </div>
                  
            </div>      
      
      </div>  
    </div>      
 

  </template>

<script>
</script>


<style scoped>

.list-group-item{

  margin-bottom: 15px;
  height:50px;
  padding:12px;
}

/* Grid */

.col-lg-1{
  width:202px;
  
  padding:0px;
  
}

.col-lg-2{
  
  width:550px;
  height: 377px;
  display:inline-block;
  margin:auto;
  margin-bottom: 20px;
}

.col-lg-5{
  border: 1px solid lightgrey;
  background-color: #f8f9fa;
  height: 800px;
  display:inline-block;
  box-shadow: 4px 4px 5px rgba(145, 144, 144, 0.747);
  margin-left: 10px;
}

.col-lg-4{

width:600px;
height:150px;

  margin:auto;
}

/* Ostalo */

.kutija{
display: inline-block;
background:white;
padding:10px;
width:500px;
height:50px;
border-color:lightgray;
border-style: solid;
border-width: 1px;
}

.box1{
background:white;
padding:15px;
border-color:lightgray;
border-style: solid;
border-width: 1px;
margin-top:10px;
}

.box2{

padding:15px;
border-color:lightgray;
border-style: solid;
border-width: 1px;
margin-top:10px;
}

.natrag-m{
    font-size: 20px;
    background-color: white;
    border-color:lightgray;
    border-style: solid;
    border-width: 1px;
    width:200px;
    
    
      
    }

.pomoc{
  font-size: 15px;
    background-color: white;
    border-color:lightgray;
    border-style: solid;
    border-width: 1px;
    width:200px;
    padding:10px;
    
}

</style>
