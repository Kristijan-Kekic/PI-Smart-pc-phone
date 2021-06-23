<template>
  <div class="container-fluid py-4">
    
    <div class="row justify-content-center">
      <div class="col-lg-2" style="box-shadow: 4px 4px 5px rgba(145, 144, 144, 0.747); background-color: #f8f9fa; border-width: 0px 3px 0px; padding:15px; margin-right:5px;">
        <div class="row">
             
              <div class="col-lg-3">
              <Natrag />
              </div>  
         </div>


            <div class="row">
              <div class="col-lg-12">
                  <div class="row"> 
                                  
                    <div class="col-12">
                        <li class="list-group-item">Filteri</li> <br>
                        <li class="list-group-item">Namjena</li>
                        <br>
                        <form id="searchNamjena" class="col">
                          <input v-model="store.searchNamjena" class="form-control-mr-sm-2" type="search" placeholder="Npr. ured, multimedija, gaming"
                          />
                        </form>
                        <br>
                        <li class="list-group-item">Procesor (CPU)</li>
                        <br>
                        <form id="searchProc" class="col">
                          <input v-model="store.searchProcesor" class="form-control-mr-sm-2" type="search" placeholder="Npr. intel, amd"
                          />
                        </form>
                        <br>
                        <li class="list-group-item">Grafička kartica (GPU)</li>
                        <br>
                        <form id="searchGPU" class="col">
                          <input v-model="store.searchGraficka" class="form-control-mr-sm-2" type="search" placeholder="Npr. nvidia, amd"
                          />
                        </form>
                        <br>
                        <li class="list-group-item">Radna memorija (RAM)</li>
                        <br>
                        <form id="searchRAM" class="col">
                          <input v-model="store.searchRAM" class="form-control-mr-sm-2" type="search" placeholder="Npr. 1gb, 2gb, 4gb"
                          />
                        </form>
                        <br>
                        <li class="list-group-item">HDD/SDD</li>
                        <br>
                        <form id="searchHD" class="col">
                          <input v-model="store.searchHD" class="form-control-mr-sm-2" type="search" placeholder="Npr. hdd, ssd, hdd+ssd"
                          />
                        </form>
                        <br>
                        <li class="list-group-item">Cijena</li>
                        <br>
                        <label for="vol">Cijena (između 0 i 10000):</label>
                        <input type="range" v-model="range" min="0" max="10000" step="1"/>
                        <p>Trenutna min cijena: {{range}} kn </p>
                        <input type="range" v-model="range2" min="0" max="10000" step="1"/>
                        <p>Trenutna max cijena: {{range2}} kn </p>
                      </div>
                  </div>  
              


              </div>

            </div>

      </div>

    <div class="col-lg-9" style="box-shadow: 4px 4px 5px rgba(145, 144, 144, 0.747); border-width: 0px 3px 0px; background-color: #f8f9fa; margin-left:5px;">

            <div class="row">
            
            <div class="col-lg-12">
          
            <div class="row">
                  <div class="col-lg" style="margin-left:45px;">
                  <p class="naslov">Računala na raspolaganju</p>    
                  </div>

                    <div class="col-lg"></div>

                    <div class="col-lg" style="margin-right:50px;">
                    <div class="s-prema">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Sortiraj prema:</option>
                        <option value="1">Uzlazno</option>
                        <option value="2">Silazno</option>
                      
                      </select>
                    </div>
                    </div>
              </div>


            </div>
          </div>

          <div class="row">

              <div class="col-lg-12" style="margin-bottom:15px;">
                  <div class="row justify-content-center">
                      <proizvod_pc v-for="pc in filteredpcs" :key="pc.id" :info="pc" />             
                  </div>  
              </div>   
              </div>

          

    </div>

  </div>

</div>      
  
  

  

</template>

<script>
import Proizvod_pc from '@/components/Proizvod_pc.vue'
import Natrag from '@/components/Natrag.vue'
import store from '@/store.js'
import { db } from '@/firebase.js'

/* let pcs = [];

pcs = [
{
  id: 1,
  naslov: 'aaaa',
  namjena: 'gaming',
  cijena: 199,
  procesor: 'intel',
  graficka: 'intel',
  hd: 'hdd+ssd',
  ram: '4gb'
},

{
  id: 2,
  naslov: 'bbbb',
  namjena: 'multimedija',
  cijena: 299,
  procesor: 'amd',
  graficka: 'amd',
  hd: 'ssd',
  ram: '8gb'
},

{
  id: 3,
  naslov: 'cccc',
  namjena: 'ured',
  cijena: 399,
  procesor: 'intel',
  graficka: 'nvidia',
  hd: 'hdd+ssd',
  ram: '2gb'
},

{
  id: 4,
  naslov: 'dddd',
  namjena: 'gaming',
  cijena: 499,
  procesor: 'amd',
  graficka: 'nvidia',
  hd: 'hdd',
  ram: '2gb'
}


];

*/

export default {
  name: 'Pregled_PC',
  data: function() {
    return {
      pcs : [],
      store,
      range : "1",
      range2 : "10000"
    };
  },
  components:{
      Proizvod_pc,
      Natrag,
  },

  mounted() {
    this.getPcs();
  },

  computed: {
   filteredpcs() {
     return this.filterProc(this.filterRAM(this.filterCijenaMin(this.filterCijenaMax(this.filterNamjena(this.filterGraf(this.filterHD(this.pcs)))))))
   },
  },

  methods: {

  getPcs() {

      db.collection('pcs').get().then((query) =>{
        query.forEach((doc) => {

          const data = doc.data();

          this.pcs.push({
             id: doc.id,
             naziv: data.naziv,
             namjena: data.namjena,
             procesor: data.proc,
             graficka: data.graf,
             ram: data.ram,
             hd: data.hd,
             cijena: parseInt(data.cijena),
             url: data.url
          })
        })
      })
    },

  filterNamjena: function(pcs) {
    let nam = (this.store.searchNamjena).toLowerCase();
    return pcs.filter(pc => pc.namjena.indexOf(nam) >= 0);

  },

  filterProc: function(pcs) {
    let proc = (this.store.searchProcesor).toLowerCase();
    return pcs.filter(pc => pc.procesor.toLowerCase().indexOf(proc) >= 0);
  },

  filterGraf: function(pcs) {
    let graf = (this.store.searchGraficka).toLowerCase();
    return pcs.filter(pc => pc.graficka.toLowerCase().indexOf(graf) >= 0);
  },

  filterRAM: function(pcs) {
    let ram = (this.store.searchRAM).toLowerCase();
    return pcs.filter(pc => pc.ram.toLowerCase().indexOf(ram) >= 0);
  },

  filterHD: function(pcs) {
    let hdsd = (this.store.searchHD).toLowerCase();
    return pcs.filter(pc => pc.hd.toLowerCase().indexOf(hdsd) >= 0);
  },

  filterCijenaMin: function(pcs) {
    return pcs.filter(pc => (pc.cijena > 0 && pc.cijena > this.range) ? pc : '')
  },

  filterCijenaMax: function(pcs) {
    return pcs.filter(pc => (pc.cijena > 0 && pc.cijena < this.range2) ? pc : '')
  }

  }
}
    
</script>

<style scoped src="@/assets/css/PC.css">
</style>