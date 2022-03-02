<template>
  <div class="content">
    <div class="globe-container">
      <img
        class="globe"
        draggable="false"
        src="@/assets/globoCompass.png"
        alt=""
      />
    </div>
    <div class="text-content">
      <Title class="title" :level="3" text="Our mission is" />
      <TextContent class="paragraph" text="Nossa missão é" />
      <Title class="title" :level="4" text="to transform the world" />
      <TextContent class="paragraph" text="transformar o mundo" />
      <Title class="title" :level="4" text="building digital experiences" />
      <TextContent class="paragraph" text="construindo experiências digitais" />
      <Title class="title" :level="4" text="that enable our client’s growth" />
      <TextContent class="paragraph" text="que permitam o crescimento dos nossos clientes" />
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
</style>>
