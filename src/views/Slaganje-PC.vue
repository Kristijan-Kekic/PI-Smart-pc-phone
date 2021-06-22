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
          
          
          
            <div class="col-lg-3">   
              
              <div class="box1">Radna memorija (RAM)</div>
                  
              <img src="../assets/images/ram.png"> 
              
              <select v-model="productRAM.selectedRAM">
                <option v-bind:value="{id: RAM.id, naziv: RAM.naziv, radmemorija: RAM.radmemorija, cijena: RAM.cijena}" v-for="RAM in RAMs" :key=RAM.id>
                  {{RAM.radmemorija}}</option>
              </select> 
              
              </div>  




                
             <div class="col-lg-3">   
               <div class="box1">Grafički procesor (GPU)</div>
               
               
                <img src="../assets/images/gpu.png">
                
                <select v-model="productGPU.selectedGPU">
                <option v-bind:value="{id: GPU.id, naziv: GPU.naziv, graprocesor: GPU.graprocesor, cijena: GPU.cijena}" v-for="GPU in GPUs" :key=GPU.id>
                  {{GPU.graprocesor}}</option>
              </select> 
                
                
                </div>  
                



             <div class="col-lg-3"> 
               <div class="box1">Procesor (CPU)</div>
               
               
              <!-- <img src="../assets/images/cpu.png"> -->
              
         <br>          
            
              <select v-model="productCPU.selectedCPU">
                <option v-bind:value="{id: cpu.id, naziv: cpu.naziv, procesor: cpu.procesor, cijena: cpu.cijena}" v-for="cpu in CPUs" :key=cpu.id>
                  {{cpu.procesor}}</option>
              </select> 
                
            

               
               </div>  




             <div class="col-lg-3"> 
                <div class="box1">Matična Ploča</div>
               
               
               
                <img src="../assets/images/maticna.png"> 
               
                <select v-model="productMaticna.selectedMaticna">
                <option v-bind:value="{id: maticna.id, naziv: maticna.naziv, mploca: maticna.mploca, cijena: maticna.cijena}" v-for="maticna in maticnas" :key=maticna.id>
                  {{maticna.mploca}}</option>
              </select> 
                
                
                </div>  




             <div class="col-lg-3"> 
                <div class="box1">Napajanje (PSU)</div>
               
               
               <img src="../assets/images/psu.jpg">
               
               <select v-model="productPSU.selectedPSU">
                <option v-bind:value="{id: PSU.id, naziv: PSU.naziv, nap: PSU.nap, cijena: PSU.cijena}" v-for="PSU in PSUs" :key=PSU.id>
                  {{PSU.nap}}</option>
              </select> 
                </div>  


             <div class="col-lg-3">  
                <div class="box1">Memorija (HDD/SSD)</div>
               
               
               <img src="../assets/images/hdd-sdd.jpg">
                <select v-model="productMemorija.selectedMemorija">
                <option v-bind:value="{id: memorija.id, naziv: memorija.naziv, mem: memorija.mem, cijena: memorija.cijena}" v-for="memorija in memorijas" :key=memorija.id>
                  {{memorija.mem}}</option>
              </select> 
            </div>    
            
            
            
            
            
              </div>
     
                     <div class="row justify-content-center">
                  <div class="col-lg-1"></div>
                    <div class="col-lg-6"><div class="box2"> Izabrane komponente</div></div>
                    <div class="col-lg-1"></div>
                    </div>

      <br>

      <div class="row">                     
      
          
            <div class="row justify-content-center"> 
            <div class="box3">
           <p>RAM</p>
          <pre>Proizvođač : {{productRAM.selectedRAM.naziv}}</pre>
            <pre>Specifikacija : {{productRAM.selectedRAM.radmemorija}}</pre>
            <pre>Cijena: {{productRAM.selectedRAM.cijena}}</pre>
          </div>
          
           <div class="box3"><p>GPU</p>
            <pre>Proizvođač : {{productGPU.selectedGPU.naziv}}</pre>
            <pre>Specifikacija : {{productGPU.selectedGPU.graprocesor}}</pre>
            <pre>Cijena: {{productGPU.selectedGPU.cijena}}</pre>
            </div>

           <div class="box3"><p>CPU</p>
            <pre>Proizvođač : {{productCPU.selectedCPU.naziv}}</pre>
            <pre>Specifikacija : {{productCPU.selectedCPU.procesor}}</pre>
            <pre>Cijena: {{productCPU.selectedCPU.cijena}}</pre>
           </div>
          </div>

          <div class="row justify-content-center">  
          
          <div class="box3"><p>Matična ploča</p>
            <pre>Proizvođač : {{productMaticna.selectedMaticna.naziv}}</pre>
            <pre>Specifikacija : {{productMaticna.selectedMaticna.mploca}}</pre>
            <pre>Cijena: {{productMaticna.selectedMaticna.cijena}}</pre>
           </div>
           <div class="box3"><p>PSU</p>
            <pre>Proizvođač : {{productPSU.selectedPSU.naziv}}</pre>
            <pre>Specifikacija : {{productPSU.selectedPSU.nap}}</pre>
            <pre>Cijena: {{productPSU.selectedPSU.cijena}}</pre>
          </div>
           <div class="box3"><p>HDD/SSD</p>
              <pre>Proizvođač : {{productMemorija.selectedMemorija.naziv}}</pre>
            <pre>Specifikacija : {{productMemorija.selectedMemorija.mem}}</pre>
            <pre>Cijena: {{productMemorija.selectedMemorija.cijena}}</pre>
              </div>
           
            </div>
          <div class="row justify-content-center">  
      <div class="col-lg-6"><div class="box1"> Ukupna cijena :</div></div>
      </div>
      </div>
    
    
    
     <!--<img src="../assets/ikone/x-circle.svg" width="20" height="20" style="margin-bottom:5px;">-->
     
          </div>
        </div>
      </div>  
    </div>      
 

  </template>

<script>
  import Natrag from '@/components/Natrag.vue';
  import store from "@/store";
  
  export default {
  name: 'Slaganje-PC',
 
  data() {
    return {
    productRAM: {
      selectedRAM: {
        id: 1,
        naziv: 'Nije odabran RAM',
        radmemorija: 'Nije odabran RAM',
        cijena: 'Nije odabran RAM'
        
      }
    },
  
    RAMs: [
      {id: 1, naziv:'r' , radmemorija:'r', cijena: 0 + ' Kn'},
      {id: 2, naziv:'r' , radmemorija:'r', cijena: 0 + ' Kn'},
      {id: 3, naziv:'r' , radmemorija:'r', cijena: 0 + ' Kn'},
      {id: 4, naziv:'r' , radmemorija:'r', cijena: 0 + ' Kn'},
      {id: 5, naziv:'r' , radmemorija:'r', cijena: 0 + ' Kn'},
      
    ],

productGPU: {
      selectedGPU: {
        id: 1,
        naziv: 'Nije odabran GPU',
        graprocesor: 'Nije odabran GPU',
        cijena: 'Nije odabran GPU'
        
      }
    },
  
    GPUs: [
      {id: 1, naziv:'g' , graprocesor:'g', cijena: 0 + ' Kn'},
      {id: 2, naziv:'g' , graprocesor:'g', cijena: 0 + ' Kn'},
      {id: 3, naziv:'g' , graprocesor:'g', cijena: 0 + ' Kn'},
      {id: 4, naziv:'g' , graprocesor:'g', cijena: 0 + ' Kn'},
      {id: 5, naziv:'g' , graprocesor:'g', cijena: 0 + ' Kn'},
      
    ],

    productCPU: {
      selectedCPU: {
        id: 1,
        naziv: 'Nije odabran CPU',
        procesor: 'Nije odabran CPU',
        cijena: 'Nije odabran CPU'
        
      }
    },
  
    CPUs: [
      {id: 1, naziv:'AMD' , procesor:'ryzen 5 3600 3.6ghz 17866 65w', cijena: 1500 + ' Kn'},
      {id: 2, naziv:'AMD' , procesor:'ryzen 5 5600x 22180 65w', cijena: 2600 + ' Kn'},
      {id: 3, naziv:'AMD' , procesor:'ryzen 7 3700x 3.6ghz 22798 65w', cijena: 2087 + ' Kn'},
      {id: 4, naziv:'Intel' , procesor:'i9-10900x 3.7ghz 22849 165w', cijena: 4583 + ' Kn'},
      {id: 5, naziv:'Intel' , procesor:'i3-10320 3.8ghz 10123 65w', cijena: 1378 + ' Kn'},
      
    ],
 

  productMaticna: {
      selectedMaticna: {
        id: 1,
        naziv: 'Nije odabrana Matična Ploča',
        mploca: 'Nije odabrana Matična Ploča',
        cijena: 'Nije odabrana Matična Ploča'
        
      }
    },
  
    maticnas: [
      {id: 1, naziv:'mp' , mploca:'mp', cijena: 0 + ' Kn'},
      {id: 2, naziv:'mp' , mploca:'mp', cijena: 0 + ' Kn'},
      {id: 3, naziv:'mp' , mploca:'mp', cijena: 0 + ' Kn'},
      {id: 4, naziv:'mp' , mploca:'mp', cijena: 0 + ' Kn'},
      {id: 5, naziv:'mp' , mploca:'mp', cijena: 0 + ' Kn'},
      
    ],

    productPSU: {
      selectedPSU: {
        id: 1,
        naziv: 'Nije odabran PSU',
        nap: 'Nije odabrana PSU',
        cijena: 'Nije odabrana PSU'
        
      }
    },
  
    PSUs: [
      {id: 1, naziv:'p' , nap:'p', cijena: 0 + ' Kn'},
      {id: 2, naziv:'p' , nap:'p', cijena: 0 + ' Kn'},
      {id: 3, naziv:'p' , nap:'p', cijena: 0 + ' Kn'},
      {id: 4, naziv:'p' , nap:'p', cijena: 0 + ' Kn'},
      {id: 5, naziv:'p' , nap:'p', cijena: 0 + ' Kn'},
      
    ],

    productMemorija: {
      selectedMemorija: {
        id: 1,
        naziv: 'Nije odabrana Memorija',
        mem: 'Nije odabrana Memorija',
        cijena: 'Nije odabrana Memorija'
        
      }
    },
  
    memorijas: [
      {id: 1, naziv:'m' , mem:'m', cijena: 0 + ' Kn'},
      {id: 2, naziv:'m' , mem:'m', cijena: 0 + ' Kn'},
      {id: 3, naziv:'m' , mem:'m', cijena: 0 + ' Kn'},
      {id: 4, naziv:'m' , mem:'m', cijena: 0 + ' Kn'},
      {id: 5, naziv:'m' , mem:'m', cijena: 0 + ' Kn'},
      
    ],
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
    height: 150px;
  margin:5px;
border-color:lightgray;
border-style: solid;
border-width: 1px;
}

.col-lg-11{
  border: 1px solid lightgrey;
  background-color: #f8f9fa;
  padding:0px 0px 20px 0px;
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

.box3{
width:500px;
background:white;
padding:15px;
border-color:lightgray;
border-style: solid;
border-width: 1px;
margin:10px;
}

.natrag-m{
    font-size: 20px;
    background-color: white;
    border-color:lightgray;
    border-style: solid;
    border-width: 1px;
    width:200px;
    
    
      
    }
.list-group-item{
  height:150px;
}



</style>
