import { createStore } from 'vuex';
import { ElMessage } from 'element-plus'
import axios from 'axios'

export default createStore({
  state: {
    gps: '',
    weatherdata: {
      "cityid": "101250102",
      "date": "2023-11-23",
      "week": "星期四",
      "update_time": "20:28",
      "city": "宁乡",
      "cityEn": "ningxiang",
      "country": "中国",
      "countryEn": "China",
      "wea": "晴",
      "wea_img": "qing",
      "tem": "17.5",
      "tem1": "22",
      "tem2": "9",
      "win": "北风",
      "win_speed": "3级",
      "win_meter": "12km/h",
      "humidity": "42%",
      "visibility": "10km",
      "pressure": "1013",
      "air": "99",
      "air_pm25": "51",
      "air_level": "良",
      "air_tips": "各类人群可多参加户外活动，多呼吸一下清新的空气。",
      "alarm": {
        "alarm_type": "",
        "alarm_level": "",
        "alarm_content": ""
      },
      "rain_pcpn": "0",
      "wea_day": "多云",
      "wea_day_img": "yun",
      "wea_night": "多云",
      "wea_night_img": "yun",
      "sunrise": "06:57",
      "sunset": "17:34",
      "hours": [
        {
          "hours": "19:00",
          "wea": "晴",
          "wea_img": "qing",
          "tem": "18",
          "win": "风",
          "win_speed": "3级",
          "aqinum": "99",
          "aqi": "良"
        },
        {
          "hours": "20:00",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "16.67",
          "win": "风",
          "win_speed": "4级",
          "aqinum": "57",
          "aqi": "良"
        },
        {
          "hours": "21:00",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "16.33",
          "win": "风",
          "win_speed": "3级",
          "aqinum": "61",
          "aqi": "良"
        },
        {
          "hours": "22:00",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "15",
          "win": "风",
          "win_speed": "3级",
          "aqinum": "65",
          "aqi": "良"
        },
        {
          "hours": "23:00",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "13.07",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "68",
          "aqi": "良"
        },
        {
          "hours": "00:00",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "11.33",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "70",
          "aqi": "良"
        },
        {
          "hours": "01:00",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "10.5",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "72",
          "aqi": "良"
        },
        {
          "hours": "02:00",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "10",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "75",
          "aqi": "良"
        },
        {
          "hours": "03:00",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "9.5",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "72",
          "aqi": "良"
        },
        {
          "hours": "04:00",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "8.6",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "70",
          "aqi": "良"
        },
        {
          "hours": "05:00",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "8.2",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "68",
          "aqi": "良"
        },
        {
          "hours": "06:00",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "7.8",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "67",
          "aqi": "良"
        },
        {
          "hours": "07:00",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "7.9",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "66",
          "aqi": "良"
        },
        {
          "hours": "08:00",
          "wea": "晴",
          "wea_img": "qing",
          "tem": "7",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "66",
          "aqi": "良"
        },
        {
          "hours": "09:00",
          "wea": "晴",
          "wea_img": "qing",
          "tem": "9.1",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "66",
          "aqi": "良"
        },
        {
          "hours": "10:00",
          "wea": "晴",
          "wea_img": "qing",
          "tem": "9.56",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "66",
          "aqi": "良"
        },
        {
          "hours": "11:00",
          "wea": "晴",
          "wea_img": "qing",
          "tem": "10.22",
          "win": "西北风",
          "win_speed": "4级",
          "aqinum": "66",
          "aqi": "良"
        },
        {
          "hours": "12:00",
          "wea": "晴",
          "wea_img": "qing",
          "tem": "10.98",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "61",
          "aqi": "良"
        },
        {
          "hours": "13:00",
          "wea": "晴",
          "wea_img": "qing",
          "tem": "11.81",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "56",
          "aqi": "良"
        },
        {
          "hours": "14:00",
          "wea": "晴",
          "wea_img": "qing",
          "tem": "12.58",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "51",
          "aqi": "良"
        },
        {
          "hours": "15:00",
          "wea": "晴",
          "wea_img": "qing",
          "tem": "13.44",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "47",
          "aqi": "优"
        },
        {
          "hours": "16:00",
          "wea": "晴",
          "wea_img": "qing",
          "tem": "16",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "42",
          "aqi": "优"
        },
        {
          "hours": "17:00",
          "wea": "晴",
          "wea_img": "qing",
          "tem": "15.1",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "40",
          "aqi": "优"
        },
        {
          "hours": "18:00",
          "wea": "晴",
          "wea_img": "qing",
          "tem": "15.51",
          "win": "西北风",
          "win_speed": "2级",
          "aqinum": "42",
          "aqi": "优"
        },
        {
          "hours": "19:00",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "15.02",
          "win": "西北风",
          "win_speed": "2级",
          "aqinum": "45",
          "aqi": "优"
        },
        {
          "hours": "20:00",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "14.46",
          "win": "西北风",
          "win_speed": "2级",
          "aqinum": "48",
          "aqi": "优"
        },
        {
          "hours": "21:00",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "13.81",
          "win": "西北风",
          "win_speed": "3级",
          "aqinum": "51",
          "aqi": "良"
        },
        {
          "hours": "22:00",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "12.52",
          "win": "西北风",
          "win_speed": "2级",
          "aqinum": "55",
          "aqi": "良"
        }
      ],
      "aqi": {
        "update_time": "19:54",
        "air": "99",
        "air_level": "良",
        "air_tips": "各类人群可多参加户外活动，多呼吸一下清新的空气。",
        "pm25": "51",
        "pm25_desc": "良",
        "pm10": "147",
        "pm10_desc": "轻度污染",
        "o3": "88",
        "o3_desc": "",
        "no2": "30",
        "no2_desc": "",
        "so2": "9",
        "so2_desc": "",
        "co": "0.8",
        "co_desc": "",
        "kouzhao": "不用佩戴口罩",
        "yundong": "适宜运动",
        "waichu": "适宜外出",
        "kaichuang": "适宜开窗",
        "jinghuaqi": "不需要打开"
      },
      "zhishu": {
        "chuanyi": {
          "level": "较舒适",
          "tips": "建议穿薄外套或牛仔裤等服装。"
        },
        "daisan": {
          "level": "不带伞",
          "tips": "天气较好，不用带雨伞。"
        },
        "ganmao": {
          "level": "少发",
          "tips": "无明显降温，感冒机率较低。"
        },
        "chenlian": {
          "level": "适宜",
          "tips": "天气不错，空气清新。"
        },
        "ziwaixian": {
          "level": "强",
          "tips": "涂擦SPF大于15、PA+防晒护肤品。"
        },
        "liangshai": {
          "level": "适宜",
          "tips": "天气不错，抓紧时机让衣物晒太阳吧。"
        },
        "kaiche": {
          "level": "",
          "tips": ""
        },
        "xiche": {
          "level": "适宜",
          "tips": "天气较好，适合擦洗汽车。"
        },
        "lvyou": {
          "level": "适宜",
          "tips": "天气较好，可尽情地享受大自然的风光。"
        },
        "diaoyu": {
          "level": "较适宜",
          "tips": "风稍大会对垂钓产生一定影响。"
        }
      },
      "nums": 86
    }
  },
  mutations: {
    updateweathershownow(state, data) {
      state.weatherdata = data
      console.log('调用了一次接口查询了' + data.city + '的天气');
      if (!state.gps) {
        state.gps = state.weatherdata.city
      }
    }

  },
  actions: {
    //获取当日天气
    getweathershownow({ commit }, cityname) {
      axios({
        url: 'https://v0.yiketianqi.com/api',
        params: {
          unescape: 1,
          version: 'v62',
          appid: '67713918',
          appsecret: 'aG4DNVMD',
          city: cityname
        }
      }).then(ref => {
        if (ref.data.errmsg) {
          console.log(ref.data.errmsg)
        } else {
          commit('updateweathershownow', ref.data)
        }
      })
    },
  }
})