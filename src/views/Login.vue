<template>
  <div class="login-container">
    <h2>登录</h2>
    <form @submit.prevent="login">
      <label for="username">用户名:</label>
      <input type="text" id="username" v-model="username" required>
      <label for="password">密码:</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/api/login', {
          username: this.username,
          password: this.password
        });
        if (response.data.token) {
          this.$store.dispatch('login', response.data.user);
          localStorage.setItem('token', response.data.token);
          this.$router.push('/home');
        } else {
          alert('登录失败，请检查用户名和密码');
        }
      } catch (error) {
        console.error('登录失败', error);
        alert('登录失败，请检查网络连接或联系管理员');
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

form label {
  display: block;
  margin-bottom: 5px;
}

form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

form button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>