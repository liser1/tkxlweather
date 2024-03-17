<template>
  <div class="hourechartsbox">
    <div class="top">
      <h1 class="title">24小时{{data}}曲线</h1>
      <div class="selectButtonBox" @click="titlechange">
        <router-link to="/dayweathershow/tem">温度</router-link>
        <router-link to="/dayweathershow/wind">风力</router-link>
        <router-link to="/dayweathershow/air">空气质量</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
  import * as echarts from 'echarts'
  export default {
    data() {
      return {
        data: '温度',
      }
    },
    methods: {
      titlechange(e) {
        if (e.target.tagName === 'A') {
          this.data = e.target.innerText;
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .hourechartsbox {
    box-sizing: border-box;
    padding: 20px 30px 5px;
    margin: 30px auto;
    width: 1200px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, .2);

    .top {
      color: #344665;
      margin-bottom: 20px;
      width: 1140px;
      height: 20px;

      .title {
        font-size: 18px;
        float: left;
        font-weight: 400;
        height: 20px;
        line-height: 20px;
        margin-right: 10px;
      }

      .title::before {
        content: '';
        float: left;
        margin-top: 9px;
        margin-right: 10px;
        width: 7px;
        height: 7px;
        background: #344665;
        border-radius: 50%;
      }

      .selectButtonBox {
        float: right;
        margin-right: 30px;
        display: flex;
        width: 250px;
        justify-content: space-between;

        a {
          line-height: 20px;
          padding: 4px 15px;
          border-radius: 15px;
        }

        span:hover {
          background-color: #c0c9db;
          cursor: pointer;
        }

        .router-link-active {
          background-color: #c0c9db;
        }
      }
    }



    #hourecharts {
      margin: 0 auto;
      width: 1100px;
      height: 260px;
    }
  }
</style>