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
                        <li class="list-group-item">Proizvođač</li>
                        <br>
                        <form id="searchProizvodac" class="col">
                          <input v-model="store.searchProizvodac" class="form-control-mr-sm-2" type="search" placeholder="Npr. Huawei, Xiaomi"
                          />
                        </form>
                        <br>
                        <li class="list-group-item">Preferenca</li>
                        <br>
                        <form id="searchPreferenca" class="col">
                          <input v-model="store.searchPreferenca" class="form-control-mr-sm-2" type="search" placeholder="Npr. svakodnevnica, kamera, perfomanse"
                          />
                        </form>
                        <br>
                        <li class="list-group-item">Pohrana</li>
                        <br>
                        <form id="searchMHD" class="col">
                          <input v-model="store.searchMHD" class="form-control-mr-sm-2" type="search" placeholder="Npr. 32gb, 64gb"
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
import { db } from '@/firebase.js'

export default {
  name: 'Mobitel',
  data: function() {
    return {
      mobs : [],
      store,
      range : "1",
      range2 : "10000"
    };
  },
components:{
      Proizvod_mob,
      Natrag,
  },

mounted() {
    this.getMobs();
  },

computed: {
   filteredmobs() {
     return this.filterCijenaMin(this.filterCijenaMax(this.filterPreferenca(this.filterEkran(this.filterBaterija(this.filterProizvodac(this.filterMHD(this.mobs)))))))
   },
  },

methods: {
  getMobs() {

    db.collection('mobs').get().then((query) =>{
      query.forEach((doc) => {

        const data = doc.data();

        this.mobs.push({
            id: doc.id,
            proizvodac: data.proizvodac,
            preferenca: data.preferenca,
            ekran: data.ekran,
            baterija: data.baterija,
            pohrana: data.pohrana,
            cijena: parseInt(data.cijena),
            url: data.url
          })
        })
      })
    },

  filterProizvodac: function(mobs) {
    let pro = (this.store.searchProizvodac).toLowerCase();
    return mobs.filter(mob => mob.proizvodac.toLowerCase().indexOf(pro) >= 0);
  },

  filterPreferenca: function(mobs) {
    let pref = (this.store.searchPreferenca).toLowerCase();
    return mobs.filter(mob => mob.preferenca.toLowerCase().indexOf(pref) >= 0);

  },

  filterBaterija: function(mobs) {
    let bat = (this.store.searchBaterija).toLowerCase();
    return mobs.filter(mob => mob.baterija.toLowerCase().indexOf(bat) >= 0);
  },

  filterEkran: function(mobs) {
    let ekr = (this.store.searchEkran).toLowerCase();
    return mobs.filter(mob => mob.ekran.toLowerCase().indexOf(ekr) >= 0);
  },

  filterMHD: function(mobs) {
    let mhd = (this.store.searchMHD).toLowerCase();
    return mobs.filter(mob => mob.pohrana.toLowerCase().indexOf(mhd) >= 0);
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