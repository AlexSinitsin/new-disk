import Auth from "@/api/Auth";

const state = {
  user: {},
  token: "",
  isAuth: false,
  error: "",
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setUser(state, user) {
    state.user = user;
  },
  setIsAuth(state, bool) {
    state.isAuth = bool;
  },
  setError(state, error) {
    state.error = error;
  },
};

const actions = {
  REGISTRATION: async ({ commit }, regData) => {
    commit("setError", "");
    try {
      await Auth.registration(regData);

      return true;
    } catch (e) {
      let err = Array.isArray(JSON.parse(e.request.response).message)
        ? JSON.parse(e.request.response).message[0]
        : JSON.parse(e.request.response).message;

      commit("setError", err);
      return;
    }
  },
  AUTH: async ({ commit }, authData) => {
    commit("setError", "");
    try {
      const { data } = await Auth.auth(authData);

      console.log(data);
      commit("setToken", data.accessToken);
      commit("setIsAuth", true);
      return true;
    } catch (e) {
      let err = Array.isArray(JSON.parse(e.request.response).message)
        ? JSON.parse(e.request.response).message[0]
        : JSON.parse(e.request.response).message;

      commit("setError", err);
      return;
    }
  },
  GET_USER: async ({ commit, getters }) => {
    commit("setError", "");
    try {
      const { data } = await Auth.getUser(getters.token);

      console.log(data);
      commit("setUser", data);
      return true;
    } catch (e) {
      console.log(e);
    }
  },
  LOG_OUT: async ({ commit, getters }) => {
    commit("setError", "");
    try {
      await Auth.logOut(getters.token);

      commit("setToken", "");
      commit("setIsAuth", false);
      commit("setUser", {});
      return true;
    } catch (e) {
      console.log(e);
    }
  },
};

const getters = {
  error: (state) => state.error,
  isAuth: (state) => state.isAuth,
  token: (state) => state.token,
  user: (state) => state.user,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
