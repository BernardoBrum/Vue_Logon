<template>
  <div>
      <TextContent class="timer-number" :number="counter" />
  </div>
</template>

<script>
import TextContent from "@/components/text/index.vue"

export default {
    name: "Timer",

    components: {
        TextContent,
    },

    data(){
        return{
            counter: ""
        }
    },

    methods: {
        timer() {
            this.counter--;
        }
    },

    created() {
        setInterval(() => {
            this.counter = 600
            this.timer()
        },1000);
    },
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>

