<template>
  <div id="globalHeader">
    <a-row :wrap="false">
      <a-col flex="300px">
        <div class="title-bar">
          <img class="logo" src="../assets/logo.png" alt="logo" />
          <div class="title">地理信息数据管理平台</div>
        </div>
      </a-col>
      <a-col flex="auto">
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="doMenuClick"
        />
      </a-col>
      <a-col flex="80px">
        <div class="user-login-status">
          <div v-if="loginUserStore.loginUser.id">
            {{ loginUserStore.loginUser.username ?? "无名" }}
          </div>
          <div v-else>
            <a-button type="primary" href="/user/login">登录</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { h, ref } from "vue";
import { CrownOutlined, HomeOutlined } from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";
import { useRouter } from "vue-router";
import { useLoginUserStore } from "@/store/useLoginUserStore";

const loginUserStore = useLoginUserStore();

const router = useRouter();
// 点击菜单后的路由跳转事件
const doMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  });
};

const current = ref<string[]>(["mail"]);
// 监听路由变化，更新当前菜单选中状态
router.afterEach((to, from, failure) => {
  current.value = [to.path];
});

const items = ref<MenuProps["items"]>([
  {
    key: "/",
    icon: () => h(HomeOutlined),
    label: "主页",
    title: "主页",
  },
  {
    key: "/user/login",
    label: "用户登录",
    title: "用户登录",
  },
  {
    key: "/user/register",
    label: "用户注册",
    title: "用户注册",
  },
  {
    key: "/admin/userManage",
    icon: () => h(CrownOutlined),
    label: "用户管理",
    title: "用户管理",
  },
  {
    key: "/admin/dataManage",
    icon: () => h(CrownOutlined),
    label: "数据管理",
    title: "数据管理",
  },
  {
    key: "/admin/mapDisplay",
    icon: () => h(CrownOutlined),
    label: "地图展示",
    title: "地图展示",
  },
  {
    key: "/admin/queryAnalysis",
    icon: () => h(CrownOutlined),
    label: "查询分析",
    title: "查询分析",
  },
  {
    key: "/admin/dataShare",
    icon: () => h(CrownOutlined),
    label: "数据共享",
    title: "数据共享",
  },
]);
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
