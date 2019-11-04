import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "bulma/css/bulma.css"
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import "firebase/analytics"
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyASm_Oyxmo7bhtdeM6UZkNLRto2HP0tpj4",
  authDomain: "fun33-cd381.firebaseapp.com",
  databaseURL: "https://fun33-cd381.firebaseio.com",
  projectId: "fun33-cd381",
  storageBucket: "",
  messagingSenderId: "948711038109",
  appId: "1:948711038109:web:9892d699f287b164814874"
}

firebase.initializeApp(configOptions)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user)
})

export const db = firebase.firestore()  // Used in Chartcontainer.

router.beforeEach((to, from, next) => {
  if(!to.meta.requiresAuth) { //route is public, don't check for authentication
      next()
  } else {  //route is protected, if authenticated, proceed. Else, login
      firebase.auth().onAuthStateChanged((user) => {
          if(user) {next()} else {router.push('/login')}
      })
  }
})
new Vue({router, store, render: h => h(App)}).$mount('#app')





