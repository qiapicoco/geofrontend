import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: null,
        // 其他状态可以根据需要添加
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        // 可以在这里定义异步操作，如登录、获取用户信息等
        login({ commit }, user) {
            // 假设这里会与后端交互验证用户信息并获取 token
            // 然后将用户信息存储到 state 中
            commit('setUser', user)
            localStorage.setItem('token', 'your_token_here') // 模拟设置 token
        },
        logout({ commit }) {
            commit('setUser', null)
            localStorage.removeItem('token')
        }
    },
    getters: {
        getUser: state => state.user
    }
})

export default store