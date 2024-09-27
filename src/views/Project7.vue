<script setup>
import RebillyInstruments from '@rebilly/instruments';
import {ref} from "vue";

const customerId = "cus_01HMW4HF2QMJZ3EJKEQ7T04TFQ";
const invoices = ref();
(async () => {
  const response = await fetch("https://vercel-ten-snowy-57.vercel.app/invoices", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    // body: JSON.stringify({ customerId }),
  });
  const { items } = await response.json();
  invoices.value = items;
  console.log(items);
})();

function pay(invoice){
  console.log(invoice.paymentFormUrl);
  window.open(invoice.paymentFormUrl, "_blank");  // Opens the URL in a new tab
}

</script>

<template>
  <h1>Invoices training</h1>
  <table>
    <tr v-for="invoice in invoices">
      <td> {{invoice.fields.issuedTime}}</td>
      <td> {{invoice.fields.status}}</td>
      <td> {{invoice.fields.amountDue}}</td>
      <td>
        <template v-if="invoice.fields.status === 'unpaid'">
          <button @click="pay(invoice.fields)">Pay</button>
        </template>
      </td>
    </tr>
  </table>
</template>

<style scoped>

</style>
