<template>
  <weathershownow />
  <hourshow />
  <dayecharts />
  <div class="buttpmbox">
    <weekshow />
  </div>
</template>

<script>
  import weathershownow from './WeatherShowNow.vue'
  import dayecharts from './DayEcharts.vue'
  import hourshow from './HourShow.vue'
  import weekshow from './WeekShow.vue'
  export default {
    components: {
      weathershownow,
      hourshow,
      weekshow,
      dayecharts
    },
  }
</script>
<style scoped lang="less">
  .buttpmbox {
    width: 1200px;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
  }
</style>