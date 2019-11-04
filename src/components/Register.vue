<template>
  <div>
   <section class="hero is-primary is-fullheight">
  <div class="hero-body">
       <div class="container">
         <div class="columns is-centered">
       <h1 class="title">Register</h1>
      </div>
      <div class="columns is-centered">
         <div class="column is-5-tablet is-4-desktop is-3-widescreen">
        <form novalidate @submit.prevent="submit" class="box">
 <div class="field">
              <label for="" class="label">Name</label>
              <div class="control">
                <input type="name" class="input is-primary" 
                v-model="form.name" autocomplete="name" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input type="email" class="input is-primary" 
                v-model="form.email" autocomplete="email" required autofocus>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" class="input is-primary" 
                v-model="form.password" autocomplete="password" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
              <div class="field">
              <button class="button is-success" type="submit">
                Register
              </button>
             <router-link to="login">or Login</router-link>  
             </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
</template>


<script>
import firebase from "firebase";
import { db } from '../main'

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
           .then(() => {
           let userdata = {
            username: this.form.name,
            email: data.user.email 
            }
        let setDoc = db.collection('users').doc(data.user.email).set(userdata);
        console.log("MF: data.user.displayName: ", data.user.displayName)
        console.log("MF: this.form.name: ", this.form.name)
     }); 
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
}
</script>