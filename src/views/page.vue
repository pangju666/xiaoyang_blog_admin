<template>
  <div class="page">
    <!-- 侧边栏 -->
    <div class="sidebar">
      <!-- 侧边栏标题 -->
      <div class="sidebar-title">
        <img src="../assets/icon.svg" alt="" />
        <span>manage</span>
      </div>
      <!-- 侧边栏ul -->
      <ul class="sidebar-ul">
        <li v-for="(item, index) in sidebar" :key="index">
          <router-link :to="item.path">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>

    <!-- 右侧内容 -->
    <div class="right-main">
      <!-- 头部 面包屑 -->
      <div class="crumbs">
        <ul class="crumbs-ul">
          <li class="crumbs-li" v-for="(item, index) in crumbs" :key="index" @click="goToPage(item.path)">
            {{ item.content }}
          </li>
        </ul>

        <!-- 头像 -->
        <img class="img" src="@/assets/photo.jpg" alt="" />
      </div>
      <!-- 右侧内容 路由渲染出口 -->
      <div class="right--content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { router } from "@/router";
import { ref } from "vue";

// 侧边栏 路由
let sidebar = ref([
  { path: "/page/home", title: "首页" },
  { path: "/page/ArticleManage", title: "文章管理页面" },
  { path: "/page/ArticleEdit", title: "文章编辑页面" },
]);

// 面包屑 路由
let crumbs = ref([
  {
    path: "home",
    content: "Home",
  },
  {
    path: "ArticleManage",
    content: "ArticleManage",
  },
  {
    path: "ArticleEdit",
    content: "ArticleEdit",
  },
]);

// goToPage 方法 点击跳转路由
let goToPage = (value) => {
  router.push({ name: value });
}
</script>

<style lang="less" scoped>
.page::-webkit-scrollbar {
  display: none;
}

.page {
  position: relative;
  overflow: scroll;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #22252a;
  color: #747679;

  /* 侧边栏 */
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    height: 100vh;

    &:hover {
      box-shadow: 1px 0 8px -8px #160b0b;
    }

    /* 侧边栏标题 */
    .sidebar-title {
      display: flex;
      align-items: center;
      padding: 10px;
      margin: 0 10px;
      height: 50px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      img {
        width: 25px;
        height: 25px;
        transition: 1s;
        cursor: pointer;

        &:hover {
          transform: rotate(360deg);
        }
      }

      span {
        margin-left: 10px;
        font-size: 18px;
        color: #e2e4e7;
        cursor: pointer;
      }
    }

    /* 侧边栏ul */
    .sidebar-ul {
      display: flex;
      flex-direction: column;
      background: #22252a;

      li {
        width: 100%;
        height: 50px;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          color: #bbbec2;

          &:hover {
            color: #17c2d7;
          }
        }
      }
    }
  }

  /* 右侧内容 */
  .right-main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 200px;
    height: 100%;
    width: 100px;

    /* 面包屑 */
    .crumbs {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      margin: 0 10px;
      width: 100%;
      height: 50px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      .crumbs-ul {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        list-style-type: none;

        .crumbs-li {
          margin-left: 20px;
          cursor: pointer;

          &:hover {
            color: #17c2d7;
          }
        }
      }

      .img {
        margin-right: 50px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    /* 路由渲染出口 */
    .right--content {
      padding: 20px;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
