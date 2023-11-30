<template>
  <div class="weekbox">
    <div class="top">
      <h1 class="title">7日天气预报</h1>
      <div class="button">
        <router-link to="/dayweathershow/tem">今日天气预报</router-link>
        <router-link to="/dayweathershow/tem">40日天气预报</router-link>
      </div>
    </div>
    <ul class="weekweatherbox">
      <li>
        <p>
          今天
        </p>
        <p class="date">
          {{$store.state.weekweatherdata.data[0].date.slice(5)}}
        </p>
        <p>
          {{$store.state.weekweatherdata.data[0].wea}}
        </p>
        <img :src="`/public/icon/${$store.state.weekweatherdata.data[0].wea_day_img}.png`">
        <div class="nothing"></div>
        <img :src="`/public/icon/${$store.state.weekweatherdata.data[0].wea_night_img}.png`">
        <p>
          湿度{{$store.state.weekweatherdata.data[0].humidity}}
        </p>
        <p class="wind">风力{{$store.state.weekweatherdata.data[0].win_speed}}</p>
      </li>
      <li v-for="weekdata in $store.state.weekweatherdata.data.slice(1)" :key="weekdata.date">
        <p>
          {{weekdata.week}}
        </p>
        <p class="date">
          {{weekdata.date.slice(5)}}
        </p>
        <p>
          {{weekdata.wea}}
        </p>
        <img :src="`/public/icon/${weekdata.wea_day_img}.png`">
        <div class="nothing"></div>
        <img :src="`/public/icon/${weekdata.wea_night_img}.png`">
        <p>
          湿度{{weekdata.humidity}}%
        </p>
        <p class="wind">风力{{weekdata.win_speed}}</p>
      </li>
    </ul>
    <div id="weekecharts"></div>
  </div>

</template>

<script>
  import * as echarts from 'echarts'
  export default {
    data() {
      return {
        weatherdata: [],
        days: [],
        maxtems: [],
        mintems: [],
      }
    },
    computed: {

    },
    mounted() {
      this.weekecharts = echarts.init(document.querySelector('#weekecharts'))
      this.echartsInit()
      this.$store.watch(
        (state) => state.weatherdata, // 监听的状态路径
        (newValue, oldValue) => {
          // 当状态发生变化时执行的操作
          this.days = []
          this.maxtems = []
          this.mintems = []
          this.echartsInit()
        },
      )
    },
    methods: {
      echartsInit() {
        console.log('周天气改变了');
        for (let i = 0; i < 7; i++) {
          this.days.push(this.$store.state.weekweatherdata.data[i].week)
          this.maxtems.push(this.$store.state.weekweatherdata.data[i].tem1)
          this.mintems.push(this.$store.state.weekweatherdata.data[i].tem2)
        }
        this.weekecharts.setOption({
          grid: {
            left: '0',
            right: '0',
            top: '0',
            bottom: '0'
          },
          xAxis: {
            show: false,
            type: 'category',
            data: this.days,
          },
          yAxis: {
            show: false,
            type: 'value',
            splitLine: {
              show: false
            },
            max: Math.floor(Math.max(...this.maxtems) + 5),
            min: Math.floor(Math.min(...this.mintems) - 5),
          },
          series: [
            {
              data: this.maxtems,
              type: 'line',
              color: '#fcc370',
              symbol: 'emptyCircle',
              symbolSize: 6,
              label: {
                show: true, // 显示节点值
                position: 'top', // 设置节点值显示的位置（可根据需要调整）
                formatter: '{c}°',
                color: '#384c78',
                fontSize: 18,
                textBorderColor: 'transparent',

              }
            },
            {
              data: this.mintems,
              type: 'line',
              color: '#94ccf9',
              symbol: 'emptyCircle',
              symbolSize: 6,
              label: {
                show: true, // 显示节点值
                position: 'bottom',
                formatter: '{c}°',
                color: '#384c78',
                fontSize: 18,
                textBorderColor: 'transparent',

              }
            }
          ],
          tooltip: {
            trigger: 'item',
            formatter: (params) => `${this.$store.state.weatherdata.date}<br/>时间 : ${this.days[params.dataIndex]}<br/>温度 : ${this.mintems[params.dataIndex]}~${this.maxtems[params.dataIndex]}℃`
          }
        })
      },

    }
  }
</script>

<style scoped lang="less">
  .weekbox {
    width: 700px;
    height: 500px;
    padding-top: 20px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, .2);
    position: relative;

    .top {
      color: #344665;
      margin-bottom: 20px;
      padding: 0 30px;
      width: 640px;
      height: 20px;

      .button {
        float: right;
        display: flex;
        width: 210px;
        justify-content: space-between;
        align-items: center;

        a {
          text-align: center;
          width: 95px;
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
        }
      }

      .title {
        font-size: 18px;
        font-weight: 400;
        height: 20px;
        line-height: 20px;
        float: left;
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
    }

    .weekweatherbox {
      display: flex;

      li {
        padding-top: 10px;
        height: 450px;
        box-sizing: border-box;
        width: 100px;
        text-align: center;

        p {
          font-size: 14px;
          color: #384c78;
          line-height: 14px;
          height: 14px;
        }

        .date {
          font-size: 12px;
          color: #8a9baf;
          margin: 10px 0 30px;
          height: 12px;
          line-height: 12px;
        }

        img {
          width: 30px;
          margin: 20px 0;
        }

        .nothing {
          height: 160px;
        }

        .wind {
          font-size: 12px;
          color: #8a9baf;
          margin-top: 20px;
          height: 12px;
          line-height: 12px;
        }


      }



    }

    #weekecharts {
      position: absolute;
      top: 200px;
      width: 700px;
      height: 200px;
    }
  }
</style>