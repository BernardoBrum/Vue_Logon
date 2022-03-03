<template>
  <div class="weather">
    <TextContent class="city" :text="showLocal" />
    <div class="weather-container">
      <img draggable="false" :src="require(`@/assets/icons/${icon}`)" alt="Ícone Clima"/>
      <TextContent class="weather-title" :text="temperature" />
    </div>
  </div>
</template>

<script>
import TextContent from "@/components/text/index.vue";
import { states } from "@/constants/states.js";
import { weatherIcon } from "@/constants/weatherIcon.js"

export default {
  name: "Weather",

  data() {
    return {
      localization: "",
      region: "",
      temperature: "",
      showLocal: "",
      icon: "",
    };
  },

  components: {
    TextContent,
  },

  methods: {
    weather() {
      fetch(
        "https://api.weatherapi.com/v1/current.json?key=8eb8f003f8984fbe9a3172745220802&q=Carangola&aqi=no"
      )
        .then((answer) => answer.json())
        .then((data) => {
          this.temperature = data.current.temp_c.toFixed() + "º";
          let text = data.current.condition.text;
          this.icon = weatherIcon(text)
        });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let latitude = position.coords.latitude
          let longitude = position.coords.longitude

          fetch(
            `https://us1.locationiq.com/v1/reverse.php?key=pk.da18a87b007213afdf2bfcb68688bf43&lat=${latitude}&lon=${longitude}&format=json`
          )
            .then((answer) => answer.json())
            .then((data) => {
              this.city = data.address.town;
              this.state = states(data.address.state);
              this.showLocal = `${this.city} - ${this.state}`
            });
        });
      }
    },
  },

  created() {
    this.weather();
  },
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
