<template>
<div>
  <input class="input" autocomplete="off" required :placeholder="placeholder" :type="type"> 
</div>
</template>

<script>
export default {
    name: "Input",

    props: {
        type:{
            type: String,
        },

        placeholder: {
            placeholder: String,
        }
        
    }
}
</script>

<style lang="scss" scoped>
@import "./index.css";
</style>