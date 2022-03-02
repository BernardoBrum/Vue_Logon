<template>
  <div>
    <p v-if="level === 1">{{ text }}</p>
    <p v-if="level === 2" class="content-p">{{ text }}</p>
    <p v-if="level === 3" class="error-msg">{{ text }}</p>
    <p v-if="level === 4" class="clock-date">{{ text }}</p>
    <p v-if="level === 5" class="clock-hours">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "TextContent",

  props: {
    text: {
      type: String,
    },

    level: {
      type: Number,
      required: true,
    },
  },
};
</script>


<style scoped lang="scss">
@import "./index.scss";
</style>



