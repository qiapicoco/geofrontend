<template>
  <div class="backup-record-management-container">
    <h2>数据备份记录管理</h2>
    <table>
      <thead>
      <tr>
        <th>备份类型</th>
        <th>备份时间</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="record in backupRecords" :key="record.backupId">
        <td>{{ record.backupType }}</td>
        <td>{{ record.backupTime }}</td>
        <td>
          <button @click="deleteRecord(record)">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      backupRecords: []
    };
  },
  created() {
    this.getBackupRecords();
  },
  methods: {
    async getBackupRecords() {
      try {
        const response = await axios.get('/api/backup-records');
        this.backupRecords = response.data;
      } catch (error) {
        console.error('获取数据备份记录列表失败', error);
      }
    },
    async deleteRecord(record) {
      if (confirm('确定要删除该备份记录吗？')) {
        try {
          await axios.delete(`/api/backup-records/${record.backupId}`);
          const index = this.backupRecords.indexOf(record);
          if (index > -1) {
            this.backupRecords.splice(index, 1);
          }
        } catch (error) {
          console.error('删除数据备份记录失败', error);
        }
      }
    }
  }
};
</script>

<style scoped>
.backup-record-management-container {
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