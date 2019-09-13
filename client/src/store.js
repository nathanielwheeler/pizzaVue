import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthService from './AuthService'

Vue.use(Vuex)

//Allows axios to work locally or live
let api = Axios.create({
  baseURL: '//localhost:3000/api'
})

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let _api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    users: [],
    activeUser: {},
    posts: [],
    activePosts: {},
    userSearchResults: []
  },
  mutations: {
    setUser(state, user) {
      state.activeUser = user
    },
    setPosts(state, posts) {
      state.posts = posts
    },
    setUserSearchResults(state, users) {
      state.userSearchResults = users
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        router.push({ name: "user" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds)
        commit('setUser', user)
        router.push({ name: "user" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({ name: "login" })
      } catch (e) {
        console.warn(e.message)
      }
    },

    //#endregion

    //#region -- USERS --

    async findUsersByName({ commit, dispatch }, query) {
      try {
        //NOTE the query for this method will be the user name
        let res = await _api.get('users/find?name=' + query)
        commit('setUserSearchResults', res.data)
      } catch (error) {
        console.error(error)
      }

    },
    //#endregion

    //#region -- POSTS --
    async getPosts({ commit, dispatch }, data) { //TODO: Where's data coming from?
      try {
        let res = await api.get(`/posts/${data.userId}`)
        commit('posts', res.data)
      } catch (error) {
        console.error(error)
      }
    }
    //#endregion


    //#region -- COMMENTS --

    //#endregion
  }
})