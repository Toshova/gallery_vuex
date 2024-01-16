import Vue from "vue"
import VueRouter from "vue-router"
import MainPage from "../pages/Main-page.vue"
import PhotoPage from '../pages/Photo-page.vue'


Vue.use(VueRouter)

const routes = [
{
    path: '/',
    component: MainPage,
},
{
    path: '/photo',
    component: PhotoPage,
}

]



export default new VueRouter (
     {
        mode: 'history',
        routes
    }
)