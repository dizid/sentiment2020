<template>
    <section class="hero is-primary is-fullheight">
  <div class="hero-body">
  <div class="container">
      <div class="columns is-centered">
      <h1 class="title">Login</h1>
      </div>
      <div class="columns is-centered">
      
          <section id="firebaseui-auth-container"></section>
        
 </div>
    </div> <!-- END container -->
  </div>
</section>
  
</template>

<script>
import firebase from 'firebase/app' // TODO needed here? already imported in main.js
import 'firebase/auth'
import * as firebaseui from 'firebaseui'
import "firebaseui/dist/firebaseui.css"

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
/*   methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.replace({ name: "Dashboard" })
        })
        .catch(err => {
          this.error = err.message
        });
    }, // END login with email + pw */
    
mounted() {
      /*   let ui = firebaseui.auth.AuthUI.getInstance();
            if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        } */
         var uiConfig = {
            signInSuccessUrl: "/dashboard",
            signInOptions: [firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]        }
if(firebaseui.auth.AuthUI.getInstance()) {
      const ui = firebaseui.auth.AuthUI.getInstance()
      ui.start('#firebaseui-auth-container', uiConfig)
    } else {
      const ui = new firebaseui.auth.AuthUI(firebase.auth())
      ui.start('#firebaseui-auth-container', uiConfig)
    }
     // ui.start("#firebaseui-auth-container", uiConfig);
    }
  }

</script>