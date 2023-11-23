import Home from "./components/Home.vue"
import SignUp from "./components/SignUp.vue"
import Login from "./components/Login.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        name: 'Home',
        component: () => import("./components/Home.vue"),
        path: '/'
    },
    {
        name: 'SignUp',
        component: () => import("./components/SignUp.vue"),
        path: '/sign-up'
    },
    {
        name: 'Login',
        component: () => import("./components/Login.vue"),
        path: '/login'
    },
    {
        name: 'Add',
        component: () => import("./components/Add.vue"),
        path: '/add'
    },
    {
        name: 'Update',
        component: () => import("./components/Update.vue"),
        path: '/update/:id'
    },
    {
        name: 'UploadFiles',
        component: () => import("./components/UploadFiles.vue"),
        path: '/upload-files'
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;