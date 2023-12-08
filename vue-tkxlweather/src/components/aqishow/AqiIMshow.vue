<template>
  <div class="aqishowbox">
    <div class="top">
      <h1 class="title">{{$store.state.weatherdata.city}}空气质量详情</h1>
      <div class="button">
        <a @click="this.$router.go(-1)">返回</a>
      </div>
    </div>
    <div class="main">
      <div class="left">
        <h2>空气指数<span id="update_time">最近{{$store.state.weatherdata.update_time}}更新</span></h2>
        <aqiecharts />
        <p>{{$store.state.weatherdata.aqi.air_tips}}</p>
      </div>
      <div class="middle">
        <h2>主要污染物</h2>
        <div class="aqibox">
          <div class="smallbox">
            <p>PM2.5</p>
            <span>{{$store.state.weatherdata.aqi.pm25}}</span>
            <el-progress :percentage="+$store.state.weatherdata.aqi.pm25/5" :show-text='false' :color="aqicolor" />
          </div>
          <div class="smallbox">
            <p>PM10</p>
            <span>{{$store.state.weatherdata.aqi.pm10}}</span>
            <el-progress :percentage="+$store.state.weatherdata.aqi.pm10/5" :show-text='false' :color="aqicolor" />
          </div>
          <div class="smallbox">
            <p>O3</p>
            <span>{{$store.state.weatherdata.aqi.o3}}</span>
            <el-progress :percentage="+$store.state.weatherdata.aqi.o3/5" :show-text='false' :color="aqicolor" />
          </div>
          <div class="smallbox">
            <p>NO2</p>
            <span>{{$store.state.weatherdata.aqi.no2}}</span>
            <el-progress :percentage="+$store.state.weatherdata.aqi.no2/5" :show-text='false' :color="aqicolor" />
          </div>
          <div class="smallbox">
            <p>SO2</p>
            <span>{{$store.state.weatherdata.aqi.so2}}</span>
            <el-progress :percentage="+$store.state.weatherdata.aqi.so2/5" :show-text='false' :color="aqicolor" />
          </div>
          <div class="smallbox">
            <p>CO</p>
            <span>{{$store.state.weatherdata.aqi.co}}</span>
            <el-progress :percentage="+$store.state.weatherdata.aqi.co/5" :show-text='false' :color="aqicolor" />
          </div>
        </div>
      </div>
      <div class="right">
        <h2>温馨提示</h2>
        <div class="box">
          <div class="jianyi">
            <img src="/icon/kouzhao.png">
            <p>{{$store.state.weatherdata.aqi.kouzhao}}</p>
          </div>
          <div class="jianyi">
            <img src="/icon/yundong.png">
            <p>{{$store.state.weatherdata.aqi.yundong}}</p>
          </div>
          <div class="jianyi">
            <img src="/icon/waichu.png">
            <p>{{$store.state.weatherdata.aqi.waichu}}</p>
          </div>
          <div class="jianyi">
            <img src="/icon/kaichuang.png">
            <p>{{$store.state.weatherdata.aqi.kaichuang}}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import aqiecharts from './AqiEcharts.vue'
  export default {
    components: {
      aqiecharts,
    },
    computed: {
      aqicolor() {
        let color = ''
        if (this.$store.state.weatherdata.aqi.air_level == '优') {
          color = '#a3d765'
        } else if (this.$store.state.weatherdata.aqi.air_level == '良') {
          color = '#f0cc35'
        } else if (this.$store.state.weatherdata.aqi.air_level == '轻度污染' || this.$store.state.weatherdata.aqi.air_level == '中度污染') {
          color = '#f0b835'
        } else {
          color = '#f03535'
        }
        return color
      },
    },
  }
</script>
<style scoped lang="less">
  .aqishowbox {
    width: 1160px;
    margin: 0 auto;
    color: #344665;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, .2);
    padding: 0 20px;

    h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .top {
      height: 20px;
      padding: 20px 0;

      .title {
        font-size: 18px;
        font-weight: 400;
        height: 20px;
        line-height: 20px;
        float: left;
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

      .button {
        float: right;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
          text-align: center;
          width: 85px;
          height: 24px;
          line-height: 24px;
          font-size: 12px;
          color: #384c78;
          border-radius: 12px;
          background-color: #d6ddec;
          border: 1px solid #bdc5ce;
        }

        a:hover {
          background-color: #c0c9db;
          cursor: pointer;
        }
      }
    }

    .main {
      display: flex;
      justify-content: space-evenly;

      .left {
        height: 350px;



        #update_time {
          font-size: 14px;
          opacity: 0.6;
          font-weight: 400;
        }

        p {
          width: 450px;
          text-align: center;
          margin-top: -30px;
        }
      }

      .middle {

        .aqibox {
          width: 315px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .smallbox {
            width: 150px;
            height: 90px;
            padding: 10px 20px;
            box-sizing: border-box;
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 3px 0 rgba(0, 0, 0, .2);
            margin-bottom: 15px;

            p {
              margin-bottom: 10px;
              text-align: center;
            }

            span {
              font-size: 14px;
            }
          }
        }
      }

      .right {
        margin-left: 20px;

        .box {
          width: 270px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;

          .jianyi {
            width: 100px;
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 3px 0 rgba(0, 0, 0, .2);
            padding: 10px;
            margin-bottom: 15px;
            text-align: center;

            img {
              display: block;
              width: 100px;
            }
          }
        }
      }
    }
  }
</style>