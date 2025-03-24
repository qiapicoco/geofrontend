<template>
  <div class="user-page-container">
    <UserManagement />
  </div>
</template>

<script>
import UserManagement from '../components/UserManagement.vue'

export default {
  components: {
    UserManagement
  }
}
</script>

<style scoped>
.user-page-container {
  padding: 20px;
}
</style>