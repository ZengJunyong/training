<script setup>
import RebillyInstruments from '@rebilly/instruments';

const customerId = "cus_01HMW4HF2QMJZ3EJKEQ7T04TFQ";

(async () => {
  const response = await fetch("https://vercel-fkt1.vercel.app/deposit-request-project-11", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({customerId}),
  });
  const {token, depositRequestId} = await response.json();

  // Mount Rebilly Instruments
  RebillyInstruments.mount({
    apiMode: "sandbox",
    deposit: {
      depositRequestId,
    },
    jwt: token,
    theme: {
      colorPrimary: '#504CCA', // Brand color
      colorText: '#ffffff',
      colorDanger: '#cd5c5c',
      colorBackground: '#201F55', // Website background color
      buttonColorText: '#ffffff',
      fontFamily: 'Trebuchet MS, sans-serif', // Website font family
    },
  });

})();


</script>

<template>
  <h1>Casino deposit page</h1>
  <img src="https://funkytravel.ro/wp-content/uploads/2023/12/casino.jpeg" alt="">
  <div class="container2">
    <div class="form-wrapper">
      <section class="rebilly-instruments-summary"></section>
      <section class="rebilly-instruments"></section>
    </div>
  </div>
</template>

<style scoped>
.container2{
  color: white;
}
</style>
