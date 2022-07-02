<template>
  <!-- 文章相关信息列表 -->
  <div class="article-about-info-list">
    <!-- 信息列表 -->
    <ul class="info-list-ul">
      <li class="info-list-li">
        <span>文章类型</span>
        <span>浏览量</span>
        <span>点赞数</span>
        <span>评论量</span>
      </li>
      <li class="info-list-li" v-for="(item, index) in articleInfo" :key="index">
        <span>{{ item.type }}</span>
        <span>{{ item.look }}</span>
        <span>{{ item.star }}</span>
        <span>{{ item.comment }}</span>
      </li>
    </ul>
  </div>


</template>

<script setup>
// 引入
import { ref, defineProps, watch } from "vue";

/*
*   假数据
*     articleInfo: 文章相关信息列表数据
*     data1: 初始假数据1
*     data2: 初始假数据2
*     data3: 初始假数据3
*
*     根据父组件传值 更改articleInfo数据
* */
let articleInfo = ref([]);
let data1 = ref([
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
])
let data2 = ref([
  {
    type: "前端",
    look: 110,
    star: 100,
    comment: 220,
  },
  {
    type: "后端",
    look: 110,
    star: 100,
    comment: 220,
  },
  {
    type: "前端框架",
    look: 110,
    star: 100,
    comment: 220,
  },
  {
    type: "开发工具",
    look: 110,
    star: 100,
    comment: 220,
  },
  {
    type: "数据库",
    look: 110,
    star: 100,
    comment: 220,
  },
  {
    type: "微信小程序",
    look: 110,
    star: 100,
    comment: 220,
  },
  {
    type: "面试题",
    look: 110,
    star: 100,
    comment: 220,
  },
])
let data3 = ref([
  {
    type: "前端",
    look: 1100,
    star: 1000,
    comment: 2200,
  },
  {
    type: "后端",
    look: 1100,
    star: 1000,
    comment: 2200,
  },
  {
    type: "前端框架",
    look: 1100,
    star: 1000,
    comment: 2200,
  },
  {
    type: "开发工具",
    look: 1100,
    star: 1000,
    comment: 2200,
  },
  {
    type: "数据库",
    look: 1100,
    star: 1000,
    comment: 2200,
  },
  {
    type: "微信小程序",
    look: 1100,
    star: 1000,
    comment: 2200,
  },
  {
    type: "面试题",
    look: 1100,
    star: 1000,
    comment: 2200,
  },
])

/* 获取props从父级传递的值 */
const props = defineProps({
  tips: Number
})

/* 监听props的值 */
watch(() => props.tips, (newValue, value) => {
  if (newValue === 3) {
    articleInfo.value = data1.value
  } else if (newValue === 6) {
    articleInfo.value = data2.value
  } else {
    articleInfo.value = data3.value
  }
}, {
  immediate: true  //立刻监听
})


</script>

<style lang="less" scoped>
/* 文章相关信息列表 */
.article-about-info-list {
  margin-top: 20px;
  width: 400px;
  border-top: 1px solid rgba(255, 255, 255, 0.09);

  /* 信息列表 */
  .info-list-ul {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, .125);
    background: #282B2F;
    list-style-type: none;
    box-sizing: border-box;

    .info-list-li {
      display: flex;
      align-items: center;
      height: 50px;
      width: 100%;

      span {
        width: 25%;
        text-align: center;
      }
    }
  }
}
</style>
