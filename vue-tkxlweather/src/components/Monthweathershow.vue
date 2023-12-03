<template>
  <div class="main">
    <monthshow :activeIndex="activeIndex" @updateIndex="updateIndex" />
    <clickshow :activeIndex="activeIndex" />
  </div>
</template>
<script>
  import monthshow from './monthweather/MonthShow.vue'
  import clickshow from './monthweather/ClickShow.vue'
  export default {
    components: {
      monthshow,
      clickshow
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
    display: flex;
    justify-content: space-between;
  }
</style>