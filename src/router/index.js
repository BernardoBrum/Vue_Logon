import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from "@/views/loginPage.vue"
import homePage from "@/views/homePage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginPage,
    meta:{    
      title: "Login - Compass"
    }
  },
  {
    path: '/home',
    name: 'home',
    component: homePage,
    meta:{    
      title: "Home - Compass",
    }
    }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
