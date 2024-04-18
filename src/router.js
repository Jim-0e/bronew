import { createRouter, createWebHistory } from "vue-router";
import VoditelsApp from "./components/views/VoditelsApp.vue";
import NapravlApp from "./components/views/NapravlApp.vue";
import AppLogin from "./components/login/AppLogin.vue";
import PassengersApp from './components/views/PassengersApp.vue';
import CitiesApp from './components/views/CitiesApp.vue';
import bronewStore from "./store";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        
        {path: "/", component: VoditelsApp, meta:{auth: true}},
        {path: "/login", components: {login: AppLogin}, meta:{auth: false}},
        {path: "/voditels", component: VoditelsApp, meta:{auth: true}},
        {path: "/napr", component: NapravlApp, meta:{auth: true}},
        {path: "/passengers", component: PassengersApp, meta:{auth: true}},
        {path: "/cities", component: CitiesApp, meta:{auth: true}},
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})
router.beforeEach((to, from, next) => {
    const userStore = bronewStore()
    if (to.meta.auth && !userStore.userName) {
        next({ path: '/login' })
      }
      else {
        next()
      }
  })
export default router;