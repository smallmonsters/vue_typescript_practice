<template>
  <div id="app">
    这个是vue
    <a @click="jump">登录</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    jump() {
      window.open(`${window.location.href}register.html`, '_self')
    }
  },
  components: {},
  computed: {},
}

</script>
<style>
</style>