<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <a @click="jump">{{login}}</a>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HelloWorld from "./view/HelloWorld.vue";
@Component({
  components: { HelloWorld }
})
export default class App extends Vue {
  login = "登录";
  jump() {
    let s: string = "_self";
    window.open(`${window.location.origin}/register.html`, s);
  }
}
</script>
<style lang="scss">
$color: red;
#app {
  color: $color;
}
</style>