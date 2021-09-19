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
              <p>Napredno pretrazivanje</p>
              <form id="filterRAM" class="col">
                <input v-model="store.RAMFilter" class="form-control-mr-sm-2" type="search" placeholder="Npr. 2gb, 4gb"/>
              </form>
                <span>Odabrani filter: {{ store.RAMFilter }}</span>
              <br>
                  
              <img src="../assets/images/ram.png">
              <br>
              <select style="width:200px;" v-model="productRAM.selectedRAM">
                <option v-bind:value="{naziv: RAM.naziv, cijena: RAM.cijena}" v-for="RAM in filterram" :key=RAM.id>
                  {{RAM.naziv}}</option>
                  <option>2gb</option>
                  <option>4gb</option>
                  <option>6gb</option>
                  <option>8gb</option>
                  <option>12gb</option>
              </select> 
              
              </div>  




                
             <div class="col-lg-3">   
               <div class="box1">Grafički procesor (GPU)</div>

               <p>Napredno pretrazivanje</p>
              <form id="filterGPU" class="col">
                <input v-model="store.GPUFilter" class="form-control-mr-sm-2" type="search" placeholder="Npr. geforce, radeon"/>
              </form>
                <span>Odabrani filter: {{ store.GPUFilter }}</span>
                <br>
               
                <img src="../assets/images/gpu.png">
                <br>
                
                <select style="width:200px;" v-model="productGPU.selectedGPU">
                <option v-bind:value="{naziv: GPU.naziv, cijena: GPU.cijena}" v-for="GPU in filtergpu" :key=GPU.id>
                  {{GPU.naziv}}</option>
                  <option>GeForce</option>
                  <option>Radeon</option>
                  <option>MSI</option>
                  <option>Gigabyte</option>
                  <option>Sapphire</option>
              </select> 
                
                
                </div>  
                



             <div class="col-lg-3"> 
               <div class="box1">Procesor (CPU)</div>

               <p>Napredno pretrazivanje</p>
              <form id="filterCPU" class="col">
                <input v-model="store.CPUFilter" class="form-control-mr-sm-2" type="search" placeholder="Npr. intel, amd"/>
                </form>
                <span>Odabrani filter: {{ store.CPUFilter }}</span>
                <br>
               
              <img src="../assets/images/cpu.png">
              
              <br>          
            
              <select style="width:200px;" v-model="productCPU.selectedCPU">
                <option v-bind:value="{naziv: cpu.naziv, cijena: cpu.cijena, socket: cpu.socket}" v-for="cpu in filtercpu" :key=cpu.id>
                  {{cpu.naziv}}</option>
                  <option>Intel</option>
                  <option>AMD</option>
                  <option>Nvidia</option>
                  <option>Hitachi</option>
                  <option>IBM</option>
              </select> 
                
            

               
               </div>  




             <div class="col-lg-3"> 
                <div class="box1">Matična Ploča</div>
               
                <p>Napredno pretrazivanje</p>
                <form id="filterMP" class="col">
                <input v-model="store.MPFilter" class="form-control-mr-sm-2" type="search" placeholder="Npr. asus, asrock"/>
                </form>
                <span>Odabrani filter: {{ store.MPFilter }}</span>
                <br>
               
                <img src="../assets/images/maticna.png"> 
                <br>
                <select style="width:200px;" v-model="productMaticna.selectedMaticna">
                <option v-bind:value="{naziv: maticna.naziv, cijena: maticna.cijena, socket: maticna.socket}" v-for="maticna in filtermp" :key=maticna.id>
                  {{maticna.naziv}}</option>
                  <option>Asus</option>
                  <option>Intel</option>
                  <option>Asrock</option>
                  <option>Biostar</option>
                  <option>Gigybyte</option>
              </select> 
                
                
                </div>  




             <div class="col-lg-3"> 
                <div class="box1">Napajanje (PSU)</div>
                <p>Napredno pretrazivanje</p>
                <form id="filterPSU" class="col">
                <input v-model="store.PSUFilter" class="form-control-mr-sm-2" type="search" placeholder="Npr. 500w, 750w"/>
                </form>
                <span>Odabrani filter: {{ store.PSUFilter }}</span>
                <br>
               <img src="../assets/images/psu.jpg">
               <br>
               <select style="width:200px;" v-model="productPSU.selectedPSU">
                <option v-bind:value="{naziv: PSU.naziv, cijena: PSU.cijena, snaga: PSU.snaga}" v-for="PSU in filterpsu" :key=PSU.id>
                  {{PSU.naziv}}</option>
                  <option>300w</option>
                  <option>500w</option>
                  <option>600w</option>
                  <option>700w</option>
                  <option>1200w</option>
                </select> 
                </div>  


             <div class="col-lg-3">  
                <div class="box1">Pohrana (HDD/SSD)</div>

                <p>Napredno pretrazivanje</p>
                <form id="filterHD" class="col">
                <input v-model="store.HDFilter" class="form-control-mr-sm-2" type="search" placeholder="Npr. hdd, ssd"/>
                </form>
                <span>Odabrani filter: {{ store.HDFilter }}</span>
                <br>
                <img src="../assets/images/hdd-sdd.jpg">
                <br>
                <select style="width:200px;" v-model="productMemorija.selectedMemorija">
                <option v-bind:value="{naziv: memorija.naziv, cijena: memorija.cijena}" v-for="memorija in filterhd" :key=memorija.id>
                  {{memorija.naziv}}</option>
                  <option>SSD</option>
                  <option>HDD</option>
                  <option>Optical Disk</option>
                  <option>M.2 NVMe</option>
                  <option>Vanjski</option>
                </select> 
                <br>
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
          <pre>Model : {{productRAM.selectedRAM.naziv}}</pre>
            <pre>Cijena : {{productRAM.selectedRAM.cijena}} kn </pre>
          </div>
          
           <div class="box3"><p>GPU</p>
            <pre>Model : {{productGPU.selectedGPU.naziv}}</pre>
            <pre>Cijena : {{productGPU.selectedGPU.cijena }} kn </pre>
            </div>

           <div class="box3"><p>CPU</p>
            <pre>Model : {{productCPU.selectedCPU.naziv}}</pre>
            <pre>Socket : {{productCPU.selectedCPU.socket}}</pre>
            <pre>Cijena : {{productCPU.selectedCPU.cijena}} kn </pre>
           </div>
          </div>

          <div class="row justify-content-center">  
          
          <div class="box3"><p>Matična ploča</p>
            <pre>Model : {{productMaticna.selectedMaticna.naziv}}</pre>
            <pre>Socket : {{productMaticna.selectedMaticna.socket}}</pre>
            <pre>Cijena : {{productMaticna.selectedMaticna.cijena}} kn </pre>
           </div>
           <div class="box3"><p>PSU</p>
            <pre>Model : {{productPSU.selectedPSU.naziv}}</pre>
            <pre>Snaga : {{productPSU.selectedPSU.snaga}} W</pre>
            <pre>Cijena : {{productPSU.selectedPSU.cijena}} kn</pre>
          </div>
           <div class="box3"><p>HDD/SSD</p>
            <pre>Model : {{productMemorija.selectedMemorija.naziv}}</pre>
            <pre>Cijena : {{productMemorija.selectedMemorija.cijena}} kn </pre>
              </div>
           
            </div>
          <div class="row justify-content-center">  
            <div class="col-lg-6"><div class="box1"> Ukupna cijena : 
                {{
                  parseInt(productRAM.selectedRAM.cijena) + 
                  parseInt(productGPU.selectedGPU.cijena) + 
                  parseInt(productCPU.selectedCPU.cijena) +
                  parseInt(productMaticna.selectedMaticna.cijena) + 
                  parseInt(productPSU.selectedPSU.cijena) +
                  parseInt(productMemorija.selectedMemorija.cijena)
                }} kn
            </div>
          </div>
      </div>
      </div>
    
     
          </div>
        </div>
      </div>  
    </div>      
 

</template>

<script>
  import Natrag from '@/components/Natrag.vue';
  import store from "@/store";
  import { db } from '@/firebase.js'
  
  export default {
  name: 'Slaganje-PC',
 
  data() {
    return {
    store,

    productRAM: {
      selectedRAM: {
        id: 1,
        naziv: 'Nije odabrano',
        cijena: '0'
        
      }
    },
  
    RAMs: [],

productGPU: {
      selectedGPU: {
        id: 1,
        naziv: 'Nije odabrano',
        cijena: '0'
        
      }
    },
  
    GPUs: [],

    productCPU: {
      selectedCPU: {
        id: 1,
        naziv: 'Nije odabrano',
        socket: 'Nije odabrano',
        cijena: '0'
        
      }
    },
  
    CPUs: [],
 

  productMaticna: {
      selectedMaticna: {
        id: 1,
        naziv: 'Nije odabrano',
        socket: 'Nije odabrano',
        cijena: '0'
        
      }
    },
  
    maticnas: [],

    productPSU: {
      selectedPSU: {
        id: 1,
        naziv: 'Nije odabrano',
        snaga: 0,
        cijena: '0'
        
      }
    },
  
    PSUs: [],

    productMemorija: {
      selectedMemorija: {
        id: 1,
        naziv: 'Nije odabrano',
        cijena: '0'
        
      }
    },
  
    pohranas: [],

    }

  },
   
   components:{
      Natrag
  },
  mounted() {
    this.getRAM();
    this.getGPU();
    this.getCPU();
    this.getMP();
    this.getPSU();
    this.getPohrana();
  },

  computed: {
    filterram() {
      return this.ram(this.RAMs)
    }
    ,filtergpu() {
      return this.gpu(this.GPUs)
    },
    filtercpu() {
      return this.cpu(this.CPUs)
    },
    filtermp() {
      return this.mp(this.maticnas)
    },
    filterpsu() {
      return this.psu(this.PSUs)
    },
    filterhd() {
      return this.hd(this.pohranas)
    }
  },

  methods: {

    getRAM() {
      db.collection('slaganje_ram').get().then((query) =>{
        query.forEach((doc) => {

          const data = doc.data();

          this.RAMs.push({
            id: doc.id,
            naziv: data.naziv,
            cijena: parseInt(data.cijena)
          })
        })
      })
      
    },

    getGPU() {
     db.collection("slaganje_gpu").orderBy("naziv", "asc").get().then((query) =>{
        query.forEach((doc) => {

          const data = doc.data();

          this.GPUs.push({
            id: doc.id,
            naziv: data.naziv,
            cijena: parseInt(data.cijena)
          })
        })
      })
      
    },

    getCPU() {
      db.collection('slaganje_cpu').orderBy("naziv", "asc").get().then((query) =>{
        query.forEach((doc) => {

          const data = doc.data();

          this.CPUs.push({
            id: doc.id,
            naziv: data.naziv,
            socket: data.socket,
            cijena: parseInt(data.cijena)
          })
        })
      })
      
    },

    getMP() {
      db.collection('slaganje_maticna').orderBy("naziv", "asc").get().then((query) =>{
        query.forEach((doc) => {

          const data = doc.data();

          this.maticnas.push({
            id: doc.id,
            naziv: data.naziv,
            socket: data.socket,
            cijena: parseInt(data.cijena)
          })
        })
      })
      
    },

    getPSU() {
      db.collection('slaganje_psu').orderBy("naziv", "asc").get().then((query) =>{
        query.forEach((doc) => {

          const data = doc.data();

          this.PSUs.push({
            id: doc.id,
            naziv: data.naziv,
            snaga: data.snaga,
            cijena: parseInt(data.cijena)
          })
        })
      })
      
    },

    getPohrana() {
      db.collection('slaganje_pohrana').orderBy("naziv", "asc").get().then((query) =>{
        query.forEach((doc) => {

          const data = doc.data();

          this.pohranas.push({
            id: doc.id,
            naziv: data.naziv,
            cijena: parseInt(data.cijena)
          })
        })
      })
      
    },

    ram: function(RAMs) {
    let ramf = (this.store.RAMFilter).toLowerCase();
    return RAMs.filter(ram => ram.naziv.toLowerCase().indexOf(ramf) >= 0);
    },

    gpu: function(GPUs) {
    let gpuf = (this.store.GPUFilter).toLowerCase();
    return GPUs.filter(gpu => gpu.naziv.toLowerCase().indexOf(gpuf) >= 0);
    },

    cpu: function(CPUs) {
    let cpuf = (this.store.CPUFilter).toLowerCase();
    return CPUs.filter(cpu => cpu.naziv.toLowerCase().indexOf(cpuf) >= 0);
    },

    mp: function(maticnas) {
    let mpf = (this.store.MPFilter).toLowerCase();
    return maticnas.filter(maticna => maticna.naziv.toLowerCase().indexOf(mpf) >= 0);
    },

    psu: function(PSUs) {
    let psuf = (this.store.PSUFilter).toLowerCase();
    return PSUs.filter(psu => psu.naziv.toLowerCase().indexOf(psuf) >= 0);
    },

    hd: function(pohranas) {
    let hdf = (this.store.HDFilter).toLowerCase();
    return pohranas.filter(pohrana => pohrana.naziv.toLowerCase().indexOf(hdf) >= 0);
    }

  },
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
  height: 300px;
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
height:250px;

  margin:auto;
}

/* Ostalo */

.kutija{
display: inline-block;
background:white;
padding:10px;
width:500px;
height:20px;
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
width: 25%;
height: 100%;
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

.opcija {
  width: 100px;
}



</style>
