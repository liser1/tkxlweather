<template>
  <div class="monthShow">
    <div class="top">
      <h1 class="title">未来四十日天气预报</h1>
      <ul class="weekname">
        <li>周日</li>
        <li>周一</li>
        <li>周二</li>
        <li>周三</li>
        <li>周四</li>
        <li>周五</li>
        <li>周六</li>
      </ul>
    </div>
    <div class="bottom">
      <div class="dayBox" v-for="(day, index) in newweatherdata" :key="index">
        <div v-if="Object.keys(day).length!==0">
          <p class="date">{{day.date.slice(8) == '01' ? day.date.slice(5) : day.date.slice(-2)}}</p>
          <img :src="`/public/icon/${day.wea_img}.png`" alt="">
          <p>{{day.tem2}} ~ {{day.tem1}}℃</p>
          <p>{{day.wea}}</p>
          <p>{{day.win}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        weatherData: [
          {
            "date": "2023-12-02",
            "date_nl": "十月二十",
            "week": "星期六",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "22",
            "tem2": "16",
            "sunrise": "06:49",
            "sunset": "17:38",
            "air": "",
            "win": "微风<3级",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-03",
            "date_nl": "十月廿一",
            "week": "星期日",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "24",
            "tem2": "17",
            "sunrise": "06:50",
            "sunset": "17:38",
            "air": "",
            "win": "微风<3级",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-04",
            "date_nl": "十月廿二",
            "week": "星期一",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "24",
            "tem2": "18",
            "sunrise": "06:50",
            "sunset": "17:39",
            "air": "",
            "win": "微风<3级",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-05",
            "date_nl": "十月廿三",
            "week": "星期二",
            "wea": "多云转阴",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "阴",
            "wea_night_img": "yin",
            "tem1": "25",
            "tem2": "17",
            "sunrise": "06:51",
            "sunset": "17:39",
            "air": "",
            "win": "微风<3级",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-06",
            "date_nl": "十月廿四",
            "week": "星期三",
            "wea": "阴转晴",
            "wea_c": "02",
            "wea_img": "yin",
            "wea_day": "阴",
            "wea_day_img": "yin",
            "wea_night": "晴",
            "wea_night_img": "qing",
            "tem1": "22",
            "tem2": "16",
            "sunrise": "06:52",
            "sunset": "17:39",
            "air": "",
            "win": "微风<3级",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-07",
            "date_nl": "十月廿五",
            "week": "星期四",
            "wea": "晴",
            "wea_c": "00",
            "wea_img": "qing",
            "wea_day": "晴",
            "wea_day_img": "qing",
            "wea_night": "晴",
            "wea_night_img": "qing",
            "tem1": "24",
            "tem2": "15",
            "sunrise": "06:52",
            "sunset": "17:39",
            "air": "",
            "win": "微风<3级",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-08",
            "date_nl": "十月廿六",
            "week": "星期五",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "25",
            "tem2": "21",
            "sunrise": "06:53",
            "sunset": "17:39",
            "air": "",
            "win": "微风<3级",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-09",
            "date_nl": "十月廿七",
            "week": "星期六",
            "wea": "晴转阴",
            "wea_c": "00",
            "wea_img": "yin",
            "wea_day": "晴",
            "wea_day_img": "qing",
            "wea_night": "阴",
            "wea_night_img": "yin",
            "tem1": "24",
            "tem2": "21",
            "sunrise": "06:54",
            "sunset": "17:40",
            "air": "",
            "win": "东南风<3级",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-10",
            "date_nl": "十月廿八",
            "week": "星期日",
            "wea": "晴转阴",
            "wea_c": "00",
            "wea_img": "yin",
            "wea_day": "晴",
            "wea_day_img": "qing",
            "wea_night": "阴",
            "wea_night_img": "yin",
            "tem1": "26",
            "tem2": "22",
            "sunrise": "06:54",
            "sunset": "17:40",
            "air": "",
            "win": "南风<3级",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-11",
            "date_nl": "十月廿九",
            "week": "星期一",
            "wea": "雨转阴",
            "wea_c": "301",
            "wea_img": "yu",
            "wea_day": "雨",
            "wea_day_img": "yu",
            "wea_night": "阴",
            "wea_night_img": "yin",
            "tem1": "25",
            "tem2": "21",
            "sunrise": "06:55",
            "sunset": "17:40",
            "air": "",
            "win": "东北风<3级",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-12",
            "date_nl": "十月三十",
            "week": "星期二",
            "wea": "阴",
            "wea_c": "02",
            "wea_img": "yin",
            "wea_day": "阴",
            "wea_day_img": "yin",
            "wea_night": "阴",
            "wea_night_img": "yin",
            "tem1": "24",
            "tem2": "20",
            "sunrise": "06:55",
            "sunset": "17:40",
            "air": "",
            "win": "东南风<3级",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-13",
            "date_nl": "十一月初一",
            "week": "星期三",
            "wea": "阴转多云",
            "wea_c": "02",
            "wea_img": "yun",
            "wea_day": "阴",
            "wea_day_img": "yin",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "22",
            "tem2": "19",
            "sunrise": "06:56",
            "sunset": "17:41",
            "air": "",
            "win": "东南风<3级",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-14",
            "date_nl": "十一月初二",
            "week": "星期四",
            "wea": "阴",
            "wea_c": "02",
            "wea_img": "yin",
            "wea_day": "阴",
            "wea_day_img": "yin",
            "wea_night": "阴",
            "wea_night_img": "yin",
            "tem1": "26",
            "tem2": "15",
            "sunrise": "06:57",
            "sunset": "17:41",
            "air": "",
            "win": "东风<3级",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-15",
            "date_nl": "十一月初三",
            "week": "星期五",
            "wea": "阴",
            "wea_c": "02",
            "wea_img": "yin",
            "wea_day": "阴",
            "wea_day_img": "yin",
            "wea_night": "阴",
            "wea_night_img": "yin",
            "tem1": "15",
            "tem2": "11",
            "sunrise": "06:57",
            "sunset": "17:41",
            "air": "",
            "win": "北风3-4级",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-16",
            "date_nl": "十一月初四",
            "week": "星期六",
            "wea": "阴",
            "wea_c": "02",
            "wea_img": "yin",
            "wea_day": "阴",
            "wea_day_img": "yin",
            "wea_night": "阴",
            "wea_night_img": "yin",
            "tem1": "14",
            "tem2": "10",
            "sunrise": "06:58",
            "sunset": "17:42",
            "air": "",
            "win": "北风<3级",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-17",
            "date_nl": "十一月初五",
            "week": "星期日",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "20",
            "tem2": "13",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-18",
            "date_nl": "十一月初六",
            "week": "星期一",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "20",
            "tem2": "13",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-19",
            "date_nl": "十一月初七",
            "week": "星期二",
            "wea": "小雨",
            "wea_c": "07",
            "wea_img": "yu",
            "wea_day": "小雨",
            "wea_day_img": "yu",
            "wea_night": "小雨",
            "wea_night_img": "yu",
            "tem1": "20",
            "tem2": "13",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-20",
            "date_nl": "十一月初八",
            "week": "星期三",
            "wea": "中雨",
            "wea_c": "08",
            "wea_img": "yu",
            "wea_day": "中雨",
            "wea_day_img": "yu",
            "wea_night": "中雨",
            "wea_night_img": "yu",
            "tem1": "20",
            "tem2": "13",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-21",
            "date_nl": "十一月初九",
            "week": "星期四",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "21",
            "tem2": "13",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-22",
            "date_nl": "十一月初十",
            "week": "星期五",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "20",
            "tem2": "13",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-23",
            "date_nl": "十一月十一",
            "week": "星期六",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "21",
            "tem2": "13",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-24",
            "date_nl": "十一月十二",
            "week": "星期日",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "21",
            "tem2": "14",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-25",
            "date_nl": "十一月十三",
            "week": "星期一",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "21",
            "tem2": "13",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-26",
            "date_nl": "十一月十四",
            "week": "星期二",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "21",
            "tem2": "13",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-27",
            "date_nl": "十一月十五",
            "week": "星期三",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "20",
            "tem2": "13",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-28",
            "date_nl": "十一月十六",
            "week": "星期四",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "19",
            "tem2": "12",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-29",
            "date_nl": "十一月十七",
            "week": "星期五",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "19",
            "tem2": "12",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-30",
            "date_nl": "十一月十八",
            "week": "星期六",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "20",
            "tem2": "12",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2023-12-31",
            "date_nl": "十一月十九",
            "week": "星期日",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "19",
            "tem2": "12",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2024-01-01",
            "date_nl": "十一月二十",
            "week": "星期一",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "19",
            "tem2": "12",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2024-01-02",
            "date_nl": "十一月廿一",
            "week": "星期二",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "19",
            "tem2": "12",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2024-01-03",
            "date_nl": "十一月廿二",
            "week": "星期三",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "19",
            "tem2": "12",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2024-01-04",
            "date_nl": "十一月廿三",
            "week": "星期四",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "20",
            "tem2": "12",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2024-01-05",
            "date_nl": "十一月廿四",
            "week": "星期五",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "20",
            "tem2": "12",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2024-01-06",
            "date_nl": "十一月廿五",
            "week": "星期六",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "20",
            "tem2": "13",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2024-01-07",
            "date_nl": "十一月廿六",
            "week": "星期日",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "21",
            "tem2": "13",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2024-01-08",
            "date_nl": "十一月廿七",
            "week": "星期一",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "20",
            "tem2": "12",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2024-01-09",
            "date_nl": "十一月廿八",
            "week": "星期二",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "20",
            "tem2": "13",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          },
          {
            "date": "2024-01-10",
            "date_nl": "十一月廿九",
            "week": "星期三",
            "wea": "多云",
            "wea_c": "01",
            "wea_img": "yun",
            "wea_day": "多云",
            "wea_day_img": "yun",
            "wea_night": "多云",
            "wea_night_img": "yun",
            "tem1": "20",
            "tem2": "13",
            "sunrise": "",
            "sunset": "",
            "air": "",
            "win": "",
            "win_day": "",
            "win_night": ""
          }
        ],
      }
    },
    methods: {

    },
    computed: {
      newweatherdata() {
        const newdata = []
        let beforcard = 0
        let aftercard = 0
        newdata.push(...this.weatherData)
        newdata[0].date = '今天'
        switch (this.weatherData[0].week) {
          case '星期日':
            beforcard = 0
            aftercard = 2
            break;
          case '星期一':
            beforcard = 1
            aftercard = 1
            break;
          case '星期二':
            beforcard = 2
            aftercard = 0
            break;
          case '星期三':
            beforcard = 3
            aftercard = 6
            break;
          case '星期四':
            beforcard = 4
            aftercard = 5
            break;
          case '星期五':
            beforcard = 5
            aftercard = 4
            break;
          case '星期六':
            beforcard = 6
            aftercard = 3
            break;
        }
        for (let i = 0; i < beforcard; i++) {
          newdata.unshift({})
        }
        for (let i = 0; i < aftercard; i++) {
          newdata.push({})
        }
        return newdata
      }
    },
    methods: {

    }
  }
</script>
<style scoped lang="less">
  .monthShow {
    width: 880px;
    margin: 0 auto;
    padding: 0 10px 10px;
    color: #344665;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, .2);

    .top {
      .title {
        font-size: 18px;
        font-weight: 400;
        height: 20px;
        line-height: 20px;
        padding: 20px;
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

      .weekname {
        display: flex;
        text-align: center;

        li {
          flex: 1;
          height: 40px;
          line-height: 40px;
        }
      }
    }

    .bottom {
      width: 880px;
      display: flex;
      flex-wrap: wrap;
      border-top: 1px solid #cccccc;
      border-left: 1px solid #cccccc;


      .dayBox {
        width: calc(100%/7);
        box-sizing: border-box;
        padding: 10px;
        height: 200px;
        border-bottom: 1px solid #cccccc;
        border-right: 1px solid #cccccc;
        font-size: 14px;
        text-align: center;

        p {
          margin-bottom: 10px;
        }

        .date {
          font-size: 18px;
          height: 18px;
          line-height: 18px;
          text-align: start;
        }

        img {
          width: 35px;
          margin: 5px 0 10px;
        }
      }

      .dayBox:hover {
        background-color: rgba(255, 255, 255, 0.4);
      }
    }
  }
</style>