<template>
  <div class="user-management-container">
    <h2>用户管理</h2>
    <table>
      <thead>
      <tr>
        <th>用户名</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.userId">
        <td>{{ user.username }}</td>
        <td>
          <button @click="editUser(user)">编辑</button>
          <button @click="deleteUser(user)">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
    <button @click="showAddUserModal = true">添加用户</button>

    <!-- 添加用户模态框 -->
    <div v-if="showAddUserModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="showAddUserModal = false">&times;</span>
        <h2>添加用户</h2>
        <form @submit.prevent="addUser">
          <label for="newUsername">用户名:</label>
          <input type="text" id="newUsername" v-model="newUsername" required>
          <label for="newPassword">密码:</label>
          <input type="password" id="newPassword" v-model="newPassword" required>
          <button type="submit">提交</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      showAddUserModal: false,
      newUsername: '',
      newPassword: ''
    }
  },
  created() {
    // 模拟从后端获取用户列表
    this.getUsers()
  },
  methods: {
    getUsers() {
      // 这里调用后端接口获取用户列表
      // 假设接口返回的数据格式为 { data: [user1, user2,...] }
      const mockUsers = [
        { userId: 1, username: 'user1', password: 'password1' },
        { userId: 2, username: 'user2', password: 'password2' }
      ]
      this.users = mockUsers
    },
    addUser() {
      // 这里调用后端接口添加用户
      // 假设接口会返回添加后的用户信息
      const newUser = { username: this.newUsername, password: this.newPassword }
      // 模拟添加成功后更新用户列表
      this.users.push(newUser)
      this.showAddUserModal = false
      this.newUsername = ''
      this.newPassword = ''
    },
    editUser(user) {
      // 这里实现编辑用户的逻辑，如弹出编辑模态框等
      console.log('编辑用户:', user)
    },
    deleteUser(user) {
      // 这里调用后端接口删除用户
      // 假设接口会返回删除成功的状态
      const index = this.users.indexOf(user)
      if (index > -1) {
        this.users.splice(index, 1)
      }
    }
  }
}
</script>

<style scoped>
.user-management-container {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

button {
  margin-right: 5px;
  padding: 6px 12px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 300px;
}

.close {
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}
</style>