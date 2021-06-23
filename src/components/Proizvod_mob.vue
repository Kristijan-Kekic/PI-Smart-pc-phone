<template>
    
<div class="card">
  <div class="slika"><img :src="info.url"></div>
  <div class="card-body">
    <h5 class="card-title"> Model: {{info.proizvodac}} <br> Pohrana: {{info.pohrana}} <br> Ekran: {{info.ekran}} <br> Baterija: {{info.baterija}} <br> Cijena: {{info.cijena}} kn
    <div class="form-group" v-if="store.currentUser">
      <br>
      <input type="button" @click="newWishlist()" value="Dodaj u wishlist"/> 
    </div>
    </h5>
  </div>
</div>



</template>

<script>
import store from '@/store.js'
import { db } from '@/firebase.js'
export default {
  props: ['info'],
  name : 'Proizvod_mob',
  data: function() {
    return {
      store,
    }
  },
  methods: {
      newWishlist() {

      db.collection("wishmobs").add({
        id: this.info.id,
        proizvodac: this.info.proizvodac,
        preferenca: this.info.preferenca,
        ekran: this.info.ekran,
        baterija: this.info.baterija,
        pohrana: this.info.pohrana,
        cijena: parseInt(this.info.cijena),
        user: this.store.currentUser,
        url: this.info.url
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
    height: 500px;
    display: inline-block;
    
}

.slika{
    border-width: 1px;
    border-color: lightgray;
    border-style: solid;
    height:250px;
}

</style>