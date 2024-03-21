<template>
  <div class="historybox">
    <div class="top">
      <h1 class="title">
        {{$store.state.weatherdata.city}}历史天气
      </h1>
      <div class="dateselect">
        <el-date-picker class="cursor" @change="datechange" :disabled-date="disabledDate" v-model="choosedate"
          value-format="YYYY-MM-DD" type="date" placeholder="请选择查询日期" format="YYYY年MM月DD日" />
      </div>
    </div>
    <div v-if="thisdaydata==''" class="nodate">
      <p>请选择一个需要查询日期</p>
    </div>
    <div class="historydate" v-else>
      <div class="thisday">
        <p>日期: <span>{{choosedate}}</span></p>
        <p>天气: <span>{{thisdaydata.tianqi}}</span></p>
        <p>风力风向: <span>{{thisdaydata.fengxiang}}{{thisdaydata.fengli}}</span></p>
        <p>
          白天温度: <span class="day">{{thisdaydata.bWendu}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          夜晚温度: <span class="night">{{thisdaydata.yWendu}}</span>
        </p>
        <p>
          空气质量: <span :style="{color:aircolor}">{{thisdaydata.aqi}} {{thisdaydata.aqiInfo}}</span>
        </p>
        <img :src="`/icon/${thisdaydata.tianqi_img}.png`">
      </div>
      <div class="thismonth">
        <p class="title">{{year}}年{{month}}月总体天气分析</p>
        <p>
          平均高温: <span class="day">{{$store.state.historyweatherdata.avgbWendu}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          平均低温: <span class="night">{{$store.state.historyweatherdata.avgyWendu}}</span>
        </p>
        <p>极端高温:
          <span class="day">
            {{$store.state.historyweatherdata.maxWendu.slice(0,$store.state.historyweatherdata.maxWendu.indexOf('('))}}°
          </span>
          <span>
            {{$store.state.historyweatherdata.maxWendu.slice($store.state.historyweatherdata.maxWendu.indexOf('('))}}
          </span>
        </p>
        <p>极端低温:
          <span class="night">
            {{$store.state.historyweatherdata.minWendu.slice(0,$store.state.historyweatherdata.minWendu.indexOf('('))}}°
          </span>
          <span>{{$store.state.historyweatherdata.minWendu.slice($store.state.historyweatherdata.minWendu.indexOf('('))}}</span>
        </p>
        <p>
          平均空气质量指数:<span class="aqi">{{$store.state.historyweatherdata.avgAqi}}</span>
        </p>
        <p>空气最好:
          <span :style="{color:bestaircolor}">
            {{$store.state.historyweatherdata.minAqi}}{{$store.state.historyweatherdata.minAqiInfo}}</span>
          <span>{{$store.state.historyweatherdata.minAqiDate}}</span>
        </p>
        <p>空气最差:
          <span :style="{color:disbestaircolor}">
            {{$store.state.historyweatherdata.maxAqi}}{{$store.state.historyweatherdata.maxAqiInfo}}</span>
          <span>{{$store.state.historyweatherdata.maxAqiDate}}</span>
        </p>
        <historyecharts />
      </div>
    </div>
  </div>


</template>
<script>
  import * as echarts from 'echarts'
  import historyecharts from './HistoryEcharts.vue'
  export default {
    components: {
      historyecharts,
    },
    data() {
      return {
        year: 0,
        month: 0,
        aircolor: '',
        choosedate: '',
      }
    },
    methods: {
      datechange() {
        if (+this.choosedate.slice(0, 4) != this.year || +this.choosedate.slice(5, 7) != this.month) {
          this.year = +this.choosedate.slice(0, 4)
          this.month = +this.choosedate.slice(5, 7)
          this.$store.dispatch('getHistoryWeather', { city: this.$store.state.weatherdata.city, year: this.year, month: this.month })
        }


      },
      disabledDate(time) {
        const history = new Date(2012, 0, 0); // 获取当前日期
        const now = new Date(); // 获取当前日期
        const currentDate = new Date(time); // 获取日期选择器的日期

        // 将时间设置为当天 00:00:00，方便比较日期
        now.setHours(0, 0, 0, 0);
        currentDate.setHours(0, 0, 0, 0);

        return currentDate.getTime() >= now.getTime() || currentDate.getTime() <= history.getTime(); // 返回 true 则禁用日期
      },
      changecolor(aqiInfo) {
        let color = ''
        if (aqiInfo == '优') {
          color = '#a3d765'
        } else if (aqiInfo == '良') {
          color = '#f0cc35'
        } else if (aqiInfo == '轻度污染' || aqiInfo == '中度污染') {
          color = '#f0b835'
        } else {
          color = '#f03535'
        }
        return color
      },
    },
    computed: {
      thisdaydata() {
        for (let i = 0; i < this.$store.state.historyweatherdata.data.length; i++) {
          if (this.$store.state.historyweatherdata.data[i].ymd == this.choosedate) {
            this.aircolor = this.changecolor(this.$store.state.historyweatherdata.data[i].aqiInfo)
            return this.$store.state.historyweatherdata.data[i]
          }
        }
        return ''
      },
      bestaircolor() {
        return this.changecolor(this.$store.state.historyweatherdata.minAqiInfo)
      },
      disbestaircolor() {
        return this.changecolor(this.$store.state.historyweatherdata.maxAqiInfo)
      },

    },
  }
</script>
<style scoped lang="less">
  .historybox {
    margin-top: 50px;
    width: 800px;
    padding: 20px;
    color: #344665;
    border-radius: 10px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, .2);

    .top {
      height: 20px;
      margin-bottom: 20px;

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

      .dateselect {
        width: 150px;
        float: right;

        .cursor {
          cursor: pointer;
        }
      }
    }

    .nodate {
      width: 800px;
      height: 400px;
      font-size: 30px;
      line-height: 400px;
      color: #c4cad8;
      text-align: center;
    }

    .historydate {
      width: 800px;
      box-sizing: border-box;
      padding: 0 20px;
      position: relative;

      .day {
        color: #ff501b;
      }

      .night {
        color: #3097fd;
      }

      .thisday {
        border-bottom: 1px solid #c4cad8;
        margin-bottom: 20px;

        p {
          margin-bottom: 10px;
          width: 400px;

          span {
            margin-left: 10px;
            font-size: 18px;
          }
        }

        img {
          width: 100px;
          position: absolute;
          top: 20px;
          right: 70px;
        }
      }

      .thismonth {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .title {
          width: 100%;
          font-size: 18px;
          text-align: center;
          margin-bottom: 20px;
        }

        p {
          margin-bottom: 10px;
          width: 220px;
        }

        .aqi {
          font-weight: 700;
        }
      }
    }

    #historyecharts {
      width: 760px;
      height: 300px;
    }
  }
</style>