<template>
  <!-- 文章编辑发布 -->
  <div class="article-edit">
    <!-- 文章编辑页面盒子 -->
    <div class="article-edit-page-box">
      <!-- 文章编辑页面盒子头部 -->
      <div class="article-edit-page-box-top">
        <!-- 文章类型选择框 -->
        <div class="article-type-select">
          <el-select v-model="valueType" clearable placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <!-- 文章标题框 -->
        <div class="article-title">
          <el-input v-model="input" placeholder="文章标题" clearable />
        </div>
        <!-- 按钮 -->
        <div class="article-button">
          <!-- 发布文章按钮 -->
          <el-button type="primary" plain>发布文章</el-button>
          <!-- 存人草稿按钮 -->
          <el-button type="warning" plain>存入草稿</el-button>
        </div>
      </div>
    </div>

    <!-- 文章编辑页面内容 -->
    <div class="article-edit-page-content"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 文章类型选择框 数据
const valueType = ref("前端");
const options = [
  {
    value: "前端",
    label: "前端",
  },
  {
    value: "后端",
    label: "后端",
  },
  {
    value: "前端框架",
    label: "前端框架",
  },
  {
    value: "开发工具",
    label: "开发工具",
  },
  {
    value: "数据库",
    label: "数据库",
  },
  {
    value: "微信小程序",
    label: "微信小程序",
  },
];

// 文章标题数据

// 文章编辑页面
let value = "";
</script>

<style lang="less" scoped>
/* 文章编辑页面 */
.article-edit {
  /* 文章编辑盒子 */
  .article-edit-page-box {
    padding: 20px;
    box-sizing: border-box;
    /* 文章编辑盒子头部 */
    .article-edit-page-box-top {
      display: flex;

      /* 文章标题 */
      .article-title {
        margin: 0 20px;
      }
    }
  }
}
</style>
