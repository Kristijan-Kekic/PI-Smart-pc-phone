<template>
<div class="container-fluid">
 <div class="row" v-if="!store.currentUser">
   <div class="col-4"></div>
   <div id="wl" class="col-4"><br>Moraš se ulogirati da možeš dodavati stvari u svoju listu želja!</div>
   <div class="col-4"></div>
 </div>
 <form @submit.prevent="postNewMob" class="form-inline mb-5">
  <div class="form-group">
   <croppa :width="100" :height="100" v-model="slikaref"> </croppa>
 </div>
 <div class="form-group">
   <label for="proizvodac">proizvodac</label>
   <input v-model="proizvodac" type="text" class="form-control ml-2" id="proizvodac">
 </div>
 <div class="form-group">
   <label for="preferenca">preferenca</label>
   <input v-model="preferenca" type="text" class="form-control ml-2" id="preferenca">
 </div>
 <div class="form-group">
   <label for="pohrana">pohrana</label>
   <input v-model="pohrana" type="text" class="form-control ml-2" id="pohrana">
 </div>
 <div class="form-group">
   <label for="ekran">ekran</label>
   <input v-model="ekran" type="text" class="form-control ml-2" id="ekran">
 </div>
 <div class="form-group">
   <label for="baterija">baterija</label>
   <input v-model="baterija" type="text" class="form-control ml-2" id="baterija">
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
      wishmobs : [],
      proizvodac: "",
      url: "",
      preferenca: "",
      pohrana: "",
      ekran: "",
      baterija: "",
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

    postNewMob() {
      console.log("k")

      this.slikaref.generateBlob((blobData) => {
        let slikaIme = "mobiteli/" + Date.now() + ".png";

        storage.ref(slikaIme).put(blobData).then(result => {
          result.ref.getDownloadURL().then(url => {
            console.log(url)

            db.collection("mobs").add({
            url: url,
            proizvodac: this.proizvodac,
            pohrana: this.pohrana,
            ekran: this.ekran,
            preferenca: this.preferenca,
            baterija: this.baterija,
            cijena: this.cijena,
            })
            .then((doc) =>{
            console.log("yey", doc)
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