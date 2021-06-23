<template>
<div class="container-fluid">
 <div class="row" v-if="!store.currentUser">
   <div class="col-4"></div>
   <div id="wl" class="col-4"><br>Moraš se ulogirati da možeš dodavati stvari u svoju listu želja!</div>
   <div class="col-4"></div>
 </div>
 <div class="col-lg-12" style="margin-bottom:15px;">
  <div class="row justify-content-center">
    <Proizvod_wishpc v-for="pc in filteredwishpcs" :key="pc.id" :info="pc" />
    <Proizvod_wishmob v-for="mob in filteredwishmobs" :key="mob.id" :info="mob" />
     </div>
  </div>  
</div>  
</template>

<script>
import store from '@/store.js'
import { db } from '@/firebase.js'
import Proizvod_wishpc from '@/components/Proizvod_wishpc.vue'
import Proizvod_wishmob from '@/components/Proizvod_wishmob.vue'

export default {
  name: 'Wishlist',
  data() { 
    return {
      store,
      wishpcs : [],
      wishmobs : [],
    }
  },
  components:{
    Proizvod_wishpc,
    Proizvod_wishmob

  },
mounted() {
    this.getWishPcs();
    this.getWishMobs();
  },

  computed: {
   filteredwishpcs() {
     return this.filterUserPc(this.wishpcs)
   },

   filteredwishmobs() {
     return this.filterUserMob(this.wishmobs)
   },
  },

  methods: {

    filterUserPc: function(wishpcs) {
      let user = this.store.currentUser
      return wishpcs.filter(wishpc => wishpc.user == user);
    },

    filterUserMob: function(wishmobs) {
      let user = this.store.currentUser
      return wishmobs.filter(wishmob => wishmob.user == user);
    },

    getWishPcs() {

      db.collection('wishpcs')
      .get()
      .then((query) =>{
        query.forEach((doc) => {

          const data = doc.data();

          this.wishpcs.push({
             id: doc.id,
             naziv: data.naziv,
             namjena: data.namjena,
             procesor: data.procesor,
             graficka: data.graficka,
             ram: data.ram,
             hd: data.hd,
             cijena: parseInt(data.cijena),
             url: data.url,
             user: data.user,
          })
        })
      })
    },

    getWishMobs() {

      db.collection('wishmobs')
      .get()
      .then((query) =>{
        query.forEach((doc) => {

          const data = doc.data();

          this.wishmobs.push({
            id: doc.id,
            proizvodac: data.proizvodac,
            preferenca: data.preferenca,
            ekran: data.ekran,
            baterija: data.baterija,
            pohrana: data.pohrana,
            cijena: parseInt(data.cijena),
            url: data.url,
            user: data.user
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