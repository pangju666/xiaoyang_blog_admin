<template>
  <!-- 
  标题组件:
    使用组件 需要传递一个title值
    
    如: <pageTitle title="值"></pageTitle>

    效果:
        #:值
 -->
  <div class="title">
    <span>#:</span>
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style lang="less" scoped>
/* 标题 */
.title {
  display: flex;
  align-items: center;

  span {
    font-size: 35px;
    color: skyblue;
  }

  h2 {
    margin-left: 5px;
    font-size: 30px;
  }
}
</style>
