<template>
  <div>
      <div>
          <img src="@/assets/sad.png" alt="Error">
      </div>
      <TextContent class="error-type" text="401" />
      <TextContent class="unauthorized" text="Unauthorized" />
      <TextContent class="message" text="You do not have permission to view this directory or page using the credentials that you supplied."/>
  </div>
</template>

<script>
import TextContent from "@/components/text/index.vue";
export default {
  name: "Error401",

  components: {
    TextContent,
  },

  created() {
    const title = document.getElementById("window-title");
    title.innerText = "Error 401 - Unauthorized";
  },
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>