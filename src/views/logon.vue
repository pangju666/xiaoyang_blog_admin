<template>
  <!-- 登录页面 -->
  <div class="logon">
    <!-- 登录框 -->
    <div class="logon-box">
      <h2 class="title">后台管理页面登录</h2>
      <div class="input">
        <p>
          账号:<input
            v-model.trim="text"
            type="text"
            placeholder="请输入您的账号"
          />
        </p>
        <p>
          密码:<input
            v-model.trim="pass"
            type="password"
            placeholder="请输入您的密码"
          />
        </p>
        <p><button @click="LogonProve">登录</button></p>
      </div>

      <!-- 泡泡特效 -->
      <bubble class="bubble left" />
      <bubble class="bubble right" />
    </div>
  </div>
</template>

<script setup>
// 登录页面泡泡特效
import bubble from "../components/logon/bubble.vue";
import { ref, h } from "vue";
import {router} from "@/router";
import { ElNotification } from "element-plus";

// 账号框 绑定数据
let text = ref("");
// 密码框 绑定数据
let pass = ref("");
//登录验证函数
let LogonProve = () => {
  if (text.value == "123" && pass.value == "123") {
    // 账号为123 密码为123 登录成功
    ElNotification({
      title: "登录成功",
      duration: 5000,
    });
    text.value = "";
    pass.value = "";
    router.push({ name: "page" });
  } else if (text.value == "" || pass.value == "") {
    // 账号密码为空 弹出提示框
    ElNotification({
      title: "登录失败",
      message: "请输入账号或密码",
      duration: 5000,
    });
    text.value = "";
    pass.value = "";
  } else {
    ElNotification({
      title: "登录失败",
      message: "账号或密码错误,请输入正确的账号或密码",
      duration: 5000,
    });
    text.value = "";
    pass.value = "";
  }
};
</script>

<style lang="less" scoped>
/* 登录页面 */
.logon {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 16px;
  background: linear-gradient(150deg, #d299c2, #c9bf79);

  /* 登录框 */
  .logon-box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 300px;
    border-radius: 20px;
    background: #fff;
    opacity: 0.5;
    /* 标题 */
    .title {
      height: 50px;
      line-height: 50px;
      background: linear-gradient(#0055ff, #ff557f, #0055ff);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
    }

    /* input框 */
    .input {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px 0;

      p {
        margin: 20px 0;
      }

      input {
        margin-left: 10px;
        height: 20px;
        width: 250px;
        outline: none;
      }

      button {
        width: 60px;
        height: 40px;
        outline: none;
        cursor: pointer;
      }
    }

    /* 泡泡特效 */
    .bubble {
      position: absolute;
    }
    .left {
      left: -200px;
      top: -150px;
    }
    .right {
      right: -200px;
      bottom: -100px;
    }
  }
}
</style>
