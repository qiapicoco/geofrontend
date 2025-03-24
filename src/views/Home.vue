<template>
  <div class="home-container">
    <h2>欢迎来到主页</h2>
    <button @click="$store.dispatch('logout')">登出</button>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 50px;
}
</style>