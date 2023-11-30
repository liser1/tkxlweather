<template>

  <hourshow />
  <dayecharts />

</template>

<script>
  import dayecharts from './DayEcharts.vue'
  import hourshow from './HourShow.vue'
  export default {
    components: {
      hourshow,
      dayecharts
    },
  }
</script>