<template>
  <div v-if="isload">
    <Header></Header>
    <weathershownow />
    <router-view></router-view>
    <Footer></Footer>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
  import axios from 'axios'
  import Header from './components/Header.vue'
  import weathershownow from './components/WeatherShowNow.vue'
  import Footer from './components/Footer.vue'
  import dayweathershow from './components/Dayweathershow.vue'

  export default {
    components: {
      Header,
      weathershownow,
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
      async getdata() {
        try {
          await this.$store.dispatch('getweathershownow', '')
          await this.delay(1000)
          console.log('提前执行了');
          this.isload = true
        } catch (error) {
          console.error('Error fetching weather data:', error)
          // 处理错误
        }
      },
      delay(ms) {
        return new Promise(resolve => {
          setTimeout(resolve, ms);
        });
      }
    },
    mounted() {
      this.getdata()
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