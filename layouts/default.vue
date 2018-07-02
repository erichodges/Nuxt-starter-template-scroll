<template>
  <div class="div-with-background">
    <Nav />
    <nuxt/>
    <Footer />
  </div>
</template>


<script>
  import Nav from '@/components/Nav'
  import Footer from '@/components/Footer'
  

  export default {
    components: {
      Nav,
      Footer,
      
    }
  }
</script>

<style lang="scss">
  .div-with-background {
    height: 100vh; 
    background-image: linear-gradient(
      to bottom, rgba($color-grey-light-1, .3),
      rgba($color-grey-light-2, .9)), url('~/assets/images/stock-photo-woman-lying-in-bed-sleepless-at-night-223663354.jpg');      
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
