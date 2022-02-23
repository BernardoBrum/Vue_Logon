<template>
  <div>
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

</style>
