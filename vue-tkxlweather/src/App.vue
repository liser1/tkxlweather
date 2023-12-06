<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import dayweathershow from './components/Dayweathershow.vue'

  export default {
    components: {
      Header,
      Footer,
      dayweathershow
    },
    data() {
      return {
        isload: false
      };
    },
    watch: {},
    computed: {},
    methods: {
    },
    mounted() {
      // this.$store.dispatch('getWeatherShowNow', '')
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

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .el-input__wrapper {
    background-color: transparent !important;
    box-shadow: none !important;
    padding: 0;

  }

  .right {
    .el-input__inner {
      color: white;
      font-size: 16px;
      width: 80px;
      text-align: center;
    }
  }

  .dateselect {
    .el-input__wrapper {
      font-size: 16px;
    }

    .el-input__inner {
      color: #344665;
    }
  }

  .el-input__suffix {
    display: none;
  }
</style>