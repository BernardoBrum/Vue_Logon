<template>
  <div class="footer">
    <div class="left-container">
      <div class="phrase-container">
        <TextContent :level="1" text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar." />
      </div>
    </div>
    <div class="right-container">
      <div class="timer">
        <div class="timer-title">
          <TextContent :level="1" text="Aplication" />
          <TextContent :level="1" text="refresh in" />
        </div>
        <div class="timer-counter">
          <Title :level="6" text="600" />
          <TextContent :level="1" text="seconds" />
        </div>
      </div>
      <div class="buttons">
        <div class="stay">
          <TextContent :level="1" text="Continuar" />
          <TextContent :level="1" text="navegando" />
        </div>
        <div class="logout">
          <TextContent :level="1" text="Logout" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextContent from "@/components/text/index.vue";
import Title from "@/components/title/index.vue";

export default {
  components: {
    TextContent,
    Title,
  },
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>>

