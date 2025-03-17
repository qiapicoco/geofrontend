import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import UserPage from '../views/UserPage.vue';
import PermissionPage from '../views/PermissionPage.vue';
import GeographicInfoPage from '../views/GeographicInfoPage.vue';
import BackupRecordPage from '../views/BackupRecordPage.vue';
import MapConfigPage from '../views/MapConfigPage.vue';
import QueryRecordPage from '../views/QueryRecordPage.vue';
import SharingRecordPage from '../views/SharingRecordPage.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/user',
        name: 'UserPage',
        component: UserPage
    },
    {
        path: '/permission',
        name: 'PermissionPage',
        component: PermissionPage
    },
    {
        path: '/geographic-info',
        name: 'GeographicInfoPage',
        component: GeographicInfoPage
    },
    {
        path: '/backup-record',
        name: 'BackupRecordPage',
        component: BackupRecordPage
    },
    {
        path: '/map-config',
        name: 'MapConfigPage',
        component: MapConfigPage
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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;