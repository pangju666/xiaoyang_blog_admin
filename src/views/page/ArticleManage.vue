<template>
  <!-- 文章管理页面 -->
  <div class="ArticleManage">
    <!-- 标题 -->
    <pageTitle title="文章管理页面"></pageTitle>
    <!-- 文章管理页面头部 -->
    <ul class="article-manage-header">
      <li>标题</li>
      <li>发布时间</li>
      <li>文章状态</li>
      <li>操作</li>
      <li>搜索框</li>
    </ul>
    <ul>
      <li v-for="(item, index) in tableData" :key="index"></li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { router } from "@/router";
import pageTitle from "../../components/pageTitle.vue";
const search = ref("");

// 数据监听 监视搜索框内容 显示对应数据
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.title.toLowerCase().includes(search.value.toLowerCase())
  )
);



// 数据
const tableData = [
  {
    title: "使用JavaScript实现字典",
    time: "2016-05-03",
  },
  {
    title: "使用JavaScript实现字典",
    time: "2016-05-03",
  },
  {
    title: "使用JavaScript实现字典",
    time: "2016-05-03",
  },
  {
    title: "使用JavaScript实现字典",
    time: "2016-05-03",
  },
  {
    title: "使用JavaScript实现字典",
    time: "2016-05-03",
  },
  {
    title: "html",
    time: "2016-05-03",
  },
  {
    title: "微信小程序",
    time: "2016-05-03",
  },
  {
    title: "小红",
    time: "2016-05-03",
  },
  {
    title: "小黑",
    time: "2016-05-03",
  },
  {
    title: "小白",
    time: "2016-05-03",
  },
  {
    title: "小羊",
    time: "2016-05-03",
  },
  {
    title: "小羊",
    time: "2016-05-03",
  },
];
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
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-top: 1px solid rgba(255, 255, 255, 0.09);
    background: #282B2F;
    border-radius: 4px;

    li:nth-child(1) {
      flex-grow: 1;
      text-indent: 10px;
    }

    li {
      width: 15%;
      height: 50px;
      line-height: 50px;
    }
  }
}
</style>
