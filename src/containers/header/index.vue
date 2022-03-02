<template>
  <div class="header">
    <div class="logo">
      <img draggable="false" src="@/assets/logoPreto.png" alt="Logo Compasso" />
    </div>
    <div class="clock">
      <Clock />
    </div>
    <div class="weather">
      <p>Passo Fundo - RS</p>
      <div class="weather-container">
        <img draggable="false" src="@/assets/icons/cloud.png" alt="Ícone Clima">
        <h1 class="weather-title">22º</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Clock from "@/components/clock/index.vue"

export default {
  components: {
    Clock,
  },
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>