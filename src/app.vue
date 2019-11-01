<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <a @click="jump">{{login}}</a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import HelloWorld from "./pages/view/HelloWorld.vue";
@Component({
  components:{HelloWorld},
})
export default class App extends Vue {
  login = "登录";
  jump() {
    let s: string = "_self";
    window.open(`${window.location.origin}/register.html`, s);
  }
}
</script>
<style>
</style>