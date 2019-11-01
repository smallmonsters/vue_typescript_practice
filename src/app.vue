<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <a @click="jump">登录</a>
  </div>
</template>

<script lang="ts">
import HelloWorld from "./pages/view/HelloWorld.vue";
export default {
  data() {
    return {};
  },
  methods: {
    jump() {
      let s: string = "_self";
      window.open(`${window.location.origin}/register.html`, s);
    }
  },
  components: { HelloWorld },
  computed: {}
};
</script>
<style>
</style>