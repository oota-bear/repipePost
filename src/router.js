import Vue from "vue";
import Router from "vue-router";
import Top from "../pages/Top.vue";
import recipeInputTitle from "../pages/recipeInputTitle.vue";
import recipeInputInfo from "../pages/recipeInputInfo.vue";

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: "/recipeInputTitle",
            name: "recipeInputTitle",
            component: recipeInputTitle,
        },
        {
            path: "/recipeInputInfo",
            name: "recipeInputInfo",
            component: recipeInputInfo,
        }
    ]
})