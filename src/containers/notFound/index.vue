<template>
  <div>
      <div>
          <img src="@/assets/sad.png" alt="Error">
      </div>
      <TextContent class="error-type" text="404" />
      <TextContent class="not-found" text="Page not found" />
      <TextContent class="message" text="The page you are looking for doesn't exist or another error ocurred"/>
  </div>
</template>

<script>
import TextContent from "@/components/text/index.vue";
export default {
  name: "Error404",

  components: {
    TextContent,
  },

  created() {
    const title = document.getElementById("window-title");
    title.innerText = "Error 404 - Not Found";
  },
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>