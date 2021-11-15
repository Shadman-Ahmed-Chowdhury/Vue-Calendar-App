import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;
firebase.initializeApp({
  apiKey: "AIzaSyC3nZpXHxMNxzbtROLYDReHUzb5c99qswI",
  authDomain: "social-site-with-vue.firebaseapp.com",
  databaseURL: "https://social-site-with-vue-default-rtdb.firebaseio.com",
  projectId: "social-site-with-vue",
  storageBucket: "social-site-with-vue.appspot.com",
  messagingSenderId: "554926265787",
  appId: "1:554926265787:web:4efd90cbd842cec234e09e",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
