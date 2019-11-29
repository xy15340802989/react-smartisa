import {
    Home,
    Classify,
    Cart,
    Mine,
    Login

}from "pages"


export const TabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        icon:"\ue602",
        text:"首页"
    },
    {
        path:"/classify",
        component:Classify,
        meta:{
            flag:true
        },
        icon:"\ue600",
        text:"分类"
    },
    {
        path:"/cart",
        component:Cart,
        meta:{
            flag:true
        },
        icon:"\ue601",
        text:"购物车"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:"\ue65e",
        text:"个人中心"
    }
];

export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{}
    }
];

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute)