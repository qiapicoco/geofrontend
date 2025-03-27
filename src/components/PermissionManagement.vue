<template>
  <div class="permission-management-container">
    <h2>权限管理</h2>
    <table>
      <thead>
      <tr>
        <th>权限名称</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="permission in permissions" :key="permission.permissionId">
        <td>{{ permission.permissionName }}</td>
        <td>
          <button @click="editPermission(permission)">编辑</button>
          <button @click="deletePermission(permission)">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
    <button @click="showAddPermissionModal = true">添加权限</button>

    <!-- 添加权限模态框 -->
    <div v-if="showAddPermissionModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="showAddPermissionModal = false">&times;</span>
        <h2>添加权限</h2>
        <form @submit.prevent="addPermission">
          <label for="newPermissionName">权限名称:</label>
          <input type="text" id="newPermissionName" v-model="newPermissionName" required>
          <label for="newDescription">描述:</label>
          <input type="text" id="newDescription" v-model="newDescription">
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
      permissions: [],
      showAddPermissionModal: false,
      newPermissionName: '',
      newDescription: ''
    };
  },
  created() {
    this.getPermissions();
  },
  methods: {
    async getPermissions() {
      try {
        const response = await axios.get('/api/permissions');
        this.permissions = response.data;
      } catch (error) {
        console.error('获取权限列表失败', error);
      }
    },
    async addPermission() {
      try {
        const response = await axios.post('/api/permissions', {
          permissionName: this.newPermissionName,
          description: this.newDescription
        });
        this.permissions.push(response.data);
        this.showAddPermissionModal = false;
        this.newPermissionName = '';
        this.newDescription = '';
      } catch (error) {
        console.error('添加权限失败', error);
      }
    },
    async editPermission(permission) {
      const newPermissionName = prompt('请输入新的权限名称', permission.permissionName);
      const newDescription = prompt('请输入新的描述', permission.description);
      if (newPermissionName || newDescription) {
        try {
          await axios.put(`/api/permissions/${permission.permissionId}`, {
            permissionName: newPermissionName || permission.permissionName,
            description: newDescription || permission.description
          });
          permission.permissionName = newPermissionName || permission.permissionName;
          permission.description = newDescription || permission.description;
        } catch (error) {
          console.error('编辑权限失败', error);
        }
      }
    },
    async deletePermission(permission) {
      if (confirm('确定要删除该权限吗？')) {
        try {
          await axios.delete(`/api/permissions/${permission.permissionId}`);
          const index = this.permissions.indexOf(permission);
          if (index > -1) {
            this.permissions.splice(index, 1);
          }
        } catch (error) {
          console.error('删除权限失败', error);
        }
      }
    }
  }
};
</script>

<style scoped>
.permission-management-container {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid var(--border-color);
  padding: 8px;
  text-align: left;
}
</style>