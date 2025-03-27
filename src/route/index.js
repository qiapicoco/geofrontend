import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import BackupRecordPage from '@/views/BackupRecordPage.vue';
import GeographicInfoPage from '@/views/GeographicInfoPage.vue';
import MapConfigPage from '@/views/MapConfigPage.vue';
import PermissionPage from '@/views/PermissionPage.vue';
import QueryRecordPage from '@/views/QueryRecordPage.vue';
import SharingRecordPage from '@/views/SharingRecordPage.vue';
import UserPage from '@/views/UserPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/backup-record',
    name: 'BackupRecordPage',
    component: BackupRecordPage
  },
  {
    path: '/geographic-info',
    name: 'GeographicInfoPage',
    component: GeographicInfoPage
  },
  {
    path: '/map-config',
    name: 'MapConfigPage',
    component: MapConfigPage
  },
  {
    path: '/permission',
    name: 'PermissionPage',
    component: PermissionPage
  },
  {
    path: '/query-record',
    name: 'QueryRecordPage',
    component: QueryRecordPage
  },
  {
    path: '/sharing-record',
    name: 'SharingRecordPage',
    component: SharingRecordPage
  },
  {
    path: '/user',
    name: 'UserPage',
    component: UserPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;