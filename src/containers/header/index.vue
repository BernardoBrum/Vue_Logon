<template>
  <div class="header">
    <div class="logo">
      <img draggable="false" src="@/assets/logoPreto.png" alt="Logo Compasso" />
    </div>
    <div class="clock">
      <Clock />
    </div>
    <div class="weather">
      <Weather />
    </div>
  </div>
</template>

<script>
import Weather from "@/components/weather/index.vue";
import Clock from "@/components/clock/index.vue";

export default {
  components: {
    Clock,
    Weather,
  },

  created() {
    const title = document.getElementById("window-title");
    title.innerText = "Home - Compass";
  },
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>