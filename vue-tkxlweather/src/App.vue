<template>
  {{ massage }}
</template>

<script>
export default {
  data() {
    return {
      massage: 'Hello World!'
    };
  },
  watch: {},
  computed: {},
  methods: {
    getmassage() {
      axios({
        url:'https://api.map.baidu.com/location/ip',
        method:'get',
        params:{
          ak:'Vo5k5B39CMiFIXG2dzsmNAdIcZkwFX2U'
        }.then(res=>this.massage=res)
      })
    }
  },
  created() {
    
  },
  mounted() {}
};
</script>
<style scoped>
</style>