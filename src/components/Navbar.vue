<template>
   <b-navbar toggleable="lg" type="light">
      <div class="container">
         <a class="navbar-brand" href="#"><strong> E-ishaq</strong></a>

         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

         <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                     <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
                  </li>
                  <li class="nav-item">
                     <router-link class="nav-link" :to="{ name: 'Foods' }">Foods</router-link>
                  </li>
               </ul>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
               <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'Keranjang' }">
                     Keranjang
                     <b-icon-bag></b-icon-bag>
                     <span class="badge badge-danger ml-2" v-if="jumlah_pesanan.length > 0">{{ jumlah_pesanan.length }}</span>
                  </router-link>
               </li>
            </ul>
         </b-collapse>
      </div>
   </b-navbar>
</template>

<script>
import axios from "axios";
export default {
   name: "Navbar",
   data() {
      return {
         jumlah_pesanan: {},
      };
   },
   methods: {
      setJumlahPesanan(data) {
         this.jumlah_pesanan = data;
      },
   },
   mounted() {
      axios.get("http://localhost:3000/keranjangs").then((response) => {
         console.log("list of the keranjang");
         this.setJumlahPesanan(response.data);
      });
   },
};
</script>

<style></style>
