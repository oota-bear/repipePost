import Vue from "vue";
import Router from "vue-router";
import Top from "../pages/top.vue";
import recipePost from "../pages/recipeInputTitle.vue";
import recipeInputInfo from "../pages/recipeInputInfo.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
           path:'/top',
           name: 'top',
           component: Top,
        },
        {
            path: '/recipePost',
            name: 'recipePost',
            component: recipePost,
        },
        {
            path: '/recipeInputInfo',
            name: 'recipeInputInfo',
            component: recipeInputInfo,
        }
    ]
})