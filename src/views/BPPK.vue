<template>
  <div class="row">
  <div class="col-4"></div>
  <div class="col-4">
  <!-- nova forma za post -->
  <form @submit.prevent="postNewItem" class="form-inline mb-5">
  <div class="form-group">
  <label for="naziv">Naziv</label>
  <input
    v-model="naziv"
    type="text"
    class="form-control ml-2"
    placeholder="Naziv"
    id="naziv"
  />
  </div>
  <div class="form-group">
  <label for="gpuscore">Gpuscore</label>
  <input
    v-model="gpuscore"
    type="text"
    class="form-control ml-2"
    placeholder="Gpuscore"
    id="gpuscore"
  />
  </div>
  <div class="form-group">
  <label for="snaga">Watts</label>
  <input
    v-model="power"
    type="text"
    class="form-control ml-2"
    placeholder="Snaga"
    id="snaga"
  />
  </div>
  <div class="form-group">
  <label for="cijena">Cijena</label>
  <input
  v-model="cijena"
    type="text"
    class="form-control ml-2"
    placeholder="cijena"
    id="cijena"
  />
  </div>
  <button type="submit" class="btn btn-primary ml-2">Post
  image</button>
  </form>
 <div class="col-4"></div>
</div>
</div>

</template>

<script>
import store from '@/store.js'
import { db } from '@/firebase.js'

export default {
name: 'BPPK',
data: function() {
  return {
    naziv: '',
    gpuscore: '',
    power: '',
    cijena: ''
  }
},
methods: {
  postNewItem() {
    const naziv = this.naziv
    const gpuscore = parseFloat(this.gpuscore)
    const power = parseInt(this.power)
    const cijena = parseInt(this.cijena)

    db.collection('bppkgpu').add({
      naziv: naziv,
      score: gpuscore,
      snaga: power,
      cijena: cijena
    })
    .then((doc) => {
      console.log("spremljeno", doc)
    })
    .catch((e) => {
      console.error(e);
    });
  },
}
}
</script>