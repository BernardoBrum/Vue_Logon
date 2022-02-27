<template>
  <div class="login-page">
    <LoginLeft />
    <LoginRight />
  </div>
</template>

<script>
import LoginLeft from "@/containers/loginLeft/index.vue";
import LoginRight from "@/containers/loginRight/index.vue";

export default {
  name: "loginPage",
  components: {
    LoginLeft,
    LoginRight,
  },
};
</script>

<style>
.login-page {
  display: flex;
  height: 100vh;
}
</style>