<script>
  export default {
    props: {
      shop: { type: String, required: true }
    }
  }
</script>

<style scoped>
  h1 {
    /* padding-top: 10px; */
    font-size: 20px;
    font-weight: bold;
    text-align: left;
  }
</style>

<template>
  <h1>{{ shop }}</h1>
</template>
