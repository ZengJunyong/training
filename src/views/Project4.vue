<script setup>
import {onMounted} from "vue";
import RebillyInstruments from '@rebilly/instruments';

onMounted(function () {
  // Mount Rebilly Instruments
  RebillyInstruments.mount({
    publishableKey: 'pk_sandbox_qB59oAh9XShdwFBwIr9xEfUFgAhsnDkvCgA8M5_',
    organizationId: 'phronesis---summitvilla',
    websiteId: 'google.com',
    apiMode: 'sandbox',
    items: [
      {
        planId: 'premium-membership-plan-monthly',
        quantity: 1
      },
    ],
    paymentInstruments: {
      address: {
        show: ['email', 'phoneNumber', 'address', 'city', 'country'],
        require: ['email', 'phoneNumber', 'address', 'city', 'country'], // ❓email and phoneNumber are required but they are optional?
      }
    },
    theme: {
      colorPrimary: '#504CCA', // Brand color
      colorText: '#ffffff',
      colorDanger: '#cd5c5c',
      colorBackground: '#201F55', // Website background color
      buttonColorText: '#ffffff',
      fontFamily: 'Trebuchet MS, sans-serif', // Website font family
    },
    addons: [
      {
        planId: 'personalized-travel-plan',
        quantity: 1,
      },
    ],
    bumpOffer: [
      {
        planId: 'platinum-membership-monthly',
        quantity: 1,
      },
    ],
    features: {
      hideConfirmation: true,
      hideResult: true,
    },

  });

  const appState = {
    planChanged: false,
  };

  const updatePlanButton = document.querySelector("#update-locale");

  updatePlanButton.addEventListener("click", updatePlan);

  async function updatePlan(e) {
    e.preventDefault();
    e.target.disabled = true;

    appState.planChanged = !appState.planChanged;

    const updatedPlan = appState.planChanged ? [
      {
        planId: 'premium-membership-yearly',
        quantity: 1
      },
    ] : [
      {
        planId: 'premium-membership-plan-monthly',
        quantity: 1
      },
    ];


    updatePlanButton.textContent = appState.planChanged ? 'Switch to yearly' : 'Switch to monthly';
    const newConfig = {
      items: updatedPlan,
      bumpOffer: appState.planChanged ? [
        {
          planId: 'platinum-membership-yearly',
          quantity: 1,
        },
      ] : [
        {
          planId: 'platinum-membership-monthly',
          quantity: 1,
        },
      ]
    };
    try {
      await RebillyInstruments.update(newConfig);
    } catch (error) {
      console.log('Error updating instruments: ', error);
    } finally {
      e.target.disabled = false;
    }
  }

// Optional
  RebillyInstruments.on('instrument-ready', (instrument) => {
    const {billingAddress, _raw} = instrument;
    const form = document.querySelector('.rebilly-instruments');
    form.innerHTML = `
    <h1 class="rebilly-instruments-h1">Thanks, ${billingAddress.firstName} ${billingAddress.lastName} please confirm your purchase</h1>
    <h2 class="rebilly-instruments-h2">${_raw.paymentInstrument?.type || ' '} ${_raw.paymentInstrument.brand} ****** ${_raw.paymentInstrument?.last4}</h2>
    <input type="checkbox" id="termsAndConditions" name="termsAndConditions" value="termsAndConditions">
    <label for="termsAndConditions">terms and conditions</label><br>
    <button id="confirm">Confirm</button>
  `;

    const confirm = document.querySelector('#confirm');
    confirm.addEventListener('click', makePurchase);

    function checkSelection() {
      const termsAndConditions = document.getElementById("termsAndConditions");
      if (termsAndConditions.checked) {
        return true;
      }
      return false;
    }

    async function makePurchase() {
      if (checkSelection()) {
        try {
          confirm.disabled = true;
          confirm.innerText = 'Loading...';
          await RebillyInstruments.purchase(instrument);
        } catch (err) {
          console.log(err)
        } finally {
          confirm.disabled = false;
          confirm.innerText = 'Confirm';
        }
      }
    }
  });

  RebillyInstruments.on('purchase-completed', (result) => {
    const {billingAddress, result: transactionResult} = result.transaction;
    const form = document.querySelector('.rebilly-instruments');
    if (transactionResult === 'approved') {
      form.innerHTML = `
    <h1 class="rebilly-instruments-h1">${billingAddress.firstName} ${billingAddress.lastName} thanks for your purchase</h1>
    <h2 class="rebilly-instruments-h2">👍 Approved</h2>
  `;
    } else {
      form.innerHTML = `
    <h1 class="rebilly-instruments-h1">Oops something went wrong</h1>
    <h2 class="rebilly-instruments-h2">😞 Transaction was ${transactionResult}</h2>
  `;
    }
  });

// we can't see the add-on
// the javascript example doesn't show all the code.
})


</script>
<template>
  <div id="app">
    <br>
    <button id="update-locale">Switch to yearly</button>
    <div class="form-wrapper">
      <section class="rebilly-instruments-summary"></section>
      <section class="rebilly-instruments"></section>
    </div>
  </div>
</template>

<style>
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
