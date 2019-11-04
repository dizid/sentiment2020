<template>
  <div>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item is-tab"><img alt="Marc logo" src="../assets/mf.icon.png" /></router-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
          @click="isOpen = !isOpen" v-bind:class="{ 'is-active': isOpen }">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" v-bind:class="{ 'is-active': isOpen }">
        <div class="navbar-end">
          <router-link to="/" class="navbar-item is-tab">Home</router-link>

 <template v-if="user.loggedIn">
 <p @click="signOut" class="navbar-item is-tab">Logout</p>
          <router-link to="/dashboard" class="navbar-item is-tab">Dashboard</router-link>
          <router-link to="/chartcontainer" class="navbar-item is-tab">Chart</router-link>
         </template>
          <template v-else>
         <router-link to="/login"  class="navbar-item is-tab">Login</router-link>  
                     </template>
          <router-link to="/about" class="navbar-item is-tab">About</router-link>
          <router-link to="/test" class="navbar-item is-tab">Test</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data: function() {
    return {
      isOpen: false
          }
  },
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
   methods: {
    signOut() {firebase.auth().signOut().then(() => {
          this.$router.replace({name: "home"
          })
        })
    }
  },
}
</script>
