<template>
  <Header></Header>
  <weathershownow />
  <dayecharts />
</template>

<script>
  import axios from 'axios'
  import Header from './components/Header.vue'
  import weathershownow from './components/WeatherShowNow.vue'
  import dayecharts from './components/DayEcharts.vue'

  export default {
    components: {
      Header,
      weathershownow,
      dayecharts
    },
    data() {
      return {
        massage: 'Hello World!'
      };
    },
    watch: {},
    computed: {},
    methods: {

    },
    created() {

    },
    mounted() {
      this.$store.dispatch('getweathershownow', '')
    }
  };
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, rgb(85, 105, 255), rgb(120, 192, 255));
  }

  .el-input__wrapper {
    background-color: transparent !important;
    box-shadow: none !important;
    padding: 0;

  }

  .el-input__inner {
    color: white !important;
    font-size: 16px;
    width: 80px;
    text-align: center;
  }

  .el-input__suffix {
    display: none;
  }
</style>