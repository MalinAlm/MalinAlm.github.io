<script>
  import SignUpNews from '../components/SignUpNews.vue'

  export default {
    components: {
      SignUpNews
    },

    methods: {
      newsLetter() {
        alert('Thank you for signing up for our newsletter!')
      }
    }
  }
</script>

<template>
  <SignUpNews @on-sign-up="newsLetter" />
  <!-- <input v-model="signUpName" /> -->
</template>
