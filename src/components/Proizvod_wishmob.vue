<template>
    
<div class="card">
  <div class="slika">
    <img :src="info.url">
  </div>
  <div class="card-body">
    <h5 class="card-title">Model : {{info.proizvodac}} <br> Model: {{info.proizvodac}} <br> Pohrana: {{info.pohrana}} <br> Ekran: {{info.ekran}} <br> Baterija: {{info.baterija}} <br> Cijena: {{info.cijena}} kn
    <input type="button" @click="deleteWishlist(info.id)" value="Ukloni iz liste želja"/>
    </h5>
  </div>
</div>



</template>

<script>
import store from '@/store.js'
import { db } from '@/firebase.js'

export default {
  props: ['info'],
  name : 'Proizvod_wishmob',
  data: function() {
    return {
      store,
    }
  },
  methods: {
    deleteWishlist(id) {
    db.collection("wishmobs").doc(id).delete().then(() => {
    console.log("Document successfully deleted!");
    }).catch((error) => {
    console.error("Error removing document: ", error);
});


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
    height: 550px;
    display: inline-block;
    
}

.slika{
    border-width: 1px;
    border-color: lightgray;
    border-style: solid;
    height:215px;
}

</style>