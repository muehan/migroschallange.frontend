<template>
  <nav class="navbar navbar-light bg-migros">
    <div class="container-fluid">
    <!--<a class="navbar-brand" href="#">Navbar</a>-->
    <img src="@/assets/green-logo.png" class="brand-image" />

    </div>
  </nav>
</template>

<script>
export default {
  name: "Toolbar",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-migros {
    background-color: #fd7e14;
}

.navbar {
    padding: 15px;
}

.brand-image {
    height: 60px;
}
</style>
