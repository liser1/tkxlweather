<template>
  <aqiimshow />
  <aqiknowledge />
</template>
<script>
  import aqiimshow from './aqishow/AqiImshow.vue'
  import aqiknowledge from './aqishow/AqiKnowledge.vue'
  export default {
    components: {
      aqiimshow,
      aqiknowledge,
    }
  }
</script>