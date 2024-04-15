<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

export default {
  data() {
    return {
      
    }
  },
  components: { Footer, Navbar }
}
</script>

<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<style lang="scss">
  @use "./styles/general.scss";
  @import "@fortawesome/fontawesome-free/css/all.css";
</style>