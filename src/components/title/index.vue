<template>
  <div>
    <h1 v-if="level === 1">{{ text }}</h1>
    <h2 v-if="level === 2">{{ text }}</h2>
    <h3 v-if="level === 3">{{ text }}</h3>
    <h4 v-if="level === 4">{{ text }}</h4>
  </div>
</template>

<script>
export default {
  name: "Title",

  props: {
    text: {
      type: String,
    },

    level: {
      type: Number,
      required: true
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>