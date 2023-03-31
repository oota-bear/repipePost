import Vue from "vue";
import Router from "vue-router";
import Top from "../pages/Top.vue";
import recipePost from "../pages/recipeInputTitle.vue";
import recipeInputInfo from "../pages/recipeInputInfo.vue";

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
           path:"/",
           name: "Top",
           component: Top
        },
        {
            path: "/recipePost",
            name: "recipePost",
            component: recipePost,
        },
        {
            path: "/recipeInputInfo",
            name: "recipeInputInfo",
            component: recipeInputInfo,
        }
    ]
})