<template>
  <div class="container">
    <h1>登录</h1>
    <form>
      <label for="username">用户名:</label>
      <input type="text" id="username" v-model="username" required>
      <br>
      <label for="password">密码:</label>
      <input type="password" id="password" v-model="password" required>
      <br>
      <button @click.prevent="login">登录</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

const login = () => {
  // 这里可以添加登录逻辑，如发送请求到后端验证用户名和密码
  // 验证通过后跳转到主页
  router.push('/home');
};
</script>

<style scoped>
/* 登录页面特定的样式 */
</style>