<template>
  <div id="app">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HelloWorld from "./view/HelloWorld.vue";
const a: string = "dfd";
@Component({
  components: { HelloWorld },
})
export default class App extends Vue {
  public arr: string = "f";
}
</script>
<style lang="scss">

#app {
  color: $color;
}
</style>