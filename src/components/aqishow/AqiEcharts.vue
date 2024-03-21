<template>
  <div id="aqiecharts"></div>
</template>

<script>
  import * as echarts from 'echarts'
  export default {
    data() {
      return {

      }
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
    methods: {
      echartsInit() {
        this.aqiecharts.setOption({
          backgroundColor: '',
          series: [
            {
              type: 'gauge',
              radius: '100%',
              center: ['50%', '80%'],
              startAngle: 180,
              endAngle: 0,
              min: 0,
              max: 300,
              splitNumber: 12,
              itemStyle: {
                color: this.aqicolor
              },
              progress: {
                show: true,
                backgroundColor: this.aqicolor,
                width: 30
              },
              pointer: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  width: 30,
                  color: [
                    [1, '#f6f6f6']
                  ]
                },
              },
              axisTick: {
                distance: -45,
                splitNumber: 5,
                lineStyle: {
                  width: 2,
                  color: '#999'
                }
              },
              splitLine: {
                distance: -52,
                length: 14,
                lineStyle: {
                  width: 3,
                  color: '#999'
                }
              },
              axisLabel: {
                distance: -20,
                color: '#999',
                fontSize: 16
              },
              anchor: {
                show: false
              },
              title: {
                show: false
              },
              detail: {
                valueAnimation: true,
                width: '60%',
                offsetCenter: [0, '-25%'],
                fontSize: 25,
                formatter: `{value}\n${this.$store.state.weatherdata.aqi.air_level}`,
                color: this.aqicolor,
                baseline: 'middle'
              },
              data: [
                {
                  value: +this.$store.state.weatherdata.aqi.air,
                  level: this.$store.state.weatherdata.aqi.air_level
                }
              ]
            },
          ]
        })
      }
    },
    mounted() {
      this.aqiecharts = echarts.init(document.querySelector('#aqiecharts'))
      this.echartsInit()
      this.$store.watch(
        (state) => state.weatherdata, // 监听的状态路径
        (newValue, oldValue) => {
          // 当状态发生变化时执行的操作
          this.echartsInit()
        },
      )
    },
  }
</script>
<style>
  #aqiecharts {
    width: 450px;
    height: 280px;
  }
</style>