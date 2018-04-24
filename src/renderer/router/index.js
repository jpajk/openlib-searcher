import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: require('@/components/Search').default
    },
    {
      path: '/my-library',
      name: 'myLibrary',
      component: require('@/components/MyLibrary').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
