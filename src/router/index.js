import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Foods from "../views/Foods.vue";
import Keranjang from "../views/Keranjang.vue";
import DetailFood from "../views/DetailFood.vue";
import PesananSukses from "../views/PesananSukses.vue";

Vue.use(VueRouter);

const routes = [
   {
      name: "Home",
      path: "/",
      component: Home,
   },
   {
      name: "Foods",
      path: "/Foods",
      component: Foods,
   },
   {
      name: 'DetailFood',
      path: '/Foods/:id',
      component: DetailFood,
   },
   {
      name: "Keranjang",
      path: "/Keranjang",
      component: Keranjang,
   },
   {
      name: "KeranjangSukses",
      path: "/PesananSukses",
      component: PesananSukses,
   },
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes,
});

export default router;
