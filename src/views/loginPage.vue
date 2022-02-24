<template>
  <div class="login-page">
      <loginLeft />
      <loginRight />
  </div>
</template>

<script>
import loginLeft from "@/containers/loginLeft/loginLeft.vue"
import loginRight from "@/containers/loginRight/loginRight.vue"

export default {
    name: "loginPage",
    components: {
        loginLeft,
        loginRight
    }
}
</script>

<style>
.login-page {
    display: flex;
    height: 100vh;
}
</style>