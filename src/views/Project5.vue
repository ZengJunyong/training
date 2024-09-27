<script setup>
import RebillyInstruments from '@rebilly/instruments';
import {ref} from "vue";

const price = ref();
const show = ref(false);

function pay() {
  show.value = true;
  // One time
  RebillyInstruments.mount({
    publishableKey: 'pk_sandbox_qB59oAh9XShdwFBwIr9xEfUFgAhsnDkvCgA8M5_',
    organizationId: 'phronesis---summitvilla',
    websiteId: 'google.com',
    apiMode: 'sandbox',
    money: {
      amount: price.value,
      currency: 'USD',
    },
  });

  // Monthly
  // RebillyInstruments.mount({
  //   publishableKey: 'pk_sandbox_qB59oAh9XShdwFBwIr9xEfUFgAhsnDkvCgA8M5_',
  //   organizationId: 'phronesis---summitvilla',
  //   websiteId: 'google.com',
  //   apiMode: 'sandbox',
  //   items: [
  //     {
  //       planId: 'monthly',
  //       quantity: 1,
  //       thumbnail: 'https://www.example.com/image.png', // this property is optional
  //     },
  //   ],
  // });
}

</script>

<template>
  <h1>Support our developer</h1>
  <div>
    <button>Monthly</button>
    <button>OneTime</button>
  </div>
  <div>
    $<input type="text" v-model.number="price">
  </div>
  <div>
    <button @click="pay">❤️Dedicate this gift</button>
  </div>
  <hr>
  <div v-show="show" id="app">
    <div class="form-wrapper">
      <section class="rebilly-instruments-summary"></section>
      <section class="rebilly-instruments"></section>
    </div>
  </div>
</template>

<style scoped>

</style>
