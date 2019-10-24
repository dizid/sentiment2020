<template>
  <div>
   <section class="hero is-primary is-fullheight">
  <div class="hero-body">
    
    <div class="container">
      <div class="columns is-centered">
       <h1 class="title">Login</h1>
      </div>
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="#" @submit.prevent="submit">
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input type="email" class="input is-primary" 
                name="email" autocomplete="email" required 
                v-model="form.email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" class="input is-primary" 
                name="password" autocomplete="password" required 
                v-model="form.password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
              <div class="field">
              <button class="button is-success" type="submit" >
                Login
              </button>
               <router-link to="register">Register</router-link>
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
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.replace({ name: "Dashboard" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>