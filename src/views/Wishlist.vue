<template>
 <div class="row" v-if="!store.currentUser">
   <div class="col-4"></div>
   <div id="wl" class="col-4"><br>Moraš se ulogirati da možeš vidjeti svoju listu želja!</div>
   <div class="col-4"></div>
 </div>
</template>

<script>
import store from '@/store.js'
export default {
  name: 'Wishlist',
  data() { 
    return {
      store,
    }
  },
  computed: {

  },
  methods: {
   
  },
}
</script>

<style scoped>

#wl {
  background-color: white;
}
</style>