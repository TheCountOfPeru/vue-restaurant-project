<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<template>
  <div class="">
  <Navbar />
  <router-view></router-view>
  <Footer />
  </div>
</template>
