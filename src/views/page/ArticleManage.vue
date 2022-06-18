<template>
  <div>
    <!-- 标题 -->
    <pageTitle title="文章管理页面"></pageTitle>
    <!-- 文章管理页面 -->
    <div id="ArticleManage">
      <!-- 文章列表 -->
      <div class="article-list">
        <el-table :data="filterTableData" style="width: 100%">
          <!-- 标题 -->
          <el-table-column label="标题" prop="title" width="400" />
          <!-- 发布时间 -->
          <el-table-column label="发布时间" prop="time" />
          <!-- 文章状态 -->
          <el-table-column label="文章状态">
            <el-button size="small" style="background: #0ccf0c; color: #fff"
              >已发布</el-button
            >
          </el-table-column>
          <!-- 操作按钮 -->
          <el-table-column label="操作">
            <template #default="scope">
              <!-- 删除按钮 -->
              <el-button size="small" @click="handleDelete()" type="danger"
                >删除</el-button
              >
              <!-- 查看评论  value值   max超过这个值 会显示+  -->
              <el-badge
                :value="2"
                :max="99"
                class="item"
                style="margin-left: 10px"
              >
                <el-button size="small" @click="handleArticleComment"
                  >查看评论</el-button
                >
              </el-badge>
            </template>
          </el-table-column>
          <!-- 右侧 搜索框 -->
          <el-table-column align="left" width="150">
            <!-- 搜索框 -->
            <template #header>
              <el-input v-model="search" size="small" placeholder="搜索文章" />
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import {router} from "@/router";
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

// 查看文章评论
const handleArticleComment = () => {
  router.push({ name: "comment" });
};
// 删除文章
const handleDelete = () => {
  console.log("删除成功");
};

//
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

<style lang="less">
/* 文章管理页面 */
#ArticleManage {
  display: flex;
  justify-content: center;
  align-items: center;

  /* 文章列表 */
  .article-list {
    width: 80%;

    .el-table .cell {
      overflow: visible;
    }

    el-table {
      display: flex;
      position: relative;

      .el-table-column {
        flex-grow: 1;
      }
    }
  }
}
</style>
