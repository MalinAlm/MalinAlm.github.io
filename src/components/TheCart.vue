<script>
  export default {
    props: {
      copy: { type: String, required: true }
    },

    data() {
      return {
        countUpButton: 0,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        shopName1: 'Lorem',
        shopName2: 'ipsum',
        shopName3: 'dolor'
      }
    },

    methods: {
      onSubmit() {
        alert('Thank you for your order!')
      }
    },

    computed: {
      shopName() {
        return `${this.shopName1} ${this.shopName2} ${this.shopName3}`
      }
    }
  }
</script>

<template>
  <h1>Cart</h1>

  <p>Number of products in cart: {{ $store.state.cart.length }}</p>

  <ul>
    <li :key="product.id" v-for="product in $store.state.cart">
      <img alt="" :src="product.image" />
      {{ product.title }}, $ {{ product.price }}, Product id: {{ product.id }}
      <input
        type="button"
        value="Remove from cart"
        @click="$store.commit('removeFromCart', product.id)"
      />
    </li>
  </ul>

  <form>
    <label for="firstName">First name</label>
    <input id="firstName" name="First name" v-model="firstName" />
    <label for="lastName">Last name</label>
    <input id="lastName" name="Last Name" v-model="lastName" />
    <label for="email">Email</label>
    <input id="email" name="Email" v-model="email" />
    <label for="phone">Phone</label>
    <input :id="phone" name="Phone" v-model="phone" />

    <input
      id="placeOrderButton"
      :disabled="
        phone === '' || firstName === '' || email === '' || lastName === ''
      "
      type="button"
      @click="onSubmit"
      value="Place order!"
    />
    <p v-if="firstName !== ''">Name: {{ firstName }} {{ lastName }}</p>
    <!-- <p v-if="lastName !== ''">Last name: {{ lastName }}</p> -->
    <p v-if="email !== ''">Email: {{ email }}</p>
    <p v-if="phone !== ''">Phone: {{ phone }}</p>

    <img id="imgCheckout" src="../../public/checkout.jpg" alt="" />
  </form>

  <footer>
    <p id="copyRight">{{ copy }} {{ shopName }}</p>
  </footer>
</template>

<style>
  /* body {
    height: 100%;
  } */
  #placeOrderButton {
    margin-left: 2rem;
  }
  form {
    padding-top: 1rem;
    padding-bottom: 7rem;
  }
  label {
    margin-right: 0.5rem;
  }
  #imgCheckout {
    width: 100%;
    height: auto;
    margin-top: 2rem;
  }
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    padding-top: 1rem;
    background: #23272b;
    color: rgb(196, 196, 196);
  }
</style>
