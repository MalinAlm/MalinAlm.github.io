<script>
  export default {
    data() {
      return {
        signUpName: null,
        signUpEmail: null,
        thankYouMsg: null
      }
    },
    emits: ['on-sign-up'],
    methods: {
      onSubmit(event) {
        event.preventDefault()

        this.thankYouMsg = `Tack, ${this.signUpName}`
        this.signUpName = null
        this.$emit('on-sign-up')
      }
    }
  }
</script>
<template>
  <p><strong>Sign up for our newsletter:</strong></p>
  <label for="signUpName">
    Name
    <input name="Name" id="signUpName" v-model="signUpName" />
  </label>
  <label for="signUpEmail">
    Email
    <input name="Email" id="signUpEmail" v-model="signUpEmail" />
  </label>

  <input
    class="theButton"
    :disabled="signUpName === null"
    type="button"
    @click="onSubmit"
    value="Sign me up!"
  />
  <p v-if="thankYouMsg !== null">{{ thankYouMsg }}</p>

  <img id="picNewsletter" src="../../public/man-newsletter.jpg" alt="" />
</template>

<style>
  p,
  label {
    margin-left: 3rem;
  }

  .theButton {
    margin-left: 2rem;
  }
  #picNewsletter {
    height: 10%;
    width: auto;
    margin-top: 2rem;
  }
</style>
