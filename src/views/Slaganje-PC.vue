<template>
 
    <div class="container-fluid py-4">
    <div class="row justify-content-center">
      
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <br>

            <div class="row justify-content-center">
            <div class="col-lg-1" style="margin:24px 0px 0px 0px;"><natrag/> </div>
            <div class="col-lg-6"><div class="box1"><b>Slaganje konfiguracije</b></div></div>
            <div class="col-lg-1"></div>
             </div>
          
            <div class="row justify-content-center">
             <div class="col-lg-1"></div>
              <div class="col-lg-6"><div class="box2"> Klikni na svaku od komponenata da kreneš sa odabirom</div></div>
               <div class="col-lg-1"></div>
              </div>
         
          
          
          
          
          <br>
          
          
          
            <div class="row justify-content-center">
          
          
          
            <div class="col-lg-3" style="border:1px solid red; width:500px">   
              
              <div class="box1">Radna memorija (RAM)</div>
                  
              <img src="../assets/images/ram.png"> 
              <div id="v-model-select" class="demo">
                  <select v-model="selectedRAM">
                    <option disabled value="">Izaberite RAM</option>
                    <option>Memorija PC-10600, 4 GB, DDR3 1333MHz</option>
                     <option>Memorija SO-DIMM PC-12800, 8 GB, DDR3 1600MHz</option>
                    <option>Memorija PC-25600, 16 GB, DDR4 3200MHz</option>
                    <option>Memorija PC-24000, 16 GB, DDR4 3000MHz</option>
                    <option>Memorija PC-25600, 32 GB, DDR4 3200MHz</option>
                   
                  </select>
                  <br>
                  <span>Izabrano: {{ selectedRAM }}</span>
                  <br>
                  <span>Cijena: {{ selectedRAM }}</span>
                </div>
              
              
              </div>  




                
             <div class="col-lg-3" style="border:1px solid red; width:500px">   
               <div class="box1">Grafički procesor (GPU)</div>
               
               
                <img src="../assets/images/gpu.png">
                <div id="v-model-select" class="demo">
                  <select v-model="selectedGPU">
                    <option disabled value="">Izaberite GPU</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                  <br>
                  <span>Izabrano: {{ selectedGPU }}</span>
                </div>
                
                
                </div>  
                



             <div class="col-lg-3" style="border:1px solid red; width:500px"> 
               <div class="box1">Procesor (CPU)</div>
               
               
               <img src="../assets/images/cpu.png">
              
            <!--  <input v-model="searchSlaganjeCPU"
              class="form-control mr-sm-2"
              type="search"
              placeholder="Intel,AMD"
              aria-label="Search"
              >-->

              <div id="v-model-select" class="demo">
              <select v-model="selectedCPU">
                <option disabled value="">Izaberite CPU</option>
                <option>ryzen 5 3600 3.6ghz 17866 65w</option>
                <option>ryzen 5 5600x 22180 65w</option>
                <option>ryzen 7 3700x 3.6ghz 22798 65w</option>
                <option>ryzen 9 5900x 32984 105w</option>
                <option>ryzen 5 3400g 3.7ghz 9370 65w</option>
                <option>ryzen 7 2700x 3.7ghz 17599 105w</option>
                <option>ryzen 5 pro 4650g 3.7ghz 16527 65w</option>
                <option>ryzen 3 3200g 3.6ghz 7229 65w</option>
                <option>ryzen 9 3950x 3.5ghz 39216 105w</option>
                <option>ryzen 9 3900xt 3.8ghz 32956 105w</option>
                <option>ryzen 7 pro 4750g 3.6ghz 20679 65w</option>
                <option>ryzen 7 3800x 3.9ghz 23332 105w</option>

              </select>
              <br>
              <span>Izabrano: {{ selectedCPU }}</span>
            </div>

               
               </div>  




             <div class="col-lg-3" style="border:1px solid red; width:500px"> 
                <div class="box1">Matična Ploča</div>
               
               
               
                <img src="../assets/images/maticna.png"> 
                <div id="v-model-select" class="demo">
                  <select v-model="selectedMaticna">
                    <option disabled value="">Izaberite Matičnu ploču</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                  <br>
                  <span>Izabrano: {{ selectedMaticna }}</span>
                </div>
                
                
                </div>  




             <div class="col-lg-3" style="border:1px solid red; width:500px"> 
                <div class="box1">Napajanje (PSU)</div>
               
               
               <img src="../assets/images/psu.jpg">
                 <div id="v-model-select" class="demo">
                  <select v-model="selectedPSU">
                    <option disabled value="">Izaberite PSU</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                  <br>
                  <span>Izabrano: {{ selectedPSU }}</span>
                </div>
                </div>  


             <div class="col-lg-3" style="border:1px solid red; width:500px">  
                <div class="box1">Memorija (HDD/SSD)</div>
               
               
               <img src="../assets/images/hdd-sdd.jpg">
                 <div id="v-model-select" class="demo">
                  <select v-model="selectedMemorija">
                    <option disabled value="">Izaberite Memoriju</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                  <br>
                  <span>Izabrano: {{ selectedMemorija }}</span>
                </div>
            </div>    
            
            
            
            
            
              </div>
     
                           
                                  <ul class="list-group">
                                    <li class="list-group-item">RAM: nije odabrano <img src="../assets/ikone/x-circle.svg" width="20" height="20" style="margin-bottom:5px;"></li>
                                   
                                    
                                   
                                  </ul>
      
          </div>
        </div>
      </div>  
    </div>      
 

  </template>

<script>
  import Natrag from '@/components/Natrag.vue'
  import store from "@/store";

  let procesor =[]
  {
    id: 1
  }


  export default {
  name: 'Slaganje-PC',
  data(){
      return {
        searchSlaganjeCPU: "",
        selectedRAM:'',
        selectedGPU:'',
        selectedCPU:'',
        selectedMaticna:'',
        selectedPSU:'',
        selectedMemorija:''
      }
  },




   components:{
      Natrag
  }
  };
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

.col-lg-3{
  
  height: 400px;
  margin:5px;
 }


.col-lg-11{
  border: 1px solid lightgrey;
  background-color: #f8f9fa;
  height: 1100px;
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
