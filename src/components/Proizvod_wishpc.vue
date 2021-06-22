<template>
    
<div class="card">
  <div class="slika"></div>
  <div class="card-body">
    <h5 class="card-title">Ime pca<br> {{info.cijena}} <br> {{info.namjena}} <br>
    <input type="button" @click="deleteWishlist(info.id)" value="Makni"/>
    </h5>
  </div>
</div>



</template>

<script>
import store from '@/store.js'
import { db } from '@/firebase.js'

export default {
  props: ['info'],
  name : 'Proizvod_wishpc',
  data: function() {
    return {
      store,
    }
  },
  methods: {
    deleteWishlist(id) {
    db.collection("wishpcs").doc(id).delete().then(() => {
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