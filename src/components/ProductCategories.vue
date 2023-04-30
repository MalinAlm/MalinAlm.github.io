<script>
  import axios from 'axios'

  export default {
    created() {
      axios
        .get(
          'https://fakestoreapi.com/products/category/' +
            this.$route.params.anyCategory
        )
        .then((response) => {
          this.products = response.data
          console.log(response.data)
        })
    },
    data() {
      return {
        products: null,
        showMore: false
      }
    },
    methods: {
      revealShowMore() {
        this.showMore = !this.showMore
      }
    }
  }
</script>

<template>
  <h1>{{ $route.params.anyCategory }}</h1>
  <div class="container">
    <ul>
      <li id="categoryProducts" :key="product.id" v-for="product in products">
        <img alt="" :src="product.image" />
        <p class="productTitle">{{ product.title }}</p>
        <p>Price: {{ product.price }} $</p>
        <div v-if="showMore">
          Description:
          {{ product.description }} What did others think about this product?
          {{ product.rating.count }} people rated this product
          {{ product.rating.rate }} /5
        </div>
        <button @click="revealShowMore()">
          Show {{ showMore ? 'less' : 'more' }}
        </button>
        <button @click="$store.commit('addToCart', product)">
          Add to cart
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  $a-color: rgb(255, 255, 255);
  div {
    font-family: sans-serif;
    background-color: $a-color;
  }

  ul {
    list-style-type: none;
    text-align: center;
  }
  img {
    height: 15rem;
  }
  #categoryProducts {
    margin-top: 3rem;
  }
  button {
    background-color: #1b1c1c;
    color: white;
    font-size: small;
    text-transform: uppercase;
    padding: 0.6rem;
    margin-bottom: 2rem;
  }
  p {
    margin-left: 0;
    margin-top: 1rem;
  }
</style>
