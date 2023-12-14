import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from "vuex-persistedstate";
import auth from "@/store/modules/auth";
import tasks from "@/store/modules/tasks";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    tasks,
  },
  plugins: [
    createPersistedState({
      key: "disk",
      paths: ["auth", "tasks"],
    }),
  ],
});
