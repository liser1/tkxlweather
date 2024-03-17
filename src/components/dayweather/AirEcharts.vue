<template>
  <div id="airecharts"></div>
</template>
<script>
  import * as echarts from 'echarts'
  export default {
    data() {
      return {
        data: { name: '空气指数', unit: '' },
        hours: [],
        airs: [],
      }
    },
    mounted() {
      this.airecharts = echarts.init(document.querySelector('#airecharts'))
      this.echartsInit()
      this.$store.watch(
        (state) => state.weatherdata, // 监听的状态路径
        (newValue, oldValue) => {
          // 当状态发生变化时执行的操作
          this.hours = []
          this.airs = []
          this.echartsInit()
        },
      )
    },
    methods: {
      echartsInit() {
        for (let i = 0; i < 24; i++) {
          this.hours.push(this.$store.state.weatherdata.hours[i].hours)
          this.airs.push(this.$store.state.weatherdata.hours[i].aqinum)
        }

        this.airecharts.setOption({
          grid: {
            left: '5%',
            right: '2%',
            top: '15%',
            bottom: '30%'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.hours,
            axisLine: {
              lineStyle: {
                color: 'black', // 设置 x 轴颜色为白色
              }
            },
          },
          yAxis: {
            type: 'value',
            splitLine: {
              show: false
            },
            axisLabel: {
              formatter: '{value}'
            },
            axisLine: {
              lineStyle: {
                color: 'black', // 设置 y 轴颜色为白色
              }
            },
            max: Math.floor(Math.max(...this.airs) + 10),
            min: Math.floor(Math.min(...this.airs) - 10),
          },
          series: [
            {
              data: this.airs,
              type: 'line',
              color: '#fcc370',
              areaStyle: {
                color: '#fcc370',
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
            formatter: (params) => `${this.$store.state.weatherdata.date}<br/>时间 : ${this.hours[params.dataIndex]}<br/>空气质量 : ${this.$store.state.weatherdata.hours[params.dataIndex].aqi}<br/>${this.data.name} : ${this.airs[params.dataIndex]}${this.data.unit}`
          }
        })
      },

    }
  }
</script>
<style scoped>
  #airecharts {
    margin: 0 auto;
    width: 1100px;
    height: 260px;
  }
</style>