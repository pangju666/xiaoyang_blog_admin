<template>
  <!-- 文章管理页面 -->
  <div class="ArticleManage">
    <!-- 文章管理页面头部 -->
    <ul class="article-manage-header">
      <li>标题</li>
      <li>发布时间</li>
      <li>文章状态</li>
      <li>操作</li>
      <li>
        <input type="text" :value="search" placeholder="请输入标题" />
      </li>
    </ul>
    <!-- 文章管理页面内容 -->
    <ul class="article-manage-content">
      <li v-for="(item, index) in tableData" :key="index">
        <!-- 标题 -->
        <span class="child">
          <span class="child-title">{{ item.title }}</span>
        </span>
        <!-- 时间 -->
        <span class="child">{{ item.time }}</span>
        <!-- 文章状态 -->

        <span class="child">
          <div id="button" :class="item.state.icon">{{ item.state.text }}</div>
        </span>
        <!-- 文章操作 -->
        <span class="child">
          <!-- 删除按钮 -->
          <div id="button" class="danger">删除</div>
          <!-- 
            查看评论按钮
              如果 item.state.icon == success  当前的按钮是 发布成功 文章已经发布显示徽章
              否则 当前按钮就是 草稿 文章未发布
          -->
          <!-- 如果 -->
          <template v-if="item.state.icon == `success`">
            <el-badge :value="200" :max="99" class="item">
              <div id="button" class="info">查看评论</div>
            </el-badge>
          </template>
          <!-- 否则 -->
          <template v-else>
            <div id="button" class="info">查看评论</div>
          </template>
        </span>
        <span class="child"></span>
      </li>
    </ul>
  </div>

  <el-pagination
    class="pagination"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[100, 200, 300, 400]"
    :page-size="100"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400"
  >
  </el-pagination>

  <!-- 评论页面 -->
  <comment />
</template>

<script setup>
import { computed, ref } from "vue";
import { router } from "@/router";
import comment from "./comment/ArticleComment";

// 数据
const tableData = [
  {
    title: "使用JavaScript实现字典",
    time: "2016-05-03",
    state: {
      icon: "success",
      text: "已发布",
    },
  },
  {
    title: "使用JavaScript实现字典",
    time: "2016-05-03",
    state: {
      icon: "warning",
      text: "草稿",
    },
  },
  {
    title: "使用JavaScript实现字典",
    time: "2016-05-03",
    state: {
      icon: "success",
      text: "已发布",
    },
  },
  {
    title: "使用JavaScript实现字典",
    time: "2016-05-03",
    state: {
      icon: "success",
      text: "已发布",
    },
  },
  {
    title: "使用JavaScript实现字典",
    time: "2016-05-03",
    state: {
      icon: "success",
      text: "已发布",
    },
  },
  {
    title: "html",
    time: "2016-05-03",
    state: {
      icon: "success",
      text: "已发布",
    },
  },
  {
    title: "微信小程序",
    time: "2016-05-03",
    state: {
      icon: "warning",
      text: "草稿",
    },
  },
  {
    title: "小红",
    time: "2016-05-03",
    state: {
      icon: "warning",
      text: "草稿",
    },
  },
  {
    title: "小黑",
    time: "2016-05-03",
    state: {
      icon: "warning",
      text: "草稿",
    },
  },
  {
    title: "小白",
    time: "2016-05-03",
    state: {
      icon: "warning",
      text: "草稿",
    },
  },
];

// 默认显示第一条
let currentPage = ref(1);

//
let handleSizeChange = (val) => {
  console.log(`每页 ${val} 条`);
};
let handleCurrentChange = (val) => {
  console.log(`当前页: ${val}`);
};
</script>

<style lang="less" scoped>
/* 文章管理页面 */
.ArticleManage {
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* 文章管理页面头部 */
  .article-manage-header {
    display: flex;
    margin: 0 auto;
    width: 90%;
    background: #fff;
    border-radius: 4px;
    color: #606266;
    box-shadow: 4px 4px 40px rgb(0 0 0 / 5%);

    li:nth-child(1) {
      flex-grow: 1;
    }

    li {
      width: 18%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 18px;
      font-weight: bold;

      input {
        width: 130px;
        height: 30px;
        text-indent: 5px;
        color: #40c9c6;
        outline: none;
        border: 1px solid #747679;
        border-radius: 5px;
        background: none;
      }
    }
  }

  /* 文章管理页面内容 */
  .article-manage-content {
    margin: 0 auto;
    width: 90%;

    li {
      display: flex;
      margin-top: 5px;
      height: 50px;
      background: #fff;
      border-radius: 4px;
      box-shadow: 4px 4px 40px rgb(0 0 0 / 5%);

      /* hover效果 */
      &:hover {
        background: #f5f7fa;
      }

      /* 标题 */
      .child:nth-child(1) {
        flex-grow: 1;

        .child-title {
          width: 80%;
          height: 100%;
          text-align: center;
          line-height: 50px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .child {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 18%;
        height: 50px;
        font-size: 14px;
      }
    }
  }
}

.pagination {
  display: flex;
  justify-content: center !important;
  margin-top: 10px;
}

/* 按钮样式公共 */
#button {
  padding: 5px;
  width: 60px;
  height: 30px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
}

/* 成功按钮 */
.success {
  border: 1px solid green;
  color: green;
}

/* 草稿按钮 */
.warning {
  border: 1px solid #e6a23c;
  color: #e6a23c;
}

/* 删除按钮 */
.danger {
  border: 1px solid red;
  color: red;
}

/* 查看评论 */
.info {
  margin-left: 10px;
  width: 70px !important;
  border: 1px solid #747679;
  color: #747679;
}
</style>
