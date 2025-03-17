import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            user: null
        };
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        login({ commit }, user) {
            // 这里可以添加登录逻辑，如发送请求到后端验证用户名和密码
            // 验证通过后更新 store 中的用户信息
            commit('setUser', user);
        },
        logout({ commit }) {
            commit('setUser', null);
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.user !== null;
        }
    }
});

export default store;