<template>
  <div class="main">
    <div class="month">
      <monthshow :activeIndex="activeIndex" @updateIndex="updateIndex" />
      <clickshow :activeIndex="activeIndex" />
    </div>
    <historyshow />
  </div>


</template>
<script>
  import monthshow from './monthweather/MonthShow.vue'
  import clickshow from './monthweather/ClickShow.vue'
  import historyshow from './historyweather/HistoryShow.vue'
  export default {
    components: {
      monthshow,
      clickshow,
      historyshow,
    },
    data() {
      return {
        activeIndex: 0
      }
    },
    methods: {
      updateIndex(index) {
        this.activeIndex = index
      }
    }
  }
</script>
<style scoped lang="less">
  .main {
    width: 1200px;
    margin: 0 auto;

    .month {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>