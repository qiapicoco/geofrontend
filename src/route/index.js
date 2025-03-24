import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import UserPage from '../views/UserPage.vue'
import PermissionPage from '../views/PermissionPage.vue'
import GeographicInfoPage from '../views/GeographicInfoPage.vue'
import BackupRecordPage from '../views/BackupRecordPage.vue'
import MapConfigPage from '../views/MapConfigPage.vue'
import QueryRecordPage from '../views/QueryRecordPage.vue'
import SharingRecordPage from '../views/SharingRecordPage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/user',
        name: 'UserPage',
        component: UserPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/permission',
        name: 'PermissionPage',
        component: PermissionPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/geographic-info',
        name: 'GeographicInfoPage',
        component: GeographicInfoPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/backup-record',
        name: 'BackupRecordPage',
        component: BackupRecordPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/map-config',
        name: 'MapConfigPage',
        component: MapConfigPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/query-record',
        name: 'QueryRecordPage',
        component: QueryRecordPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/sharing-record',
        name: 'SharingRecordPage',
        component: SharingRecordPage,
        meta: { requiresAuth: true }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    // 简单的鉴权逻辑，假设登录后会在 localStorage 中存储 token
    const token = localStorage.getItem('token')
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!token) {
            next('/')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router