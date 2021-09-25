<template>
  <Toolbar />
  <div class="main-container">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script>
import Toolbar from "./components/Toolbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Toolbar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-container{
  margin-top: 15px;
}
</style>
