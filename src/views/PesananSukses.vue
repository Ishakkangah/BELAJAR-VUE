<template>
   <div>
      <Navbar />
      <div class="container">
         <div class="d-none d-md-block">
            <div class="row d-flex justify-content-center mt-4">
               <div class="col text-center">
                  <img src="../assets/images/success.png" class="img=fluid" width="400px" />
                  <h2><Strong>Success</Strong></h2>
                  <h4>Pesanan anda sedang kami proses</h4>
               </div>
            </div>
         </div>
         <div class="d-sm-block d-md-none">
            <div class="row d-flex justify-content-center mt-4">
               <div class="col text-center">
                  <img src="../assets/images/success.png" class="img=fluid" width="200px" />
                  <h2><Strong>Success</Strong></h2>
                  <h4>Pesanan anda sedang kami proses</h4>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
   name: "PesananSukses",
   components: {
      Navbar,
   },
};
</script>
