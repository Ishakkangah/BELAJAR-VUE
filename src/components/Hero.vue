<template>
   <div>
      <div class="hero">
         <!-- DESKTOP -->
         <div class="d-none d-md-block">
            <div class="row mt-4">
               <div class="col-md-6">
                  <div class="d-flex h-100">
                     <div class="justify-content-center align-self-center">
                        <h2>
                           <Strong>Cobain menu lezatnya,</Strong> <br />
                           dari kita
                        </h2>
                        <p class="text-muted">Anda bisa memilih selerah anda!</p>
                        <router-link :to="{ name: 'Foods' }" class="btn btn-success"><b-icon-arrow-right></b-icon-arrow-right> Pesan</router-link>
                     </div>
                  </div>
               </div>
               <div class="col-md-6">
                  <img src="../assets/images/hero.png" width="100%" />
               </div>
            </div>
         </div>

         <!-- MOBILE -->
         <div class="d-sm-block d-md-none">
            <div class="row mt-4">
               <div class="col-md-6 mb-3">
                  <img src="../assets/images/hero.png" width="100%" />
               </div>
               <div class="col-md-6">
                  <div class="d-flex h-100">
                     <div class="justify-content-center align-self-center">
                        <h2>
                           <Strong>Cobain menu lezatnya,</Strong> <br />
                           dari kita
                        </h2>
                        <p class="text-muted">Anda bisa memilih selerah andaa!</p>
                        <router-link :to="{ name: 'Foods' }" class="btn btn-sm btn-success"><b-icon-arrow-right></b-icon-arrow-right> Pesan</router-link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Hero",
};
</script>
