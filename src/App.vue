<template>
  <div id="app">
    <Nav />
    <div class="contacts-area">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav";
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  components: {
    Nav
  }
};
</script>
<style>
@import url('./assets/style.css');
</style>