import Vue from 'vue'
import Router from 'vue-router'
import User from './views/User.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'user',
      component: User
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user/wall/:id',
      name: 'userwall',
      component: User
    },
    {
      path: '/posts/:postId',
      name: 'postDetails',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "postDetails" */ './views/PostDetails.vue')
      }
    },


    {
      path: "*",
      redirect: '/'
    }
  ]
})