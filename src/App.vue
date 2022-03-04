<template>
  <div contenteditable="false" @paste="sanitize" id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    sanitize(event) {
      event.preventDefault();
      const html = this.$sanitize(event.clipboardData.getData('text/html'));
      //or
      //const html = this.$sanitize(
      //  event.clipboardData.getData('text/html'),
      //  {
      //    allowedTags: ['b', 'br']
      //  }
      //);
      document.execCommand('insertHTML', false, (html));
    }
  }
}
</script>

<style lang="scss">
@import "./App.scss";
</style>
