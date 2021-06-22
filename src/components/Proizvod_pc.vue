<template>
    
<div class="card">
  <div class="slika"></div>
  <div class="card-body">
    <h5 class="card-title">Ime pca {{info.naslov}} <br> {{info.cijena}} <br> {{info.procesor}} <br>
    <div class="form-group">
      <input type="button" @click="newWishlist()" value="Dodaj u wishlist"/> 
    </div>
    </h5>
  </div>
</div>



</template>

<script>
import { db } from '@/firebase.js'

export default {
  props: ['info'],
  name : 'Proizvod_pc',
  data: function() {
    return {
    }
  },

  computed: {

  },

  methods: {
    newWishlist() {
      let varijabla = this.info
      console.log(varijabla)

      db.collection("wishlist").add({
        namjena: this.info.namjena,
        cijena: this.info.cijena
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
    height: 400px;
    display: inline-block;
    
}

.slika{
    border-width: 1px;
    border-color: lightgray;
    border-style: solid;
    height:250px;
}

</style>