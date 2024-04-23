import { createRouter, createWebHistory } from "vue-router";
import AppLogin from "./components/login/AppLogin.vue";
import PassengersApp from './components/views/PassengersApp.vue';
import CitiesApp from './components/views/CitiesApp.vue';
import bronewStore from "./store";
import DirectionsApp from './components/views/DirectionsApp.vue';
import DriversApp from './components/views/DriversApp.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        
        {path: "/", component: DriversApp, meta:{auth: true}},
        {path: "/login", components: {login: AppLogin}, meta:{auth: false}},
        {path: "/drivers", component: DriversApp, meta:{auth: true}},
        {path: "/directions", component: DirectionsApp,name:'directions', meta:{auth: true}},
        {path: "/passengers", component: PassengersApp, meta:{auth: true}},
        {path: "/cities", component: CitiesApp, meta:{auth: true}},
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})
router.beforeEach((to, from, next) => {
    const userStore = bronewStore()
    setTimeout(()=>{
      if (to.meta.auth && !userStore.userName) {
              next({ path: '/login' })
            }
            else {
              next()
            }
    },200)
    
  })
export default router;