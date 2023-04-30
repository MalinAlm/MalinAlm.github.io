<script>
  export default {
    data() {
      return { searchText: null }
    },
    watch: {
      searchText(old, newValue) {
        console.log(old + ' ' + newValue)
      }
    }
  }
</script>

<template>
  <img id="homepagePic" src="../../public/fashion-pic.jpg" alt="" />
  <h1 id="categoriesHeading">Check out our products below</h1>
  <!-- <div id="writeSomething">
    <p>Write something, and have a look in the console.</p>
    <input v-model="searchText" />
  </div> -->

  <div id="categoryContainer">
    <RouterLink to="/category/jewelery?">
      <img src="/assets/jewelry.jpg" alt="Jewelry" />
      <h1>Jewelry</h1>
    </RouterLink>
    <RouterLink to="/category/men's clothing">
      <img src="/assets/kläder.jpg" alt="Men Clothing" />
      <h1>Men's clothing</h1>
    </RouterLink>
    <RouterLink to="/category/women's clothing">
      <img src="/assets/kläder2.jpg" alt="Women Clothing" />
      <h1>Women's clothing</h1>
    </RouterLink>
    <RouterLink to="/category/electronics">
      <img src="/assets/elektronik2.jpg" alt="Electronics" />
      <h1>Electronics</h1>
    </RouterLink>
  </div>
  <!-- <img src="/assets/kläder2.jpg" alt="Women Clothing" />
  <img src="/assets/elektronik2.jpg" alt="Electronics" /> -->
</template>

<style scoped>
  #categoryContainer {
    display: flex;
    justify-content: space-evenly;
    margin-top: 7rem;
  }
  img {
    border-radius: 7%;
  }
  #writeSomething {
    display: flex;
    justify-content: center;
    margin-top: 7rem;
  }
  h1 {
    margin-top: 2rem;
    /* text-align: center; */
    color: rgb(45, 45, 45);
    font-size: 20px;
  }
  a {
    text-decoration: none;
  }
  #categoriesHeading {
    margin-top: 4rem;
    font-size: 25px;
    text-transform: none;
  }
  #homepagePic {
    width: 100%;
    height: auto;
    border-radius: 0%;
  }
</style>
