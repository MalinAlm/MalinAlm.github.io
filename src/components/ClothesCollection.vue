<script>
  import axios from 'axios'

  export default {
    created() {
      axios.get('https://fakestoreapi.com/products').then((response) => {
        this.products = response.data
        console.log(response.data)
      })
    },

    data() {
      return {
        products: null
      }
    },
    methods: {
      onClickPlus() {
        this.countUpButton = this.countUpButton + 1
      }
    }
  }
</script>

<template>
  <ul class="gridLayoutContainer">
    <li :key="product.id" v-for="product in products">
      <!--
        MED BOOTSTRAP CARD
      https://getbootstrap.com/docs/4.6/components/card/ -->
      <div
        class="card"
        style="
          width: 15em;
          min-height: 30rem;
          padding-top: 2rem;
          padding-left: 1rem;
          padding-right: 1rem;
          border-radius: 0%;
        "
      >
        <img
          :src="product.image"
          class="card-img-top"
          alt=""
          style="border-radius: 7%"
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">
            $ {{ product.price }}, Product id: {{ product.id }}
          </p>
          <input
            type="button"
            value="Add to cart"
            @click="$store.commit('addToCart', product)"
          />
        </div>
      </div>
    </li>
  </ul>
</template>

<style>
  .gridLayoutContainer {
    display: grid;
    grid-template-columns: auto auto auto auto;
    margin-top: 6rem;
    justify-content: space-around;
  }
  body {
    font-family: sans-serif;
  }
  ul {
    list-style-type: none;
    text-align: center;
  }
  img {
    height: 15rem;
  }
  .card-text {
    margin-left: 0;
  }
</style>
