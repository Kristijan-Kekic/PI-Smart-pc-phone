<template>
<div class="container-fluid">
 <div class="row" v-if="!store.currentUser">
   <div class="col-4"></div>
   <div id="wl" class="col-4"><br>Moraš se ulogirati da možeš dodavati stvari u svoju listu želja!</div>
   <div class="col-4"></div>
 </div>
 <form @submit.prevent="postNewPc" class="form-inline mb-5">
 <div class="form-group">
   <label for="namjena">namjena</label>
   <input v-model="namjena" type="text" class="form-control ml-2" id="namjena">
 </div>
 <div class="form-group">
   <label for="procesor">procesor</label>
   <input v-model="procesor" type="text" class="form-control ml-2" id="procesor">
 </div>
 <div class="form-group">
   <label for="cijena">cijena</label>
   <input v-model="cijena" type="number" class="form-control ml-2" id="cijena">
 </div>
 <button type="sumbit" class="btn btn primary ml-2">stavi</button>
 </form>
 <div class="col-lg-12" style="margin-bottom:15px;">
  <div class="row justify-content-center">
    <Proizvod_wishpc v-for="pc in filteredwishpcs" :key="pc.id" :info="pc" />
     </div>
  </div>  
</div>  
</template>

<script>
import store from '@/store.js'
import { db } from '@/firebase.js'
import Proizvod_wishpc from '@/components/Proizvod_wishpc.vue'

export default {
  name: 'Wishlist',
  data() { 
    return {
      store,
      wishpcs : [],
      namjena: "",
      procesor: "",
      cijena: "",
    }
  },
  components:{
    Proizvod_wishpc

  },
mounted() {
    this.getWishPcs();
  },

  computed: {
   filteredwishpcs() {
     return this.wishpcs
   },
  },

  methods: {

    postNewPc() {
      console.log("k")


      db.collection("wishpcs").add({
          namjena: this.namjena,
          proc: this.procesor,
          cijena: this.cijena,
      })
      .then(() =>{
        console.log("yey")
      })
      .catch((e) => {
        console.log(e)
      })
    },

    test(id) {
      db.collection('wishpcs').doc(id).delete()
      
    },

    filterUser: function(wishpcs) {
    let user = this.store.currentUser
    return wishpcs.filter(wishpc => wishpc.user == user);
  },

    getWishPcs() {

      db.collection('wishpcs')
      .get()
      .then((query) =>{
        query.forEach((doc) => {

          const data = doc.data();

          this.wishpcs.push({
             id: doc.id,
             namjena: data.namjena,
             cijena: data.cijena,
             procesor: data.proc
          })
        })
      })
    },
  }
}
</script>

<style scoped>

#wl {
  background-color: white;
}
</style>