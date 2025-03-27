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
import axios from 'axios';

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
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        const response = await axios.get('/api/users');
        this.users = response.data;
      } catch (error) {
        console.error('获取用户列表失败', error);
      }
    },
    async addUser() {
      try {
        const response = await axios.post('/api/users', {
          username: this.newUsername,
          password: this.newPassword
        });
        this.users.push(response.data);
        this.showAddUserModal = false;
        this.newUsername = '';
        this.newPassword = '';
      } catch (error) {
        console.error('添加用户失败', error);
      }
    },
    async editUser(user) {
      // 弹出编辑模态框，这里可以使用Element UI等组件库实现更友好的交互
      const newUsername = prompt('请输入新的用户名', user.username);
      if (newUsername) {
        try {
          await axios.put(`/api/users/${user.userId}`, {
            username: newUsername
          });
          user.username = newUsername;
        } catch (error) {
          console.error('编辑用户失败', error);
        }
      }
    },
    async deleteUser(user) {
      if (confirm('确定要删除该用户吗？')) {
        try {
          await axios.delete(`/api/users/${user.userId}`);
          const index = this.users.indexOf(user);
          if (index > -1) {
            this.users.splice(index, 1);
          }
        } catch (error) {
          console.error('删除用户失败', error);
        }
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