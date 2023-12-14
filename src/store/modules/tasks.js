import Tasks from "@/api/Tasks";

const state = {
  tasks: [],
};

const mutations = {
  setTasks(state, tasks) {
    state.tasks = tasks;
  },
};

const actions = {
  GET_TASKS: async ({ commit, getters }) => {
    commit("setError", "");
    try {
      const { data } = await Tasks.getTasks(getters.token);

      commit("setTasks", data);

      return true;
    } catch (e) {
      console.log(e);
    }
  },
  CREATE_TASK: async ({ commit, dispatch, getters }, data) => {
    commit("setError", "");
    try {
      await Tasks.createTask(data, getters.token);

      dispatch("GET_TASKS");

      return true;
    } catch (e) {
      let err = Array.isArray(JSON.parse(e.request.response).message)
        ? JSON.parse(e.request.response).message[0]
        : JSON.parse(e.request.response).message;

      commit("setError", err);
      return;
    }
  },
  DELETE_TASK: async ({ commit, dispatch, getters }, id) => {
    commit("setError", "");
    try {
      await Tasks.deleteTask(id, getters.token);

      dispatch("GET_TASKS");

      return true;
    } catch (e) {
      console.log(e);
    }
  },
};

const getters = {
  tasks: (state) => state.tasks,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
