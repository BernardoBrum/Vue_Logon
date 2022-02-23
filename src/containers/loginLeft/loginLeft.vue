<template>
  <div>
    <Title :level="1" text="Olá," />
    <TextContent text="Para continuar navegando de forma segura, efetue o login na rede." />
  </div>
</template>

<script>
import Title from "@/components/title/index.vue"
import TextContent from "@/components/text/index.vue"

export default {
  name: 'LoginLeft',
  components: {
    Title,
    TextContent,
  },
};

</script>

<style>

</style>