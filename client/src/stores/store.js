import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  Login: false
}

const getters = {
  getLogin: state => {
    return state.Login;
  }
}

const mutations = {
  SET_Login(state, boolean) {
    state.Login = boolean
  },
  TOGGLE_Login(state) {
    state.Login = !state.Login
  },

}

const actions = {
  //
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // global
  }
});
