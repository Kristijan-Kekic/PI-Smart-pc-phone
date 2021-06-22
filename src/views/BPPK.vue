<template>
  <div class="container-fluid">
    <br>
    <div class=row>
      <div class="col-1"></div>
      <div id="bppkview" class="col">Top procesori po omjeru ulozeno/dobiveno<br>
        <div class="row">
        <div class="col-6" id="lista">Naziv</div>
        <div class="col-2" id="lista">Score</div>
        <div class="col-2" id="lista">Snaga(W)</div>
        <div class="col-2" id="lista">Cijena</div>
        </div> <br>
         <BPPKCPU v-for="cpu in bppkcpus" :key="cpu.id" :info="cpu" />
         <br>
      </div>
      <div class="col-1"></div>
      <div id="bppkview" class="col">Top grafičke kartice po omjeru ulozeno/dobiveno
        <div class="row">
        <div class="col-6" id="lista">Naziv</div>
        <div class="col-2" id="lista">Score</div>
        <div class="col-2" id="lista">Snaga(W)</div>
        <div class="col-2" id="lista">Cijena</div>
        </div> <br>
        <BPPKCPU v-for="gpu in bppkgpus" :key="gpu.id" :info="gpu" />
        <br>
      </div>
      <div class="col-1"></div>
    </div>
  </div> 

</template>

<script>
import store from '@/store.js'
import { db } from '@/firebase.js'
import BPPKCPU from '@/components/BPPKCPU.vue'
import BPPKGPU from '@/components/BPPKGPU.vue'

export default {
name: 'BPPK',
data: function() {
  return {
    bppkcpus : [],
    bppkgpus : [],
  }
},
components:{
    BPPKCPU,
    BPPKGPU
  },
mounted() {
    this.getCpus();
    this.getGpus();
  },
methods: {
    getCpus() {

      db.collection('bppkcpu').orderBy('score', 'desc').get().then((query) =>{
        query.forEach((doc) => {

          const data = doc.data();

          this.bppkcpus.push({
             id: data.id,
             naziv: data.naziv,
             score: data.score,
             snaga: data.snaga,
             cijena: data.cijena + ' kn'
          })
        })
      })
    },

    getGpus() {

      db.collection('bppkgpu').orderBy('score', 'desc').get().then((query) =>{
        query.forEach((doc) => {

          const data = doc.data();

          this.bppkgpus.push({
             id: data.id,
             naziv: data.naziv,
             score: data.score,
             snaga: data.snaga,
             cijena: data.cijena + ' kn'
          })
        })
      })
    },


  
}
}
</script>

<style>
#bppkview {
  background-color: white;
}
</style>