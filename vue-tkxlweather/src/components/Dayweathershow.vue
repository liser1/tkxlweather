<template>
  <weathershownow />
  <hourshow />
  <dayecharts />
</template>

<script>
  import weathershownow from './WeatherShowNow.vue'
  import dayecharts from './DayEcharts.vue'
  import hourshow from './HourShow.vue'
  export default {
    components: {
      weathershownow,
      hourshow,
      dayecharts
    },
  }
</script>