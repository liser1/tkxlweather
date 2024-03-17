<template>
  <weathershownow />
  <div class="buttpmbox">
    <weekshow />
    <zhishu />
  </div>
</template>
<script>
  import weathershownow from './WeatherShowNow.vue'
  import weekshow from './weekweather/WeekShow.vue'
  import zhishu from './weekweather/Zhishu.vue'
  export default {
    components: {
      weathershownow,
      weekshow,
      zhishu,
    }
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