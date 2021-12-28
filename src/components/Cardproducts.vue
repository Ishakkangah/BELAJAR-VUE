<template>
   <div>
      <div class="card shadow-lg card-product">
         <img :src="'assets/images/' + product.gambar" class="card-img-top gambar" />
         <div class="card-body">
            <h5 class="card-title text-muted">
               <strong>{{ product.name }}</strong>
            </h5>
            <p class="card-text">Harga : Rp. {{ product.harga }}</p>
            <p v-if="product.is_ready">Ready</p>
            <router-link :to="'/Foods/' + product.id" class="btn btn-sm btn-success"><b-icon-cart></b-icon-cart> Order</router-link>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Cardproducts",
   props: ["product"],
};
</script>

<style>
.gambar {
   object-fit: cover;
   object-position: center;
   height: 230px;
}
</style>
