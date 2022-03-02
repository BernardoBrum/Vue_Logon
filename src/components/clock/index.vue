<template>
  <div>
    <TextContent :level="5" :text="clockHours" />
    <TextContent :level="4" :text="clockDate" />
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

      this.clockHours = `${hours < 10 ? "0" : ""}${hours}:${minute}${minute < 10 ? "0" : ""}`
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

<style lang="scss" scoped>
@import "./index.scss";
</style>

