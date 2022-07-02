<template>
  <!-- 首页 -->
  <div class="home">
    <!-- 头部 标签信息显示 -->
    <div class="header-label-info-display">
      <!-- 标签 -->
      <div class="label" v-for="(item, index) in HeaderLabelInfo" :key="index">
        <!-- 标签图标 -->
        <div class="label-icon"><i :class="item.icon"></i></div>
        <!-- 标签信息 -->
        <div class="label-info">
          <span class="top">{{ item.title }}</span>
          <span class="bottom">{{ item.num }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 引入
import { ref } from "vue";

//头部标签信息显示
let HeaderLabelInfo = ref([
  {
    icon: "iconfont icon-renshu",
    title: "使用人数",
    num: "102,400",
  },
  {
    icon: "iconfont icon-wenzhang",
    title: "文章数量",
    num: "102,400",
  },
  {
    icon: "iconfont icon-liulan",
    title: "浏览量",
    num: "102,400",
  },
  {
    icon: "iconfont icon-pinglun",
    title: "评论数量",
    num: "102,400",
  },
]);
</script>

<style lang="less" scoped>
/* 首页 */
.home {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  /* 头部 标签信息显示 */
  .header-label-info-display {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 108px;
    /* 标签 */
    .label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 20px;
      width: 25%;
      height: 100%;
      background: #fff;
      box-shadow: 4px 4px 40px rgb(0 0 0 / 5%);

      &:hover {
        .label-icon {
          background: #40c9c6;

          .iconfont {
            color: #fff;
          }
        }
      }

      /* 标签图标 */
      .label-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
        width: 80px;
        height: 80px;
        transition: all 1s;
        border-radius: 10px;

        .iconfont {
          font-size: 48px;
          color: #40c9c6;
          transition: all 1s;
        }
      }

      /* 标签信息 */
      .label-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 20px;
        width: 100px;
        height: 55px;

        .top {
          font-size: 16px;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.45);
        }

        .bottom {
          font-size: 20px;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
