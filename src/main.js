import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "bulma/css/bulma.css"
/* import * as firebase from "firebase"; */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


/* TODO
It looks like you're using the development build of the Firebase JS SDK.
When deploying Firebase apps to production, it is advisable to only import
the individual SDK components you intend to use.

For the module builds, these are available in the following manner
(replace <PACKAGE> with the name of a component - i.e. auth, database, etc):

CommonJS Modules:
const firebase = require('firebase/app');
require('firebase/<PACKAGE>');

ES Modules:
import firebase from 'firebase/app';
import 'firebase/<PACKAGE>'; */


Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyDxec4nBEGLZfzv-miHjEWuHqguHnAR7_E",
  authDomain: "fun33-cd381.firebaseapp.com",
  databaseURL: "https://fun33-cd381.firebaseio.com",
  projectId: "fun33-cd381",
  storageBucket: "",
  messagingSenderId: "948711038109",
  appId: "1:948711038109:web:9892d699f287b164814874"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')





