<template>
  <div>
      <TextContent class="timer-number" :text="counter" />
  </div>
</template>

<script>
import Router from "@/router/index.js"
import TextContent from "@/components/text/index.vue"

export default {
    name: "Timer",

    components: {
        TextContent,
    },

    data(){
        return{
            counter: 600
        }
    },

    methods: {
        timer() {
            if (this.counter) {
                this.counter--
            } if (this.counter == 1){
                Router.push("/login")
            }
        }
    },

    created() {
        setInterval(() => {
            this.timer()
        },1000);
    },
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>

