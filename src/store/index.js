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
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('setUser', null);
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    }
  }
});

export default store;