import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
    password: "", 
  },
  getters: {},
  mutations: {
    User(state,user) {
      state.user = user
    },
    Password(state,password) {
      state.password = password
    }
  },
  actions: {},
  modules: {},
});
