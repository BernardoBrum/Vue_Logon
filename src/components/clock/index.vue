<template>
  <div class="clock">
    <TextContent :level="1" class="clock-hours" :text="clockHours" />
    <TextContent :level="1" class="clock-date" :text="clockDate" />
  </div>
</template>

<script>
import TextContent from "@/components/text/index.vue"
import {weekDay} from "@/constants/weekDay.js"
import {monthYear} from "@/constants/monthYear.js"

export default {
  name: "Clock",

  data() {
    return {
      clockDate: "",
      clockHours: "",
      monthYear: "",
      weekDay:"",
      day: "",
      hours: "",
      minute: "",
      week: "",
      month: "",
      year: "",
    };
  },

  components: {
    TextContent,
  },

  methods: {
    clock() {
      let date = new Date();
      let day = date.getDate();
      this.day = day;
      let hours = date.getHours();
      this.hours = hours;
      let minute = date.getMinutes();
      this.minute = minute;
      let week = date.getDay();
      this.week = week;
      let month = date.getMonth();
      this.month = month;
      let year = date.getFullYear();
      this.year = year;

      this.clockHours = `${hours < 10 ? "0" : ""}${hours}:${minute < 10 ? "0" : ""}${minute}`
      this.weekDay = `${weekDay[week]}`
      this.monthYear = `${monthYear[month]}`
      this.clockDate = `${weekDay[week]}, ${day} de ${monthYear[month]} de ${year}`
    },
  },

  created(){
    setInterval(() => {
        this.clock()
    }, 1000);
  },
}

</script>

<style scoped lang="scss">
@import "./index.scss";
</style>

