<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="col-1"></div>
        <div class="col-1">
          <router-link class="rl" to="/Wishlist"><img src="../assets/ikone/cart.svg" width="20" height="20" style="margin-bottom:5px;"> Lista želja
          </router-link>
        </div>
        <div class="col-1"></div>
        
        <div class="col-4-center" id="naslovnica">
        <router-link to="/">
    <img alt="Vue logo" width="100%" src="../assets/images/logo.png">
      </router-link>
        </div>
        <div class="col-1"></div>
        <div class="col-1" v-if="!store.currentUser">
          <router-link class="rl" to="/Login-reg">Prijava/registracija
          </router-link>
      </div>
      <div class="col-1"><a href ="#" @click.prevent="logout()">Logout</a> </div>
      </nav>
    <router-view/>
  </div>
</template>

<script>
import { firebase } from '@/firebase'
import store from '@/store.js'
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.currentUser = user.email
  }
  else {
    store.currentUser = null;
  }
})
export default {
  name: 'Navbar',
  data: function() {
    return {
      store,
    }
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: 'Login/registracija'})
      });
    }

  }
};
</script>

<style>
#naslovnica{
  border-style:solid;
}

.navbar{
box-shadow: 4px 4px 5px rgba(145, 144, 144, 0.747);
border: 1px solid lightgrey;
margin:30px 30px 0px 30px;
}


</style>