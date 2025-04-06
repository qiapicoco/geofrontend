<template>
  <div id="homePage">
    <h1>{{ msg }}</h1>
    <button class="start-btn" @click="navigateToDataManagement">
      开始管理
    </button>
  </div>
</template>

<script setup lang="ts">
const msg = "欢迎来到地理信息数据管理平台，你将从这里开始管理地理数据~";

const navigateToDataManagement = () => {
  // 跳转到数据管理页面
  window.location.href = "/data-management";
};
</script>

<style scoped>
#homePage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
}

.start-btn {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background: #ff7f50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.start-btn:hover {
  background: #ff6347;
}
</style>
