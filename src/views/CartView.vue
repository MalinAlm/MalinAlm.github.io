<script>
  import TheCart from '../components/TheCart.vue'
  export default {
    components: {
      TheCart
    },
    data() {
      return { temp: 'Lorerm copy right' }
    }
  }
</script>

<template>
  <TheCart :copy="temp" />
  <!-- <TheCart copy="Lorem copy right: Lorem ipsum dolor" /> -->
</template>
