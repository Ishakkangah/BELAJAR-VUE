import Vue from 'vue';
import App from "./App.vue";
import router from "./router";
import VueNoty from 'vuejs-noty';
import 'vuejs-noty/dist/vuejs-noty.css';



import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/main.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueNoty);


Vue.config.productionTip = false;

new Vue({
   router,
   render: (h) => h(App),
}).$mount("#app");
