<template>
  <div class="box">
    <div class="left">
      <p>{{weatherdata.city}}<span id="update_time">最近{{weatherdata.update_time}}更新</span></p>
      <div class="main">
        <div class="bigline">
          <span id="tem">{{weatherdata.tem+'°'}}</span>
          <span id="wea">{{weatherdata.wea}}</span>
          <span id="air" :style="{backgroundColor: aircolor}">{{weatherdata.air+' '+weatherdata.air_level}}</span>
        </div>
        <div class="smallline">

          <el-icon>
            <WindPower />
          </el-icon>
          <span>
            {{weatherdata.win+' '+weatherdata.win_speed}}
          </span>

          <el-icon>
            <Umbrella />
          </el-icon>
          <span>
            湿度{{weatherdata.humidity}}
          </span>

          <el-icon>
            <Stopwatch />
          </el-icon>
          <span>
            气压{{weatherdata.pressure}}hPa
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        aircolor: '',
        weatherdata: {
          "cityid": "101281601",
          "date": "2023-11-01",
          "week": "星期三",
          "update_time": "16:23",
          "city": "东莞",
          "cityEn": "dongguan",
          "country": "中国",
          "countryEn": "China",
          "wea": "晴",
          "wea_img": "qing",
          "tem": "29.2",
          "tem1": "30",
          "tem2": "21",
          "win": "北风",
          "win_speed": "1级",
          "win_meter": "3km/h",
          "humidity": "45%",
          "visibility": "30km",
          "pressure": "1009",
          "air": "55",
          "air_pm25": "21",
          "air_level": "良",
          "air_tips": "各类人群可多参加户外活动，多呼吸一下清新的空气。",
          "alarm": {
            "alarm_type": "",
            "alarm_level": "",
            "alarm_content": ""
          },
          "nums": 0,
          "rain_pcpn": "0",
          "uvIndex": "3",
          "uvDescription": "中等",
          "wea_day": "晴",
          "wea_day_img": "qing",
          "wea_night": "多云",
          "wea_night_img": "yun",
          "win_speed_day": "<3级",
          "win_speed_night": "",
          "aqi": {
            "update_time": "15:05",
            "cityid": "101281601",
            "city": "",
            "cityEn": "",
            "country": "",
            "countryEn": "",
            "air": "55",
            "air_level": "良",
            "air_tips": "各类人群可多参加户外活动，多呼吸一下清新的空气。",
            "pm25": "21",
            "pm25_desc": "优",
            "pm10": "38",
            "pm10_desc": "优",
            "o3": "164",
            "o3_desc": "",
            "no2": "11",
            "no2_desc": "",
            "so2": "10",
            "so2_desc": "",
            "co": "0.7",
            "co_desc": "",
            "kouzhao": "不用佩戴口罩",
            "yundong": "适宜运动",
            "waichu": "适宜外出",
            "kaichuang": "适宜开窗",
            "jinghuaqi": "不需要打开"
          }
        }
      }
    },
    methods: {
      changecolor() {
        if (this.weatherdata.air_level == '优') {
          this.aircolor = '#a3d765'
        } else if (this.weatherdata.air_level == '良') {
          this.aircolor = '#f0cc35'
        } else if (this.weatherdata.air_level == '轻度污染' || this.weatherdata.air_level == '中度污染') {
          this.aircolor = '#f0b835'
        } else {
          this.aircolor = '#f03535'
        }
      }
    }
    ,
    mounted() {
      this.changecolor()
    }
  }
</script>
<style scoped lang="less">
  .box {
    width: 1200px;
    margin: 0 auto;
    color: white;
    display: flex;
    justify-content: space-between;

    .left {
      font-size: 18px;

      #update_time {
        font-size: 14px;
        opacity: 0.6;
      }

      .main {
        .bigline {
          margin-bottom: 10px;

          #tem {
            font-size: 86px;
          }

          #wea {
            font-size: 28px;
          }

          #air {
            margin-left: 20px;
            height: 20px;
            padding: 1px 10px;
            border-radius: 10px;
            text-align: center;
            font-size: 14px;
          }
        }

        .smallline {
          display: flex;
          align-items: center;

          span {
            margin-right: 30px;
          }

          i {
            margin-right: 8px;
          }
        }
      }
    }
  }
</style>