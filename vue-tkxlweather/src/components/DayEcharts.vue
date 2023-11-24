<template>
  <div id="hourecharts"></div>
</template>

<script>
  import * as echarts from 'echarts'
  export default {
    data() {
      return {
        hours: [],
        tems: [],
      }
    },
    mounted() {
      this.hourecharts = echarts.init(document.querySelector('#hourecharts'))
      this.echartsInit()
      this.$store.watch(
        (state) => state.weatherdata, // 监听的状态路径
        (newValue, oldValue) => {
          // 当状态发生变化时执行的操作
          this.hours = []
          this.tems = []
          this.echartsInit()
        },
      )
    },
    methods: {
      echartsInit() {
        for (let i = 0; i < 24; i++) {
          this.hours.push(this.$store.state.weatherdata.hours[i].hours)
          this.tems.push(this.$store.state.weatherdata.hours[i].tem)
        }

        this.hourecharts.setOption({
          grid: {
            left: '10%',
            right: '10%',
            top: '10%',
            bottom: '30%'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.hours,
            axisLine: {
              lineStyle: {
                color: 'white', // 设置 x 轴颜色为白色
              }
            },
          },
          yAxis: {
            type: 'value',
            splitLine: {
              show: false
            },
            axisLabel: {
              formatter: '{value}°C'
            },
            axisLine: {
              lineStyle: {
                color: 'white', // 设置 y 轴颜色为白色
              }
            },
            max: Math.floor(Math.max(...this.tems) + 5),
            min: Math.floor(Math.min(...this.tems) - 5),
          },
          series: [
            {
              data: this.tems,
              type: 'line',
              color: 'white',
              areaStyle: {
                color: 'white',
                opacity: 0.3
              },
              symbol: 'emptyCircle',
              symbolSize: 6,
            }
          ],
          dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 0,
            end: 50,
          }],
          tooltip: {
            trigger: 'item',
            formatter: `${this.$store.state.weatherdata.date}<br/>时间 : {b}<br/>温度 : {c}℃`
          }
        })
      },

    }
  }
</script>

<style>
  #hourecharts {
    margin: 0 auto;
    width: 1200px;
    height: 240px;
  }
</style>