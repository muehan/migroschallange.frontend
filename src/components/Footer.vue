<template>
  <footer class="footer">
    <div class="container">
      <router-link to="/">
        <div class="item">
          <i class="bi bi-house-fill"></i>
          <span class="text">Home</span>
        </div>
      </router-link>
      <router-link to="/tree">
        <div class="item">
          <i class="bi bi-tree-fill"></i>
          <span class="text">MiGrows</span>
        </div>
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;

  border-top: 1px black solid;
}

.item {
  margin-top: 10px;
  vertical-align: top;
  display: inline-block;
  text-align: center;
  width: 50px;
  color: black;
  margin-left: 10px;
  margin-right: 10px;
}

.text {
  font-size: 8px;
  display: block;
}
</style>
