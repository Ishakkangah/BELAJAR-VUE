<template>
   <div>
      <Navbar />
      <div class="container mt-4">
         <!-- Breadcrumb -->
         <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
               <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
               <li class="breadcrumb-item"><router-link to="/Foods">Foods</router-link></li>
               <li class="breadcrumb-item active">Keranjangs</li>
            </ol>
         </nav>

         <!-- TABLE KERANJANG -->
         <div v-if="Keranjangs.length">
            <div class="row mt-5">
               <div class="table-responsive">
                  <table class="table table-borderless">
                     <thead>
                        <tr class="text-center">
                           <th scope="col">#</th>
                           <th scope="col">Gambar</th>
                           <th scope="col">Nama</th>
                           <th scope="col">Keterangan</th>
                           <th scope="col">Jumlah pesanan</th>
                           <th scope="col">Harga</th>
                           <th scope="col">Total Harga</th>
                           <th scope="col">Batalkan</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr class="text-center" v-for="(keranjang, index) in Keranjangs" :key="keranjang.id">
                           <th>{{ index + 1 }}</th>
                           <td><img :src="'../assets/images/' + keranjang.products.gambar" class="img-fluid shadow-lg gambarkeranjang" /></td>
                           <td>{{ keranjang.products.name }}</td>
                           <td>{{ keranjang.keterangan ? keranjang.keterangan : "-" }}</td>
                           <td>{{ keranjang.jumlah_pesanan }}</td>
                           <td>
                              <strong>Rp.{{ keranjang.products.harga }}</strong>
                           </td>
                           <td>
                              <strong>Rp.{{ keranjang.jumlah_pesanan * keranjang.products.harga }}</strong>
                           </td>
                           <td>
                              <a href="" @click.prevent="hapusPesanan(keranjang.id)" class="text-danger fw-bold"
                                 ><Strong><b-icon-trash></b-icon-trash></Strong
                              ></a>
                           </td>
                        </tr>
                        <tr class="text-center">
                           <td colspan="5"></td>
                           <td><strong>Total harga</strong></td>
                           <td>
                              <strong>Rp.{{ totalHarga }}</strong>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
            <!-- CHECKOUT -->
            <div class="row d-flex justify-content-end my-5">
               <div class="col-md-4">
                  <div class="card-body">
                     <form v-on:submit.prevent>
                        <div class="mb-3 form-check">
                           <label for="jumlah_beli" class="form-label">Nama :</label>
                           <input type="text" id="jumlah_beli" class="form-control" placeholder="Name pemesan" v-model="pesan.nama" />
                        </div>
                        <div class="mb-3 form-check">
                           <label for="jumlah_beli" class="form-label">Nomor meja :</label>
                           <input type="number" id="jumlah_beli" class="form-control" placeholder="Nomor meja" v-model="pesan.meja" />
                        </div>
                        <div class="mb-3 form-check">
                           <button type="submit" class="btn btn-sm btn-success float-right" @click="checkout"><b-icon-cart></b-icon-cart>Pesan</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <div v-else>
            <div class="row text-center d-none d-md-block">
               <div class="card-body">
                  <div class="col">
                     <img src="../assets/images/404.png" class="card-fluid" width="400" />
                     <h2><strong>NOT FOUND 404</strong></h2>
                     <h4>Belum ada pemesanan anda!</h4>
                  </div>
               </div>
            </div>
            <div class="row text-center d-sm-block d-md-none">
               <div class="card-body">
                  <div class="col">
                     <img src="../assets/images/404.png" class="card-fluid" width="170" />
                     <p><strong>NOT FOUND 404</strong></p>
                     <p>Belum ada pemesanan anda!</p>
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
   components: {
      Navbar,
   },
   name: "Keranjang",
   data() {
      return {
         Keranjangs: [],
         pesan: {},
         error: [],
      };
   },
   mounted() {
      axios.get("http://localhost:3000/keranjangs").then((response) => {
         console.log("List of keranjangs");
         this.setKeranjangs(response.data);
      });
   },
   methods: {
      setKeranjangs(data) {
         this.Keranjangs = data;
      },
      hapusPesanan(id) {
         const swalWithBootstrapButtons = this.$swal.mixin({
            customClass: {
               confirmButton: "btn btn-success",
               cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
         });

         swalWithBootstrapButtons
            .fire({
               title: "Yakin?",
               text: "Akan akan menghapus menu ini!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonText: "Yes, delete it!",
               cancelButtonText: "No, cancel!",
               reverseButtons: true,
            })
            .then((result) => {
               if (result.isConfirmed) {
                  axios.delete("http://localhost:3000/keranjangs/" + id).then(() => {
                     this.$router.push({
                        path: "/Foods",
                     });
                  });
                  swalWithBootstrapButtons.fire("Deleted!", "Your file has been deleted.", "success");
                  this.$noty.success("Menu berhasil dihapus", {
                     timout: 5000,
                  });
               } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === this.$swal.DismissReason.cancel
               ) {
                  swalWithBootstrapButtons.fire("Cancelled", "Hapus dibatalkan :)", "error");
               }
            });
      },
      checkout() {
         this.pesan.keranjangs = this.Keranjangs;
         if (this.pesan.nama && this.pesan.meja) {
            axios.post("http://localhost:3000/pesanans", this.pesan).then(() => {
               const Toast = this.$swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                     toast.addEventListener("mouseenter", this.$swal.stopTimer);
                     toast.addEventListener("mouseleave", this.$swal.resumeTimer);
                  },
               });

               Toast.fire({
                  icon: "success",
                  title: "Pesanan anda sedang di proses, silahkan tunggu!",
               });
               this.$router.push({
                  path: "/PesananSukses",
               });
            });
            // HAPUS KERANJANG
            this.Keranjangs.map(function (items) {
               return axios.delete("http://localhost:3000/keranjangs/" + items.id).catch((error) => console.log(error));
            });
         } else {
            this.$swal.fire({
               icon: "error",
               title: "Oops...",
               text: "Pesanan anda gagal, coba isi column name & meja!",
            });
         }
      },
   },
   computed: {
      totalHarga() {
         return this.Keranjangs.reduce(function (items, data) {
            return items + data.products.harga * data.jumlah_pesanan;
         }, 0);
      },
   },
};
</script>
