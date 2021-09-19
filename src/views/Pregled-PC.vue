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
                  <div class="col-lg" style="margin-left:45px; margin-top:10px;">
                  <p class="naslov">Računala na raspolaganju</p>
                      
                  </div>

            </div>
          </div>
          </div>
          <div class="row">

          <div class="row justify-content-center">

              <div id="vrste" class="col-lg-3">
                <div class="box1"><b>Alarco Intel i5</b></div>
                <p>3.10GHz,8GB Ram,1TB Hard Drive,Windows 10 pro,WiFi Ready,Video Card Nvidia GTX 650 1GB, 3 RGB Fans with Remote 
                </p>
                <br>
                  <img src="../assets/images/alarco.jpg" width="100px">
                <br>
                <p class="cijena">Cijena: 3.395,17 Kn
                </p>
                
                <a href="Wishlist"><button class="button">DODAJ</button></a>
              <!--<div class="modal-container" id="modal_container">
                <div class="modal">
                  <h1>Dodano!</h1>
                  <p>Vaš proizvod je dodan u listi želja.</p>
                  <button id="close">Zatvori</button>
              </div>
              </div> -->
              </div>

              <div id="vrste" class="col-lg-3">
                <div class="box1"><b>Legacy Gaming PC</b></div>
                <p>AMD Ryzen 5 2600, B450 Motherboard, 120GB SSD + 1TB 7200RPM 3.5' SATA Hard Drive, NVIDIA GeForce GTX 1660 SUPER 
                </p>
                <br>
                  <img src="../assets/images/legacy.png" width="130px">
                <br>
                <p class="cijena">Cijena: 6.406,04 Kn
                </p>

                <a href="Wishlist"><button class="button">DODAJ</button></a>

              </div> 

              <div id="vrste" class="col-lg-3">
                <div class="box1"><b>Prism II Gaming PC</b></div>
                <p>AMD Ryzen 9 3900X 3.8GHz, RTX 3090 24GB, 32GB 3600mhz RGB Memory, 1TB Gen4 SSD, 360mm AIO  
                </p>
                <br>
                  <img src="../assets/images/prism.jpg" width="118px">
                <br>

                <p class="cijena">Cijena: 26.905,56 Kn
                </p>
                <a href="Wishlist"><button class="button">DODAJ</button></a>

              </div> 

            </div>
          </div>
           <div class="row">

          <div class="row justify-content-center">

              <div id="vrste" class="col-lg-3">
                <div class="box1"><b>Lenovo V50s SFF</b></div>
                <p>Intel Core i5 10400 up to 4.3GHz, 8GB DDR4, 256GB NVMe SSD, Intel UHD Graphics 630, no ODD
                </p>
                <br>
                  <img class="fit" src="../assets/images/Lenovo.jpg">
                <br>
                <p class="cijena">Cijena: 4.056,25 Kn
                </p>
                <a href="Wishlist"><button class="button">DODAJ</button></a>

              </div> 

              <div id="vrste" class="col-lg-3">
                <div class="box1"><b>Asus ExpertCenter</b></div>
                <p>Intel Core i3 10100 up to 4.3GHz, 8GB DDR4, 256GB NVMe SSD + 1TB HDD, Intel UHD Graphics 630, DVD
                </p>
                <br>
               <img class="fit" src="../assets/images/Asus.jpg">
                <br>
                <p class="cijena">Cijena: 3.918,75 Kn
                </p>
                <a href="Wishlist"><button class="button">DODAJ</button></a>

              </div> 

              <div id="vrste" class="col-lg-3">
                <div class="box1"><b>Dell Optiplex 3080 MT</b></div>
                <p>Intel Core i3 10100 up to 4.3GHz, 8GB DDR4, 256GB NVMe SSD, Intel UHD Graphics 630, DVD, Linux
                </p>
                <br>
               <img class="fit" src="../assets/images/Dell.jpg">
                <br>

                <p class="cijena">Cijena: 4.053,88 Kn
                </p>
                <a href="Wishlist"><button class="button">DODAJ</button></a>

              </div> 

            </div>
          </div>
           <div class="row">

          <div class="row justify-content-center">

              <div id="vrste" class="col-lg-3">
                <div class="box1"><b>Notebook Razer Book 13</b></div>
                <p>13.4" FHD Touch, Intel Core i7 1165G7 up to 4.7GHz, 16GB DDR4, 256GB NVMe SSD, Intel Iris Xe Graphics, no ODD
                </p>
                <br>
               <img class="fit" src="../assets/images/razer.jpg">
                <br>
                <p class="cijena">Cijena: 13.446,13 Kn
                </p>  
                <a href="Wishlist"><button class="button">DODAJ</button></a>

              </div> 

              <div id="vrste" class="col-lg-3">
                <div class="box1"><b>Notebook HP 255 G7</b></div>
                <p>15.6" FHD, AMD Athlon Silver 3050U up to 3.2GHz, 8GB DDR4, 256GB M2 SSD, AMD Radeon Graphics, no ODD
                </p>
                <br>
               <img class="fit" src="../assets/images/HP.jpg">
                <br>
                <p class="cijena">Cijena: 2.998,95 Kn
                </p>
                <a href="Wishlist"><button class="button">DODAJ</button></a>

              </div> 

              <div id="vrste" class="col-lg-3">
                <div class="box1"><b>Acer Chromebook 315</b></div>
                <p>15.6" FHD, Intel Celeron N4020 up to 2.8GHz, 4GB DDR4, 64GB eMMC, Intel UHD Graphics 600, no ODD, Chrome OS
                </p>
                <br>
               <img class="fit" src="../assets/images/Acer.jpg">
                <br>
                <p class="cijena">Cijena: 2.354,00 Kn
                </p>
                <a href="Wishlist"><button class="button">DODAJ</button></a>

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
  /*const open = document.getElementById('open')
  const modal_container = document.getElementById('modal_container')
  const close = document.getElementById('close')

  open.addEventListener('click', ()=>{
    modal_container.classList.add('show');
  })

  close.addEventListener('click', ()=>{
    modal_container.classList.remove('show');
  })*/
</script>



<style scoped src="@/assets/css/PC.css">
</style>