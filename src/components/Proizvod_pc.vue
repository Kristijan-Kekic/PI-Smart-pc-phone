<template>
    
<div class="card">
  <div class="slika">
    <img :src="info.url">
    </div>
  <div class="card-body">
    <h5 class="card-title">Naziv : {{info.naziv}} <br> Procesor: {{info.procesor}} <br> Grafička kartica: {{info.graficka}} <br> Radna memorija: {{info.ram}} <br> Pohrana: {{info.hd}} <br> Cijena: {{info.cijena}} kn
    <div class="form-group" v-if="store.currentUser">
      <br>
      <input type="button" @click="newWishlist()" value="Dodaj u wishlist"/> 
    </div>
    </h5>
  </div>
</div>



</template>

<script>
import { db } from '@/firebase.js'
import store from '@/store.js'

export default {
  props: ['info'],
  name : 'Proizvod_pc',
  data: function() {
    return {
      store,
    }
  },

  computed: {

  },

  methods: {
    newWishlist() {

      db.collection("wishpcs").add({
        namjena: this.info.namjena,
        cijena: this.info.cijena,
        user: this.store.currentUser
      })
      .then(() => {
        console.log("dobar")
      })
      .catch((e) => {
        console.log("ne radi", e)
      }) 


    }
  }
}
</script>

<style scoped>

.btn-primary{
  background-color:rgb(124, 213, 240);
  border-color:rgb(124, 213, 240) ;
}

.card{
    margin:auto;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 12px;
    width: 300px;
    height: 600px;
    display: inline-block;
    
}

.slika{
    border-width: 1px;
    border-color: lightgray;
    border-style: solid;
    height:215px;
}

</style>