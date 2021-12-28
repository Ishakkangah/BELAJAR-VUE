<template>
   <div>
      <Navbar />
      <div class="container mt-4">
         <!-- Breadcrumb -->
         <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
               <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
               <li class="breadcrumb-item"><router-link to="/Foods">Foods</router-link></li>
               <li class="breadcrumb-item active">Food Order</li>
            </ol>
         </nav>

         <!-- CARD -->
         <div class="row mt-4">
            <div class="col-sm-6 shadow p-3">
               <div class="card img-fluid">
                  <img :src="'../assets/images/' + Food.gambar" class="img-fluid" />
               </div>
            </div>
            <div class="col-sm-6 shadow p-3">
               <div class="card">
                  <div class="card-body">
                     <div class="mb-3 form-check">
                        <h4>
                           <strong>{{ Food.name }}</strong>
                        </h4>
                     </div>
                     <div class="mb-3 form-check">
                        <label>
                           <span class="form-label"> Harga </span> : <strong>Rp. {{ Food.harga }}.00.-</strong>
                        </label>
                     </div>
                     <!-- FORM -->
                     <form v-on:submit.prevent>
                        <div class="mb-3 form-check">
                           <label for="jumlah_beli" class="form-label small text-muted">Jumlah beli</label>
                           <input type="number" id="jumlah_beli" class="form-control" placeholder="Masukan jumlah pemesanan!" v-model="Pesan.jumlah_pesanan" />
                        </div>
                        <div class="mb-3 form-check">
                           <label for="jumlah_beli" class="form-label small text-muted">Keterangan</label>
                           <textarea class="form-control" placeholder="Masukan saran pemesanan.." id="floatingTextarea2" style="height: 100px" v-model="Pesan.keterangan"></textarea>
                        </div>
                        <div class="mb-3 form-check">
                           <button type="submit" class="btn btn-sm btn-success" @click="pesanan"><b-icon-cart></b-icon-cart>Pesan</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";

export default {
   name: "DetailFood",
   components: {
      Navbar,
   },
   data() {
      return {
         Food: {},
         Pesan: {},
      };
   },
   mounted() {
      axios
         .get("http://localhost:3000/products/" + this.$route.params.id)
         .then((response) => {
            console.log(response.data);
            this.getFood(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   },
   methods: {
      getFood(data) {
         this.Food = data;
      },
      pesanan() {
         this.Pesan.products = this.Food;
         if (this.Pesan.jumlah_pesanan) {
            axios
               .post("http://localhost:3000/keranjangs", this.Pesan)
               .then(() => {
                  this.$noty.success("Pemesanan anda telah dimasukan ke keranjang", {
                     timeout: 2000,
                  });
                  this.$router.push({
                     // name: 'Keranjang'
                     path: "/Keranjang",
                  });
               })
               .catch((error) => console.log(error));
         } else {
            this.$noty.error("Jumlah pesanan harus di isi!", {
               timeout: 2000,
            });
         }
      },
   },
};
</script>
