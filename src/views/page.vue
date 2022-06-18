<template>
  <div class="page">
    <!-- 侧边栏 -->
    <div class="sidebar">
      <!-- 侧边栏标题 -->
      <p class="sidebar-title">后台管理系统</p>
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
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item
            v-for="(item, index) in crumbs"
            :key="index"
            :to="{ path: item.path }"
            >{{ item.content }}</el-breadcrumb-item
          >
        </el-breadcrumb>
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
import { ref } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";

// 侧边栏 路由
let sidebar = ref([
  { path: "/page/home", title: "首页" },
  { path: "/page/ArticleManage", title: "文章管理页面" },
  { path: "/page/ArticleEdit", title: "文章编辑页面" },
]);

// 面包屑 路由
let crumbs = ref([
  {
    path: "/page/home",
    content: "Home",
  },
  {
    path: "/page/ArticleManage",
    content: "ArticleManage",
  },
  {
    path: "/page/ArticleEdit",
    content: "ArticleEdit",
  },
]);
</script>

<style lang="less" scoped>
.page {
  display: flex;
  width: 100%;
  height: 100vh;

  /* 侧边栏 */
  .sidebar {
    width: 200px;
    height: 100%;
    background: #545c64;

    /* 侧边栏标题 */
    .sidebar-title {
      height: 70px;
      line-height: 70px;
      text-align: center;
      font-size: 22px;
      color: rgb(177, 169, 169);
    }

    /* 侧边栏ul */
    .sidebar-ul {
      display: flex;
      flex-direction: column;
      li {
        width: 100%;
        height: 50px;

        &:hover {
          background: #434a50;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          color: rgb(177, 169, 169);

          &:hover {
            color: rgb(233, 233, 53);
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
    height: 100%;
    width: 100px;
    /* 面包屑 */
    .crumbs {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      width: 100%;
      height: 70px;
      box-sizing: border-box;
      background: #eeee;

      .img {
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
      background: #fff;
    }
  }
}
</style>
