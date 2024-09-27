<script setup>
import RebillyInstruments from '@rebilly/instruments';

const customerId = "cus_01HMW4HF2QMJZ3EJKEQ7T04TFQ";

(async () => {
  const response = await fetch("https://vercel-ten-snowy-57.vercel.app/deposit-request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ customerId }),
  });
  const { token, depositRequestId } = await response.json();

  // Mount Rebilly Instruments
  RebillyInstruments.mount({
    apiMode: "sandbox",
    deposit: {
      depositRequestId,
    },
    jwt: token,
  });

})();


</script>

<template>
  <h1>Deposit training</h1>
  <hr>
  <div id="app">
    <div class="form-wrapper">
      <section class="rebilly-instruments-summary"></section>
      <section class="rebilly-instruments"></section>
    </div>
  </div>
</template>

<style scoped>

</style>
