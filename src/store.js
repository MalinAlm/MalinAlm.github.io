import { createStore } from 'vuex'
//CODE ADDS/REMOVES PRODUCTS FROM CART, FROM "SHOP PAGE" TO "CART PAGE"
const mutations = {
    addToCart(state, product) {
      state.cart.push(product)
    },
    //Following code in removeFromCart is partially taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

    removeFromCart(state, id) {
      const productIdIndex = state.cart.findIndex((prod) => prod.id === id)
      if (productIdIndex > -1) {
        state.cart.splice(productIdIndex, 1)
      }
    }
  },
  // data
  state = {
    countButton: 0,
    cart: []
  }

export default createStore({ mutations, state, strict: true })
