<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const name = route.query.name;
</script>

<template>
  <div class="products">
    <div class="product" v-if="name==='course'">
      <div>
        <img src="https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg" alt="">
      </div>
      <h3>
        "Start your villa rental business" online course
      </h3>
      <div>
        $1,299.00 every week for 12 periods
        <br><br>
        <a href="https://sandbox-portal.secure-payments.app/checkout/chkt_frm_01JACG9QY48J6WYYC9KXNXNE30" target="_blank">Buy Now</a>
      </div>
    </div>
    <div class="product" v-if="name==='ebook'">
      <div>
        <img
            src="https://cdn.thewirecutter.com/wp-content/media/2023/07/ebook-reader-2048px-0105.jpg?auto=webp&quality=75&width=1024"
            alt="">
      </div>
      <h3>
        "Why should you invest in real estate" ebook
      </h3>
      <div>
        $9.99 one-time sale <br><br>
        <a href="https://sandbox-portal.secure-payments.app/checkout/chkt_frm_01JACHCT33METRH4KNRFVP46MW" target="_blank">Buy Now</a>

      </div>
    </div>
    <div class="product" v-if="name==='hat'">
      <div>
        <img
            src="https://cdn.fabletics.com/media/images/products/HT2357108-11610/HT2357108-11610-1_998x1498.jpg?t=1726599780286"
            alt="">
      </div>
      <h3>Hats</h3>
      <div>
        $29.99 one-time sale <br><br>
        <a href="https://sandbox-portal.secure-payments.app/checkout/chkt_frm_01JACGQQ54P4ZR78QHGJHK8FWX" target="_blank">Buy Now</a>

      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #ffffff;
  border: 1px solid;
  padding: 5px 20px;
  text-decoration: none;
  margin: 5px;
}

.products {
  display: flex;
  justify-content: center;
}

.product {
  padding: 20px;
}


</style>
