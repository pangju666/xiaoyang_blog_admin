<template>
  <div class="home">
    <!-- 头部内容 -->
    <div class="home-top">
      <!-- 左侧内容 -->
      <div class="left">
        <pageTitle title="首页"></pageTitle>
        <!-- 单选框 选择显示内容 -->
        <el-radio-group class="el-radio-group" v-model="radio" @change="change">
          <el-radio :label="3">今日</el-radio>
          <el-radio :label="6">这周</el-radio>
          <el-radio :label="9">今年</el-radio>
        </el-radio-group>
        <!-- 文章相关信息列表 -->
        <ArticleAboutInfoList :tips="numTips"></ArticleAboutInfoList>
      </div>
      <!-- 中间内容 -->
      <div class="center">
        <ArticleSector></ArticleSector>
      </div>
    </div>

    <!-- 底部内容 -->
    <div class="home-bottom"></div>
  </div>
</template>

<script setup>
// 引入
import { ref } from "vue";

//组件
import pageTitle from "../../components/pageTitle.vue";
import ArticleAboutInfoList from "../../components/custom/home/ArticleAboutInfoList.vue";
import ArticleSector from "../../components/custom/home/ArticleSector.vue";

// 单选框默认显示  radio == 3  显示今日
const radio = ref(3);
const change = (value) => {
  numTips.value = value
};

const numTips = ref(3)
</script>

<style lang="less" scoped>
/* 首页 */
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  /* 头部内容 */
  .home-top {
    display: flex;
  }


  /* 底部内容 */
  .home-bottom {
    background: skyblue;
  }
}
</style>
