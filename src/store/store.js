import { createStore } from "vuex";
import axios from "axios";
import "es6-promise/auto";

const store = createStore({
  state: {
    token: localStorage.getItem("access_token") || null,
    userProfile:
      localStorage.getItem("user_profile") === null
        ? null
        : JSON.parse(localStorage.getItem("user_profile")),
  },
  getters: {
    loggedIn(state) {
      if (state.token !== null) {
        return true;
      } else {
        return false;
      }
    },

    getAccessToken(state) {
      return state.token;
    },

    getUserProfile(state) {
      return state.userProfile;
    },
  },
  mutations: {
    setUserProfile(state, userProfile) {
      state.userProfile = userProfile;
      localStorage.setItem("user_profile", JSON.stringify(userProfile));
    },

    retrieveToken(state, token) {
      state.token = token;
    },

    destroyToken(state) {
      state.token = null;
    },
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("login", {
            email: credentials.email,
            password: credentials.password,
          })
          .then((response) => {
            const token = response.data.jwt;
            localStorage.setItem("access_token", token);
            context.commit("retrieveToken", token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});

export default store;
