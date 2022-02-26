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


<style scoped lang="scss">
@import "./index.scss";
</style>



