<template>
  <div class="page">
    <!-- 侧边栏 -->
    <ul class="sidebar-ul" ref="mySidebar">
      <li v-for="(item, index) in sidebar" :key="index">
        <i
          :class="item.icon"
          @click="
            goToPage(item.name);
            addRouter(item.name, item.title);
          "
        ></i>
        <router-link
          :to="item.path"
          @click="addRouter(item.name, item.title)"
          >{{ item.title }}</router-link
        >
      </li>
    </ul>

    <!-- 右侧内容 -->
    <div class="right-main" ref="rightMain">
      <!-- 头部 面包屑 -->
      <div class="crumbs">
        <!-- 上半部分内容 -->
        <div class="crumbs-top-content">
          <!-- 图标容器 -->
          <div class="iconfont-block" @click="ChangeSidebarWidth">
            <i class="iconfont icon-shouye"></i>
          </div>
          <!-- 标题 -->
          <span class="title">首页</span>
          <!-- 头像 -->
          <img class="img" src="@/assets/photo.jpg" alt="" />
        </div>
        <!-- 下半部分内容 -->
        <div class="crumbs-bottom-content">
          <button
            v-for="(item, index) in HistoryButton"
            :key="index"
            @click="goToPage(item.path)"
          >
            {{ item.name }}
          </button>
        </div>
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
import { ref, onMounted } from "vue";

// 侧边栏 路由
let sidebar = ref([
  {
    path: "/page/home",
    title: "首页",
    icon: "iconfont icon-shouye",
    name: "home",
  },
  {
    path: "/page/ArticleManage",
    title: "文章管理页面",
    icon: "iconfont icon-wenzhangguanli",
    name: "ArticleManage",
  },
  {
    path: "/page/ArticleEdit",
    title: "文章编辑页面",
    icon: "iconfont icon-bianji",
    name: "ArticleEdit",
  },
]);

// 历史按钮
let HistoryButton = ref([
  {
    name: "首页",
    path: "home",
  },
]);

let mySidebar = ref(null);
let rightMain = ref(null);
let domSidebar = ref();
let domMain = ref();

// 获取dom元素
onMounted(() => {
  domSidebar.value = mySidebar.value;
  domMain.value = rightMain.value;
});

//改变侧边栏宽度
let ChangeSidebarWidth = () => {
  if (domSidebar.value.offsetWidth == "200") {
    domSidebar.value.style.width = "55px";
    domMain.value.style.marginLeft = "55px";
  } else {
    domSidebar.value.style.width = "200px";
    domMain.value.style.marginLeft = "200px";
  }
};

// 点击 跳转路由
let goToPage = (name) => {
  router.push({ name: name });
};

// 添加路由
let addRouter = (path, title) => {
  for (let i = 0; i < HistoryButton.value.length; i++) {
    if (
      HistoryButton.value[i].name == title &&
      HistoryButton.value[i].path == path
    ) {
      return;
    } else {
      HistoryButton.value.push({
        name: title,
        path: path,
      });
      console.log(HistoryButton.value);
      return;
    }
    return;
  }
};
</script>

<style lang="less" scoped>
/* 隐藏页面滚动条 */
.page::-webkit-scrollbar {
  display: none;
}

.page {
  overflow: scroll !important;
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  color: rgb(191, 203, 217);

  /* 侧边栏ul */
  .sidebar-ul {
    position: fixed;
    left: 0;
    top: 0;
    overflow: hidden;
    width: 200px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #304156;
    transition: 1s;

    li {
      display: flex;
      align-items: center;
      width: 100%;
      height: 50px;

      &:hover {
        background: #263445;
      }

      a {
        flex-grow: 1;
        font-size: 15px;
        white-space: nowrap;
        color: rgb(191, 203, 217);
      }

      .iconfont {
        margin: 0 20px;
        font-size: 20px;
        cursor: pointer;
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
    width: 80px;
    color: #606266;
    transition: all 1s;

    /* 面包屑 */
    .crumbs {
      width: 100%;
      height: 80px;
      background: #fff;
      color: #000;

      /* 上半部分内容 */
      .crumbs-top-content {
        display: flex;
        width: 100%;
        height: 50px;
        box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

        .iconfont-block {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;

          .iconfont {
            font-size: 30px;
            cursor: pointer;
          }

          &:hover {
            background: #f0f2f5;
          }
        }

        .title {
          display: flex;
          align-items: center;
          flex-grow: 1;
          text-indent: 10px;
          font-size: 16px;
        }

        img {
          margin-right: 20px;
          width: 45px;
          height: 45px;
          border-radius: 50%;
        }
      }

      /* 下半部分内容 */
      .crumbs-bottom-content {
        display: flex;
        align-items: center;
        width: 100%;
        height: 30px;

        button {
          margin: 0 10px;
          padding: 0 10px;
          height: 80%;
          outline: none;
          border: 1px solid #d8dce5;
          color: #495060;
          background: #ffffff;
          box-sizing: border-box;
          cursor: pointer;

          &:last-child {
            background: #42b983;
            color: #fff;
          }
        }
      }
    }

    /* 路由渲染出口 */
    .right--content {
      padding: 20px;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      background: #f0f2f5;
    }
  }
}
</style>
