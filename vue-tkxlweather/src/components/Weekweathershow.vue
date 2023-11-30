<template>
  <div class="buttpmbox">
    <weekshow />
    <zhishu />
  </div>
</template>
<script>
  import weekshow from './weekweather/WeekShow.vue'
  import zhishu from './weekweather/Zhishu.vue'
  export default {
    components: {
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