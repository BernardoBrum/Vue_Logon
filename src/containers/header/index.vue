<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/logoPreto.png" alt="" />
    </div>
    <div class="clock">
      <Title class="clock-hours" :level="3" text="11:26" />
      <TextContent :level="1" text="terça-feira, 17 de março de 2020" />
    </div>
    <div class="weather">
      <p>Passo Fundo - RS</p>
      <div class="weather-container">
        <img src="@/assets/icons/cloud.png" alt="">
        <h1 class="weather-title">22º</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/title/index.vue";
import TextContent from "@/components/text/index.vue";

export default {
  components: {
    Title,
    TextContent,
  },
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>