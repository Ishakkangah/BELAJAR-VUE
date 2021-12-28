<template>
   <div class="home">
      <Navbar />
      <div class="container">
         <Hero />
         <div class="row mt-5">
            <div class="col">
               <h2>Best <strong>Foods</strong></h2>
            </div>
            <div class="col">
               <router-link :to="{ name: 'Foods' }" class="btn btn-sm btn-success float-right"><b-icon-eye></b-icon-eye> Lihat semua</router-link>
            </div>
         </div>
         <div class="row mb-3 d-flex justify-content-center">
            <div class="col-md-4 mt-3 mb-4" v-for="product in products" :key="product.id">
               <cardproducts :product="product" />
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Cardproducts from "../components/Cardproducts.vue";
import axios from "axios";
export default {
   name: "Home",
   components: {
      Navbar,
      Hero,
      Cardproducts,
   },
   data() {
      return {
         products: [],
      };
   },
   mounted() {
      this.getProducts();
   },
   methods: {
      getProducts() {
         axios
            .get("http://localhost:3000/best-products")
            .then((response) => {
               console.log(response);
               this.products = response.data;
            })
            .catch((error) => console.log(error));
      },
   },
};
</script>
