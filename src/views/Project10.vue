<script setup>
import {onMounted} from "vue";
import RebillyInstruments from '@rebilly/instruments';

onMounted(function (){
  RebillyInstruments.mount({
    publishableKey: 'pk_sandbox_qB59oAh9XShdwFBwIr9xEfUFgAhsnDkvCgA8M5_',
    organizationId: 'phronesis---summitvilla',
    websiteId: 'google.com',
    apiMode: 'sandbox',
    items: [
      {
        planId: 'funnel-hacking-live-fhl10',
        quantity: 1
      },
    ],
    addons: [
      {
        planId: 'funnel-hacking-live-replays',
        quantity: 1,
      },
    ],
    theme: {
      colorPrimary: '#504CCA', // Brand color
      colorText: '#ffffff',
      colorDanger: '#cd5c5c',
      colorBackground: '#201F55', // Website background color
      buttonColorText: '#ffffff',
      fontFamily: 'Trebuchet MS, sans-serif', // Website font family
    },
  });
// Optional
  RebillyInstruments.on('instrument-ready', (instrument) => {
    console.info('instrument-ready', instrument);
  });
  RebillyInstruments.on('purchase-completed', (purchase) => {
    console.info('purchase-completed', purchase);
  });
});

</script>

<template>
  <div id="app">
    <h1>“Save Your Seat For
      THE LAST DANCE OF
      funnel hacking live 10
      In Las Vegas, Nevada!”</h1>
    <p>If You Want To UNLEASH Your Full Potential So You Can Finally Have The Life, Business, And Relationship Of Your Dreams, Then Don’t Wait…
      Secure Your Ticket For Funnel Hacking LIVE 10 And Come See Tony Robbins LIVE!</p>
    <div class="form-wrapper">
      <section class="rebilly-instruments-summary"></section>
      <section class="rebilly-instruments"></section>
    </div>
  </div>
</template>

<style >
body,
html {
  background: #201f55;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Trebuchet MS,
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

#app a {
  color: #ffffff;
}

.form-wrapper {
  max-width: 700px;
  box-sizing: border-box;
  padding: 40px 0;
  margin: 0 auto;
}

.form-wrapper section {
  background: transparent;
  box-sizing: border-box;
  padding: 40px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.form-wrapper section + section {
  margin-top: 20px;
}
</style>
