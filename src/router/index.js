import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '/',
			redirect: '/home'
		},
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/Login/')
    },
    {
      path: '/home',
      name: 'home',
      meta: {requiresAuth: true},
      component: () => import('@/components/Home/')
    }
  ]
})
