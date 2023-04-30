<script>
  import TheLogoPage from './components/TheLogoPage.vue'

  export default {
    components: {
      TheLogoPage
    }
  }
</script>

<template>
  <nav>
    <div>
      <!-- <TheLogoPage shop="Lorem ipsum Bazar" /> -->

      <ul id="listContainer">
        <li>
          <RouterLink to="/">
            <TheLogoPage shop="Lorem ipsum Bazar"
          /></RouterLink>
        </li>
        <li class="navOptions">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="navOptions">
          <RouterLink to="/shop">Shop</RouterLink>
        </li>
        <li class="navOptions">
          <RouterLink to="/newsLetter">Newsletter</RouterLink>
        </li>
        <li class="navOptions">
          <RouterLink to="/cart">Cart</RouterLink>
        </li>
      </ul>
    </div>
  </nav>

  <main><RouterView /></main>
</template>

<style lang="scss">
  $darkg: #2a2e32;
  $lightg: #f8f9fa;

  nav {
    background-color: $darkg;
    color: $lightg;
    // margin-bottom: 10rem;
  }
  nav ul li a {
    color: $lightg;
    text-decoration: none;
  }
  #listContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 0.5rem;
    margin-right: 29rem;
    // padding-bottom: 0.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  h1 {
    font-size: 25px;
    text-transform: capitalize;
    text-align: center;
  }
  .navOptions {
    padding-top: 0.3rem;
    text-transform: uppercase;
    font-size: small;
  }
</style>
