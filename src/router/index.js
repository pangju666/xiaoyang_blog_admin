import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "logon",
    component: () => import("@/views/logon"), //登录页面
  },
  {
    path: "/page",
    name: "page",
    redirect: "/page/home",
    component: () => import("@/views/page"),
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/page/home"), //首页
      },
      {
        path: "ArticleManage",
        name: "ArticleManage",
        component: () => import("@/views/page/ArticleManage"),
        children: [
          {
            path: "comment",
            name: "comment",
            component: () => import("@/views/page/comment/ArticleComment"),
          },
        ],
      },
      {
        path: "ArticleEdit",
        name: "ArticleEdit",
        component: () => import("@/views/page/ArticleEdit"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
