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
</template>
<style scoped>
h3, ul {
  text-align: left;
}
</style>

