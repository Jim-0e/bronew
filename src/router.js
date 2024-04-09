import { createRouter, createWebHistory } from "vue-router";
import VoditelsApp from "./components/views/VoditelsApp.vue";
import NapravlApp from "./components/views/NapravlApp.vue";
import AppLogin from "./components/login/AppLogin.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/login", component: AppLogin},
        {path: "/voditels", component: VoditelsApp},
        {path: "/napr", component: NapravlApp},
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})
export default router;