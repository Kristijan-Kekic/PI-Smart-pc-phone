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
                        <li class="list-group-item">Preferenca</li>
                        <br>
                        <form id="searchPreferenca" class="col">
                          <input v-model="store.searchPreferenca" class="form-control-mr-sm-2" type="search" placeholder="Npr. svakodnevnica, kamera, perfomanse"
                          />
                        </form>
                        <br>
                        <li class="list-group-item">Baterija</li>
                        <br>
                        <form id="searchBaterija" class="col">
                          <input v-model="store.searchBaterija" class="form-control-mr-sm-2" type="search" placeholder="3000, 4500, 6000 (mah)"
                          />
                        </form>
                        <br>
                        <li class="list-group-item">Veličina ekrana</li>
                        <br>
                        <form id="searchEkran" class="col">
                          <input v-model="store.searchEkran" class="form-control-mr-sm-2" type="search" placeholder="Npr. 6.5, 4.5, 6.1 (inch)"
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
                  <p class="naslov">Mobiteli na raspolaganju</p>    
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
                      <proizvod_mob v-for="mob in filteredmobs" :key="mob.id" :info="mob" />             
                  </div>  
              </div>   
              </div>

          

    </div>

  </div>

</div>      
  
  

  

  </template>

<script>
import Proizvod_mob from '@/components/Proizvod_mob.vue'
import Natrag from '@/components/Natrag.vue'
import store from '@/store.js'

let mobs = [];

mobs = [
{
  id: 1,
  naslov: 'aaaa',
  preferenca: 'kamera',
  cijena: 1199,
  baterija: '4500mah',
  ekran: '6.1'
},

{
  id: 2,
  naslov: 'bbbb',
  preferenca: 'perfomanse',
  cijena: 699,
  baterija: '5200mah',
  ekran: '6.4'
},

{
  id: 3,
  naslov: 'cccc',
  preferenca: 'svakodnevnica',
  cijena: 399,
  baterija: '3400mah',
  ekran: '5.1'
},

{
  id: 4,
  naslov: 'dddd',
  preferenca: 'svakodnevnica',
  cijena: 799,
  baterija: '4200mah',
  ekran: '5.6'
}


];

export default {
  name: 'Mobitel',
  data: function() {
    return {
      mobs,
      store,
      range : "1",
      range2 : "10000"
    };
  },
  components:{
      Proizvod_mob,
      Natrag,
  },
  computed: {
   filteredmobs() {
     return this.filterCijenaMin(this.filterCijenaMax(this.filterPreferenca(this.filterEkran(this.filterBaterija(this.mobs)))))
   },
  },

  methods: {

  filterPreferenca: function(mobs) {
    let pref = this.store.searchPreferenca;
    return mobs.filter(mob => mob.preferenca.indexOf(pref) >= 0);

  },

  filterBaterija: function(mobs) {
    let bat = this.store.searchBaterija;
    return mobs.filter(mob => mob.baterija.indexOf(bat) >= 0);
  },

  filterEkran: function(mobs) {
    let ekr = this.store.searchEkran;
    return mobs.filter(mob => mob.ekran.indexOf(ekr) >= 0);
  },

  filterCijenaMin: function(mobs) {
    return mobs.filter(mob => (mob.cijena > 0 && mob.cijena > this.range) ? mob : '')
  },

  filterCijenaMax: function(mobs) {
    return mobs.filter(mob => (mob.cijena > 0 && mob.cijena < this.range2) ? mob : '')
  }

  }
}
    
</script>

<style scoped src="@/assets/css/Mobiteli.css">
</style>