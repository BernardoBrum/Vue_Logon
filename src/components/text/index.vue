<template>
  <div>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "TextContent",

  props: {
    text: {
      type: String,
    },
  },
};
</script>


<style lang="scss" scoped>
@import "./index.scss";
</style>

