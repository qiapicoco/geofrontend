<template>
  <div class="geographic-info-management-container">
    <h2>地理信息数据管理</h2>
    <table>
      <thead>
      <tr>
        <th>数据名称</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="data in geographicInfoData" :key="data.dataId">
        <td>{{ data.dataName }}</td>
        <td>
          <button @click="editData(data)">编辑</button>
          <button @click="deleteData(data)">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
    <button @click="showAddDataModal = true">添加地理信息数据</button>

    <!-- 添加数据模态框 -->
    <div v-if="showAddDataModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="showAddDataModal = false">&times;</span>
        <h2>添加地理信息数据</h2>
        <form @submit.prevent="addData">
          <label for="newDataName">数据名称:</label>
          <input type="text" id="newDataName" v-model="newDataName" required>
          <label for="newDataContent">数据内容:</label>
          <input type="text" id="newDataContent" v-model="newDataContent">
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
      geographicInfoData: [],
      showAddDataModal: false,
      newDataName: '',
      newDataContent: ''
    };
  },
  created() {
    this.getGeographicInfoData();
  },
  methods: {
    async getGeographicInfoData() {
      try {
        const response = await axios.get('/api/geographic-info');
        this.geographicInfoData = response.data;
      } catch (error) {
        console.error('获取地理信息数据列表失败', error);
      }
    },
    async addData() {
      try {
        const response = await axios.post('/api/geographic-info', {
          dataName: this.newDataName,
          dataContent: this.newDataContent
        });
        this.geographicInfoData.push(response.data);
        this.showAddDataModal = false;
        this.newDataName = '';
        this.newDataContent = '';
      } catch (error) {
        console.error('添加地理信息数据失败', error);
      }
    },
    async editData(data) {
      const newDataName = prompt('请输入新的数据名称', data.dataName);
      const newDataContent = prompt('请输入新的数据内容', data.dataContent);
      if (newDataName || newDataContent) {
        try {
          await axios.put(`/api/geographic-info/${data.dataId}`, {
            dataName: newDataName || data.dataName,
            dataContent: newDataContent || data.dataContent
          });
          data.dataName = newDataName || data.dataName;
          data.dataContent = newDataContent || data.dataContent;
        } catch (error) {
          console.error('编辑地理信息数据失败', error);
        }
      }
    },
    async deleteData(data) {
      if (confirm('确定要删除该地理信息数据吗？')) {
        try {
          await axios.delete(`/api/geographic-info/${data.dataId}`);
          const index = this.geographicInfoData.indexOf(data);
          if (index > -1) {
            this.geographicInfoData.splice(index, 1);
          }
        } catch (error) {
          console.error('删除地理信息数据失败', error);
        }
      }
    }
  }
};
</script>

<style scoped>
.geographic-info-management-container {
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