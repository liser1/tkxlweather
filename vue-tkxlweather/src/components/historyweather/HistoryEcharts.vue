<template>
  <div id="historyecharts"></div>
</template>

<script>
  import * as echarts from 'echarts'
  export default {
    data() {
      return {
        hours: [],
        maxtems: [],
        mintems: [],
        data: { name: '温度', unit: '℃' },
      }
    },
    methods: {
      echartsInit() {
        for (let i = 0; i < this.$store.state.historyweatherdata.data.length; i++) {
          this.hours.push(+this.$store.state.historyweatherdata.data[i].ymd.slice(8))
          this.maxtems.push(this.$store.state.historyweatherdata.data[i].bWendu.slice(0, this.$store.state.historyweatherdata.data[i].bWendu.indexOf('°')))
          this.mintems.push(this.$store.state.historyweatherdata.data[i].yWendu.slice(0, this.$store.state.historyweatherdata.data[i].yWendu.indexOf('°')))
        }
        console.log(this.hours);
        this.historyecharts.setOption({
          grid: {
            left: '2%',
            right: '2%',
            top: '5%',
            bottom: '8%'
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
            show: false,
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
            max: Math.floor(Math.max(...this.maxtems) + 3),
            min: Math.floor(Math.min(...this.mintems) - 3),
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
                fontSize: 10,
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
                position: 'bottom', // 设置节点值显示的位置（可根据需要调整）
                formatter: '{c}°',
                color: '#384c78',
                fontSize: 10,
                textBorderColor: 'transparent',
              }
            },
          ],
          tooltip: {
            trigger: 'item',
            formatter: `时间 : {b}<br/>${this.data.name} : {c}${this.data.unit}`
          }
        })
      }
    },
    mounted() {
      this.historyecharts = echarts.init(document.querySelector('#historyecharts'))
      this.echartsInit()
      this.$store.watch(
        (state) => state.historyweatherdata, // 监听的状态路径
        (newValue, oldValue) => {
          // 当状态发生变化时执行的操作
          this.hours = []
          this.maxtems = []
          this.mintems = []
          this.echartsInit()
        },
      )
    },
  }
</script>
<style scoped>
  #historyecharts {
    width: 760px;
    height: 250px;
  }
</style>