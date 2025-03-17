# geofrontend

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### 前端（Vue）

#### 1. 项目结构概述
```
src
├── assets                          # 静态资源目录
│   ├── css                         # 样式文件
│   │   └── main.css                # 全局样式
│   └── img                         # 图片资源
├── components                      # 组件目录
│   ├── UserManagement.vue          # 用户管理组件
│   ├── PermissionManagement.vue    # 权限管理组件
│   ├── GeographicInfoManagement.vue # 地理信息数据管理组件
│   ├── BackupRecordManagement.vue  # 数据备份记录管理组件
│   ├── MapConfigManagement.vue     # 地图配置管理组件
│   ├── QueryRecordManagement.vue   # 查询记录管理组件
│   └── SharingRecordManagement.vue # 数据共享记录管理组件
├── views                           # 视图页面目录
│   ├── Login.vue                   # 登录页面
│   ├── Home.vue                    # 主页
│   ├── UserPage.vue                # 用户管理页面
│   ├── PermissionPage.vue          # 权限管理页面
│   ├── GeographicInfoPage.vue      # 地理信息数据管理页面
│   ├── BackupRecordPage.vue        # 数据备份记录管理页面
│   ├── MapConfigPage.vue           # 地图配置管理页面
│   ├── QueryRecordPage.vue         # 查询记录管理页面
│   └── SharingRecordPage.vue       # 数据共享记录管理页面
├── router                          # 路由配置目录
│   └── index.js                    # 路由配置文件
├── store                           # 状态管理目录
│   └── index.js                    # 状态管理配置文件
├── App.vue                         # 根组件
└── main.js                         # 入口文件
```

#### 2. 各部分职责说明
- **assets 目录**：存放静态资源，如样式文件、图片等。
- **components 目录**：存放可复用的组件，如用户管理组件、权限管理组件等。
- **views 目录**：存放具体的视图页面，如登录页面、主页、各功能管理页面等。
- **router 目录**：配置路由信息，实现页面的导航和切换。
- **store 目录**：使用 Vuex 进行状态管理，存储全局数据。
- **App.vue**：根组件，包含整个应用的布局和结构。
- **main.js**：入口文件，初始化 Vue 实例，配置路由、状态管理等。

### 前后端交互流程
1. 前端页面通过路由跳转，触发相应的组件或视图。
2. 组件或视图中的方法调用前端的 API 接口，向后端发送请求。
3. 后端的控制器接收请求，调用服务层方法处理业务逻辑。
4. 服务层调用数据访问层进行数据操作，返回处理结果。
5. 控制器将处理结果返回给前端。
6. 前端根据返回结果更新页面显示。

通过以上的代码结构和交互流程，能够实现地理信息数据管理平台的各项功能，包括用户管理、数据管理、地图展示、查询分析和数据共享等。

```
geofrontend                            
├─ public                              
│  └─ favicon.ico                      
├─ src                                 
│  ├─ assets                           
│  │  ├─ base.css                      
│  │  ├─ logo.svg                      
│  │  └─ main.css                      
│  ├─ components                       
│  │  ├─ BackupRecordManagement.vue    
│  │  ├─ GeographicInfoManagement.vue  
│  │  ├─ MapConfigManagement.vue       
│  │  ├─ PermissionManagement.vue      
│  │  ├─ QueryRecordManagement.vue     
│  │  ├─ SharingRecordManagement.vue   
│  │  └─ UserManagement.vue            
│  ├─ route                            
│  │  └─ index.js                      
│  ├─ store                            
│  │  └─ index.js                      
│  ├─ views                            
│  │  ├─ BackupRecordPage.vue          
│  │  ├─ GeographicInfoPage.vue        
│  │  ├─ Home.vue                      
│  │  ├─ Login.vue                     
│  │  ├─ MapConfigPage.vue             
│  │  ├─ PermissionPage.vue            
│  │  ├─ QueryRecordPage.vue           
│  │  ├─ SharingRecordPage.vue         
│  │  └─ UserPage.vue                  
│  ├─ App.vue                          
│  └─ main.js                          
├─ index.html                          
├─ jsconfig.json                       
├─ package-lock.json                   
├─ package.json                        
├─ README.md                           
└─ vite.config.js                      
```