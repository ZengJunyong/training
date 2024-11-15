<script setup>
import RebillyInstruments from '@rebilly/instruments';

const customerId = "test-customer";

(async () => {
  const response = await fetch("https://vercel-fkt1.vercel.app/deposit-usd", {
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
      colorPrimary: '#5f8667', // Brand color
      colorText: '#fff',
      colorDanger: '#cd5c5c',
      colorBackground: '#484343', // Website background color
      buttonColorText: '#ffffff',
      fontFamily: 'Trebuchet MS, sans-serif', // Website font family
    },
  });


})();

async function swtichToUSD() {
  const response = await fetch("https://vercel-fkt1.vercel.app/deposit-usd", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({customerId}),
  });
  const {token, depositRequestId} = await response.json();

  RebillyInstruments.update({
    deposit: {
      depositRequestId,
    },
    jwt: token,
  });
}

async function swtichToCAD() {
  RebillyInstruments.destroy();
  const response = await fetch("https://vercel-fkt1.vercel.app/deposit-cad", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({customerId}),
  });
  const {token, depositRequestId} = await response.json();

  RebillyInstruments.mount({
    apiMode: "sandbox",
    deposit: {
      depositRequestId,
    },
    jwt: token,
    theme: {
      colorPrimary: '#5f8667', // Brand color
      colorText: '#fff',
      colorDanger: '#cd5c5c',
      colorBackground: '#484343', // Website background color
      buttonColorText: '#ffffff',
      fontFamily: 'Trebuchet MS, sans-serif', // Website font family
    },
  });
}

</script>

<template>
  <h1>Casino deposit page with strategies (USD and CAD)</h1>
  <img src="/src/assets/logo.jfif" alt="">
  <div style="padding: 40px 0 20px 0">
    <button style="margin-right: 20px;" @click="swtichToUSD()">USD</button>
    <button @click="swtichToCAD()">CAD</button>
  </div>
  <div class="container2">
    <div class="form-wrapper">
      <section class="rebilly-instruments-summary"></section>
      <section class="rebilly-instruments"></section>
    </div>
  </div>
</template>
