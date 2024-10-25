<template>
  <h3>Project 8</h3>
  <ul>
    <li>
      Which teammates executed the project?
      <p>Bogdan Litsenberger, Junyong Zeng</p>
    </li>

    <li>
      What made you smile?
      <p>it's great we have this feature of adding a consent check: <a
          href="https://www.rebilly.com/docs/dev-docs/setup-rebilly-instruments-consent-check">https://www.rebilly.com/docs/dev-docs/setup-rebilly-instruments-consent-check</a>
        , which makes it easy to add consent check to the payment flow</p>
    </li>
    <li>
      What did you find confusing? Did you encounter any issues?
      <ul>
        <li>The doc mentions adding `showConsentCheck: ['form']` to enable this feature, which is not right, also need
          the `i18n` option like this
          <pre>
  i18n: {
    en: {
      consentCheck: {
        agreeToTOS: 'I agree to the Terms of Service and the Privacy Policy',
      },
    },
  },
  features: {
    showConsentCheck: ['confirmation'],
  },
        </pre>
        </li>
        <li>just like other examples, I hope there is an example to preview, for example like this one: <a
            href="https://www.rebilly.com/docs/dev-docs/update-rebilly-instruments">https://www.rebilly.com/docs/dev-docs/update-rebilly-instruments</a>
        </li>
      </ul>
    </li>
  </ul>
  <h3>Project 9</h3>
  <ul>
    <li>
      Which teammates executed the project?
      <p>Bogdan Litsenberger, Junyong Zeng</p>
    </li>
    <li>
      What made you smile?
      <p>Great we already have checkout page for merchant to use</p>
    </li>
    <li>
      What did you find confusing? Did you encounter any issues?
      <p>No, we need to create 2 products instead of 1 product, because the `shipping` option is attached to a product,
        not with a plan. So for the physical product with a shipping rate and the virtual product without a shipping
        rate, we have to create 2 products.</p>
    </li>
  </ul>
  <h3>Project 10</h3>
  <ul>
    <li>
      Which teammates executed the project?
      <p>Bogdan Litsenberger, Junyong Zeng</p>
    </li>
    <li>
      What made you smile?
      <p>Glad we have instruments lib to create such a form</p>
    </li>
    <li>
      What did you find confusing? Did you encounter any issues?
      <p> We didn't finish this training exactly (100%) like the example</p>
      <ul>
        <li>the add-on is shown on the confirmation page(the 2nd page), we have no idea how to move it to the form page(the 1st page)</li>
        <li>we don't know how to add a seat(firstname + lastname) for more people</li>
      </ul>
    </li>
  </ul>
  <h3>Project 11</h3>
  <ul>
    <li>
      Which teammates executed the project?
      <p>Bogdan Litsenberger, Junyong Zeng</p>
    </li>
    <li>
      What made you smile?
      <p>It seems this training is similar with project 6, we reused the most of the code in project 6</p>
    </li>
    <li>
      What did you find confusing? Did you encounter any issues?
      <p>Maybe there are 2 bugs: <br>
        <img src="../assets/project-11-bug.png" alt="">
      </p>
    </li>
  </ul>
  <h3>Project 12</h3>
  <ul>
    <li>
      Which teammates executed the project?
      <p>Bogdan Litsenberger, Junyong Zeng</p>
    </li>
    <li>
      What made you smile?
      <p>It seems this training is similar with project 6, we reused the most of the code in project 6</p>
    </li>
    <li>
      What did you find confusing? Did you encounter any issues?
      <p>There was an issue with CAD input field in instruments looking squashed when you clear it and re-enter the amount manually<br>
        <img src="../assets/p12-bug.png" alt="">
      </p>
	  <p>Another issue is when you make a deposit transaction and then update Rebilly Instruments without refreshing the page, it causes an error saying that transaction was already completed. We had to destroy Rebilly Instruments instance and mount it again to allow making multiple deposits without refreshing a page.</p>
    </li>
  </ul>
</template>
<style scoped>
h3, ul {
  text-align: left;
}
</style>

