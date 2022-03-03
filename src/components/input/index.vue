<template>
  <div>
    <input
      @blur="callMutation"
      class="input"
      autocomplete="off"
      required
      :placeholder="placeholder"
      :type="type"
      v-model="input"
    />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Input",

  data() {
    return{
      input: "",
    }
  },

  props: {
    type: {
      type: String,
    },

    placeholder: {
      placeholder: String,
    },
  },

  methods: {
    ...mapMutations(["User", "Password"]),

    callMutation() {
      if(this.type === "text") {
        this.User(this.input)
      } else if (this.type === "password") {
        this.Password(this.input)
      }
    }
  }, 

  computed: {
    ...mapState(["user", "password"])
  }
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>