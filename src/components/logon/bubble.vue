<template>
  <!-- 外部泡泡容器 -->
  <div class="container">
    <!-- 泡泡 -->
    <div class="bubble"></div>
    <!-- 阴影 -->
    <div class="shadow"></div>
  </div>
</template>

<script></script>

<style lang="less" scoped>
/* 定义动画 */
@keyframes bubble {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-80px);
  }
}

@keyframes shadow {
  0%,
  100% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
}

.container {
  position: relative;
  width: 200px;
  height: 200px;

  .bubble {
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 75% 30%,
      #fff 5px,
      #ff21c0 8%,
      #5b5b5b 60%,
      #ff21c0 100%
    );
    border-radius: 50%;
    box-shadow: inset 0 0 20px #fff, inset 10px 0 46px #eaf5fc,
      inset 80px 0 60px #efcde6, inset -20px -60px 100px #f9f6de,
      inset 0 50px 140px #f9f6de, 0 0 90px #fff;
    animation: bubble 4s ease-in-out infinite;
  }

  .shadow {
    position: absolute;
    left: 50%;
    bottom: -100px;
    margin-left: -75px;
    width: 150px;
    height: 40px;
    filter: blur(1px);
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.15);
    animation: shadow 4s ease-in-out infinite;
  }
}
</style>
