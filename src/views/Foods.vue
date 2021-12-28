<template>
   <div class="about">
      <Navbar />
      <div class="container mt-4">
         <h2>Daptar menu <strong>makanan</strong></h2>
         <div class="row mt-3">
            <div class="col">
               <div class="input-group flex-nowrap">
                  <input type="text" class="form-control" placeholder="Cari makanan kesukaan mu" aria-label="Cari" aria-describedby="addon-wrapping" v-model="search" @keyup="searchFood" />
                  <span class="input-group-text" id="addon-wrapping"><b-icon-search></b-icon-search></span>
               </div>
            </div>
         </div>
         <div class="row mt-4">
            <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
               <Cardproducts :product="product" />
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Cardproducts from "../components/Cardproducts.vue";
import axios from "axios";
export default {
   name: "Foods",
   components: {
      Navbar,
      Cardproducts,
   },
   data() {
      return {
         products: [],
         search: "",
      };
   },
   methods: {
      setProducts(data) {
         this.products = data;
      },
      searchFood() {
         axios.get("http://localhost:3000/products/?q=" + this.search).then((response) => this.setProducts(response.data));
      },
   },
   mounted() {
      axios
         .get("http://localhost:3000/products")
         .then((response) => this.setProducts(response.data))
         .catch((error) => console.log(error.response.data.errors));
   },
};
</script>
