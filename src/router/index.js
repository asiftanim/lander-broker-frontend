import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import ListOfLeads from '../views/ListOfLeads.vue'
import DomainList from '../views/DomainList.vue'
import ProfileUpdate from '../views/ProfileUpdate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/list-of-leads',
    name: 'ListOfLeads',
    component: ListOfLeads
  },
  {
    path: '/list-of-domains',
    name: 'DomainList',
    component: DomainList
  },
  {
    path: '/profile-update',
    name: 'ProfileUpdate',
    component: ProfileUpdate
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
