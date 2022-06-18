<template>
  <!-- 文章相关信息列表 -->
  <div class="article-about-info-list">
    <!-- 信息列表 -->
    <el-table :data="articleInfo" height="250" style="width: 100%">
      <el-table-column prop="type" label="文章类型" width="200" />
      <el-table-column prop="look" label="浏览量" />
      <el-table-column prop="star" label="点赞数" />
      <el-table-column prop="comment" label="评论量" />
    </el-table>
  </div>
</template>

<script setup>
// 引入
import { ref } from "vue";

//  文章相关信息列表
let articleInfo = ref([
  {
    type: "前端",
    look: 11,
    star: 10,
    comment: 22,
  },
  {
    type: "后端",
    look: 11,
    star: 10,
    comment: 22,
  },
  {
    type: "前端框架",
    look: 11,
    star: 10,
    comment: 22,
  },
  {
    type: "开发工具",
    look: 11,
    star: 10,
    comment: 22,
  },
  {
    type: "数据库",
    look: 11,
    star: 10,
    comment: 22,
  },
  {
    type: "微信小程序",
    look: 11,
    star: 10,
    comment: 22,
  },
  {
    type: "面试题",
    look: 11,
    star: 10,
    comment: 22,
  },
]);
</script>

<style lang="less" scoped>
/* 文章相关信息列表 */
</style>
