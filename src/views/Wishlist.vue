<template>
<div class="container-fluid">
 <div class="row" v-if="!store.currentUser">
   <div class="col-4"></div>
   <div id="wl" class="col-4"><br>Moraš se ulogirati da možeš dodavati stvari u svoju listu želja!</div>
   <div class="col-4"></div>
 </div>
 <form @submit.prevent="postNewPc" class="form-inline mb-5">
  <div class="form-group">
   <croppa :width="100" :height="100" v-model="slikaref"> </croppa>
 </div>
 <div class="form-group">
   <label for="namjena">namjena</label>
   <input v-model="namjena" type="text" class="form-control ml-2" id="namjena">
 </div>
 <div class="form-group">
   <label for="naziv">naziv</label>
   <input v-model="naziv" type="text" class="form-control ml-2" id="naziv">
 </div>
 <div class="form-group">
   <label for="graficka">graficka</label>
   <input v-model="graficka" type="text" class="form-control ml-2" id="graficka">
 </div>
 <div class="form-group">
   <label for="procesor">procesor</label>
   <input v-model="procesor" type="text" class="form-control ml-2" id="procesor">
 </div>
 <div class="form-group">
   <label for="cijena">ram</label>
   <input v-model="ram" type="text" class="form-control ml-2" id="ram">
 </div>
 <div class="form-group">
   <label for="cijena">hd</label>
   <input v-model="hd" type="text" class="form-control ml-2" id="hd">
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
import { db , storage} from '@/firebase.js'
import Proizvod_wishpc from '@/components/Proizvod_wishpc.vue'

export default {
  name: 'Wishlist',
  data() { 
    return {
      store,
      wishpcs : [],
      naziv: "",
      url: "",
      namjena: "",
      procesor: "",
      graficka: "",
      ram: "",
      hd: "",
      cijena: "",
      slikaref: null
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

      this.slikaref.generateBlob((blobData) => {
        let slikaIme = "racunala/" + Date.now() + ".png";

        storage.ref(slikaIme).put(blobData).then(result => {
          result.ref.getDownloadURL().then(url => {
            console.log(url)

            db.collection("pcs").add({
            url: url,
            naziv: this.naziv,
            namjena: this.namjena,
            proc: this.procesor,
            graf: this.graficka,
            ram: this.ram,
            hd: this.hd,
            cijena: this.cijena,
            })
            .then((doc) =>{
            console.log("yey", doc)
            this.slikaref = null;
            })
            .catch((e) => {
              console.log(e)
            })
          })
        })
        .catch(e => {
          console.error(e)
        })
      });

      return;
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