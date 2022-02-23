<template>
  <div>
      <h1>{{ text }}</h1>
      <button @click="aumentar">Aumentar em 2</button>
      <p>Número: {{ numero }}</p>
  </div>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {
      numero: 10
    }
  },

  methods: {
    aumentar() {
      this.numero += 2;
    }
  },

  props: {
    text: {
      type: String,
      default: "Valor padrão",
    },
  },
};
</script>

<style>
h1 {
  color: blue;
}

</style>