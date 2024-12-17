import { createRouter, createWebHistory } from "vue-router";

import Temperatura from "./componentes/Temperatura.vue";
import Respuestas from "./componentes/Respuestas.vue";

const routes =[
    { path: '/', redirect: '/temperatura'},
    { path: '/temperatura', component: Temperatura},
    { path: '/respuestas', component: Respuestas},
    { path: '/:pathmatch(.*)*', redirect: '/temperatura'},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router