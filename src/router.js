import { createRouter, createWebHistory } from "vue-router";
import AppLogin from "./views/AppLogin.vue";
import PassengersApp from './views/PassengersApp.vue';
import CitiesApp from './views/CitiesApp.vue';
import bronewStore from "./store/store";
import DirectionsApp from './views/DirectionsApp.vue';
import DriversApp from './views/DriversApp.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: 
    [
        {path: "/", component: DriversApp, meta: {auth: true}},
        {path: "/login", components: {login: AppLogin}, meta: {auth: false}},
        {path: "/drivers", component: DriversApp, name: 'drivers', meta: {auth: true}},
        {path: "/directions", component: DirectionsApp, name:'directions', meta: {auth: true}},
        {path: "/passengers", component: PassengersApp, name: 'passengers', meta: {auth: true}},
        {path: "/cities", component: CitiesApp, name: 'cities', meta: {auth: true}},
    ],

    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
    const userStore = bronewStore()
    const isAuth = localStorage.getItem('token')
    
    setTimeout(()=>{
      if (to.meta.auth && !userStore.userName) {
              next({ path: '/login' })
          }
          else if(!to.meta.auth && isAuth){
            next({path: '/drivers'})
          }
            else {
              next()
            }
    },200)
    
  })
export default router;