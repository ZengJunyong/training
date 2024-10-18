<script setup>
</script>

<template>
  <div id="app">
    <div class="products">
      <div class="product">
        <div>
          <img class="img" src="https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg" alt="">
        </div>
        <h3>
          "Start your villa rental business" online course
        </h3>
        <div>
          $1,299.00 every week for 12 periods
          <br><br>
          <RouterLink :to="{ path: '/project9-product-page', query: { name: 'course' }}">Details</RouterLink>
        </div>
      </div>
      <div class="product">
        <div>
          <img class="img"
              src="https://cdn.thewirecutter.com/wp-content/media/2023/07/ebook-reader-2048px-0105.jpg?auto=webp&quality=75&width=1024"
              alt="">
        </div>
        <h3>
          "Why should you invest in real estate" ebook
        </h3>
        <div>
          $9.99 one-time sale <br><br>
          <RouterLink :to="{ path: '/project9-product-page', query: { name: 'ebook' }}">Details</RouterLink>
        </div>
      </div>
      <div class="product">
        <div>
          <img class="img"
              src="https://cdn.fabletics.com/media/images/products/HT2357108-11610/HT2357108-11610-1_998x1498.jpg?t=1726599780286"
              alt="">
        </div>
        <h3>Hats</h3>
        <div>
          $29.99 one-time sale <br><br>
          <RouterLink :to="{ path: '/project9-product-page', query: { name: 'hat' }}">Details</RouterLink>
        </div>
      </div>

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

.products {
  display: flex;
  justify-content: center;
}

.product {
  padding: 20px;
}

.img {
  width: 300px;
  height: 200px;
}
</style>
