<template>
  <div id="temecharts"></div>
</template>
<script>
  import * as echarts from 'echarts'
  export default {
    data() {
      return {
        data: { name: '温度', unit: '℃' },
        hours: [],
        tems: [],
      }
    },
    mounted() {
      this.temecharts = echarts.init(document.querySelector('#temecharts'))
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

        this.temecharts.setOption({
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
              formatter: '{value}°C'
            },
            axisLine: {
              lineStyle: {
                color: 'black', // 设置 y 轴颜色为白色
              }
            },
            max: Math.floor(Math.max(...this.tems) + 5),
            min: Math.floor(Math.min(...this.tems) - 5),
          },
          series: [
            {
              data: this.tems,
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
            formatter: `${this.$store.state.weatherdata.date}<br/>时间 : {b}<br/>${this.data.name} : {c}${this.data.unit}`
          }
        })
      },

    }
  }
</script>
<style scoped>
  #temecharts {
    margin: 0 auto;
    width: 1100px;
    height: 260px;
  }
</style>