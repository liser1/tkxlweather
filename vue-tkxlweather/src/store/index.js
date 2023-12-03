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
    },
    weekweatherdata: {
      "cityid": "101281601",
      "city": "东莞",
      "cityEn": "dongguan",
      "country": "中国",
      "countryEn": "China",
      "update_time": "2023-11-29 21:11:35",
      "data": [
        {
          "day": "29日（星期三）",
          "date": "2023-11-29",
          "week": "星期三",
          "wea": "多云",
          "wea_img": "yun",
          "wea_day": "小雨",
          "wea_day_img": "yu",
          "wea_night": "多云",
          "wea_night_img": "yun",
          "tem": "23",
          "tem1": "24",
          "tem2": "18",
          "humidity": "69%",
          "visibility": "13km",
          "pressure": "1013",
          "win": [
            "东北风",
            "无持续风向"
          ],
          "win_speed": "3-4级转<3级",
          "win_meter": "2km/h",
          "sunrise": "06:47",
          "sunset": "17:38",
          "air": "69",
          "air_level": "良",
          "air_tips": "各类人群可多参加户外活动，多呼吸一下清新的空气。",
          "alarm": {
            "alarm_type": "",
            "alarm_level": "",
            "alarm_content": ""
          },
          "hours": [
            {
              "hours": "20时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "19",
              "win": "无持续风向",
              "win_speed": "<3级"
            },
            {
              "hours": "21时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "19",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "22时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "19",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "23时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "19",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "00时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "19",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "01时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "19",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "02时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "19",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "03时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "18",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "04时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "18",
              "win": "北风",
              "win_speed": "<3级"
            },
            {
              "hours": "05时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "18",
              "win": "北风",
              "win_speed": "<3级"
            },
            {
              "hours": "06时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "19",
              "win": "北风",
              "win_speed": "<3级"
            },
            {
              "hours": "07时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "19",
              "win": "东北风",
              "win_speed": "<3级"
            }
          ],
          "index": [
            {
              "title": "紫外线指数",
              "level": "最弱",
              "desc": "辐射弱，涂擦SPF8-12防晒护肤品。"
            },
            {
              "title": "减肥指数",
              "level": "适宜",
              "desc": "天气较好，尽情感受运动的快乐吧。"
            },
            {
              "title": "血糖指数",
              "level": "较易发",
              "desc": "外出需远离过敏源，适当采取防护措施。"
            },
            {
              "title": "穿衣指数",
              "level": "较舒适",
              "desc": "建议穿薄外套或牛仔裤等服装。"
            },
            {
              "title": "洗车指数",
              "level": "较不宜",
              "desc": "路面有积水，车子易被溅上泥水。"
            },
            {
              "title": "空气污染扩散指数",
              "level": "较差",
              "desc": "气象条件较不利于空气污染物扩散。。"
            }
          ],
          "uvIndex": "2",
          "uvDescription": "低"
        },
        {
          "day": "30日（星期四）",
          "date": "2023-11-30",
          "week": "星期四",
          "wea": "晴转多云",
          "wea_img": "yun",
          "wea_day": "晴",
          "wea_day_img": "qing",
          "wea_night": "多云",
          "wea_night_img": "yun",
          "tem": "25",
          "tem1": "25",
          "tem2": "16",
          "humidity": "58",
          "visibility": "",
          "pressure": "",
          "win": [
            "无持续风向",
            "无持续风向"
          ],
          "win_speed": "<3级",
          "win_meter": "",
          "sunrise": "06:48",
          "sunset": "17:38",
          "air": "49",
          "air_level": "优",
          "air_tips": "",
          "alarm": {
            "alarm_type": "",
            "alarm_level": "",
            "alarm_content": ""
          },
          "hours": [
            {
              "hours": "08时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "20",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "09时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "21",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "10时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "22",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "11时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "23",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "12时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "23",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "13时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "24",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "14时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "24",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "15时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "23",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "16时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "22",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "17时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "21",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "18时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "20",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "19时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "19",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "20时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "18",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "21时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "18",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "22时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "18",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "23时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "18",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "00时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "17",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "01时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "16",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "02时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "16",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "03时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "16",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "04时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "16",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "05时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "16",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "06时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "16",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "07时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "16",
              "win": "东北风",
              "win_speed": "<3级"
            }
          ],
          "index": [
            {
              "title": "紫外线指数",
              "level": "强",
              "desc": "涂擦SPF大于15、PA+防晒护肤品。"
            },
            {
              "title": "减肥指数",
              "level": "适宜",
              "desc": "天气较好，尽情感受运动的快乐吧。"
            },
            {
              "title": "血糖指数",
              "level": "较易发",
              "desc": "外出需远离过敏源，适当采取防护措施。"
            },
            {
              "title": "穿衣指数",
              "level": "舒适",
              "desc": "建议穿长袖衬衫单裤等服装。"
            },
            {
              "title": "洗车指数",
              "level": "适宜",
              "desc": "天气较好，适合擦洗汽车。"
            },
            {
              "title": "空气污染扩散指数",
              "level": "中",
              "desc": "易感人群应适当减少室外活动。"
            }
          ],
          "uvIndex": "5",
          "uvDescription": "中等"
        },
        {
          "day": "01日（星期五）",
          "date": "2023-12-01",
          "week": "星期五",
          "wea": "晴转多云",
          "wea_img": "yun",
          "wea_day": "晴",
          "wea_day_img": "qing",
          "wea_night": "多云",
          "wea_night_img": "yun",
          "tem": "22",
          "tem1": "22",
          "tem2": "15",
          "humidity": "52",
          "visibility": "",
          "pressure": "",
          "win": [
            "无持续风向",
            "无持续风向"
          ],
          "win_speed": "<3级",
          "win_meter": "",
          "sunrise": "06:48",
          "sunset": "17:38",
          "air": "52",
          "air_level": "良",
          "air_tips": "",
          "alarm": {
            "alarm_type": "",
            "alarm_level": "",
            "alarm_content": ""
          },
          "hours": [
            {
              "hours": "08时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "16",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "09时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "17",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "10时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "18",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "11时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "19",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "12时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "20",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "13时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "21",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "14时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "21",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "15时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "21",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "16时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "20",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "17时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "19",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "18时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "18",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "19时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "17",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "20时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "16",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "21时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "17",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "22时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "17",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "23时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "17",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "00时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "17",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "01时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "16",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "02时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "16",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "03时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "15",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "04时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "15",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "05时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "15",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "06时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "16",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "07时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "17",
              "win": "东北风",
              "win_speed": "<3级"
            }
          ],
          "index": [
            {
              "title": "紫外线指数",
              "level": "强",
              "desc": "涂擦SPF大于15、PA+防晒护肤品。"
            },
            {
              "title": "减肥指数",
              "level": "适宜",
              "desc": "天气较好，尽情感受运动的快乐吧。"
            },
            {
              "title": "血糖指数",
              "level": "较易发",
              "desc": "外出需远离过敏源，适当采取防护措施。"
            },
            {
              "title": "穿衣指数",
              "level": "较舒适",
              "desc": "建议穿薄外套或牛仔裤等服装。"
            },
            {
              "title": "洗车指数",
              "level": "适宜",
              "desc": "天气较好，适合擦洗汽车。"
            },
            {
              "title": "空气污染扩散指数",
              "level": "中",
              "desc": "易感人群应适当减少室外活动。"
            }
          ],
          "uvIndex": "6",
          "uvDescription": "强"
        },
        {
          "day": "02日（星期六）",
          "date": "2023-12-02",
          "week": "星期六",
          "wea": "晴转多云",
          "wea_img": "yun",
          "wea_day": "晴",
          "wea_day_img": "qing",
          "wea_night": "多云",
          "wea_night_img": "yun",
          "tem": "24",
          "tem1": "24",
          "tem2": "15",
          "humidity": "51",
          "visibility": "",
          "pressure": "",
          "win": [
            "无持续风向",
            "无持续风向"
          ],
          "win_speed": "<3级",
          "win_meter": "",
          "sunrise": "06:49",
          "sunset": "17:38",
          "air": "58",
          "air_level": "良",
          "air_tips": "",
          "alarm": {
            "alarm_type": "",
            "alarm_level": "",
            "alarm_content": ""
          },
          "hours": [
            {
              "hours": "08时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "18",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "09时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "19",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "10时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "20",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "11时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "21",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "12时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "22",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "13时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "23",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "14时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "23",
              "win": "北风",
              "win_speed": "<3级"
            },
            {
              "hours": "15时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "22",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "16时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "21",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "17时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "21",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "18时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "20",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "19时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "19",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "20时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "18",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "23时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "17",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "02时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "16",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "05时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "16",
              "win": "东北风",
              "win_speed": "<3级"
            }
          ],
          "index": [
            {
              "title": "紫外线指数",
              "level": "强",
              "desc": "涂擦SPF大于15、PA+防晒护肤品。"
            },
            {
              "title": "减肥指数",
              "level": "适宜",
              "desc": "天气较好，尽情感受运动的快乐吧。"
            },
            {
              "title": "血糖指数",
              "level": "较易发",
              "desc": "外出需远离过敏源，适当采取防护措施。"
            },
            {
              "title": "穿衣指数",
              "level": "舒适",
              "desc": "建议穿长袖衬衫单裤等服装。"
            },
            {
              "title": "洗车指数",
              "level": "适宜",
              "desc": "天气较好，适合擦洗汽车。"
            },
            {
              "title": "空气污染扩散指数",
              "level": "中",
              "desc": "易感人群应适当减少室外活动。"
            }
          ],
          "uvIndex": "5",
          "uvDescription": "中等"
        },
        {
          "day": "03日（星期日）",
          "date": "2023-12-03",
          "week": "星期日",
          "wea": "多云",
          "wea_img": "yun",
          "wea_day": "多云",
          "wea_day_img": "yun",
          "wea_night": "多云",
          "wea_night_img": "yun",
          "tem": "24",
          "tem1": "24",
          "tem2": "16",
          "humidity": "53",
          "visibility": "",
          "pressure": "",
          "win": [
            "无持续风向",
            "无持续风向"
          ],
          "win_speed": "<3级",
          "win_meter": "",
          "sunrise": "06:50",
          "sunset": "17:38",
          "air": "44",
          "air_level": "优",
          "air_tips": "",
          "alarm": {
            "alarm_type": "",
            "alarm_level": "",
            "alarm_content": ""
          },
          "hours": [
            {
              "hours": "08时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "16",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "11时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "20",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "14时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "23",
              "win": "北风",
              "win_speed": "<3级"
            },
            {
              "hours": "17时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "22",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "20时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "21",
              "win": "北风",
              "win_speed": "<3级"
            },
            {
              "hours": "23时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "18",
              "win": "东风",
              "win_speed": "<3级"
            },
            {
              "hours": "02时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "17",
              "win": "东风",
              "win_speed": "<3级"
            },
            {
              "hours": "05时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "18",
              "win": "东北风",
              "win_speed": "<3级"
            }
          ],
          "index": [
            {
              "title": "紫外线指数",
              "level": "强",
              "desc": "涂擦SPF大于15、PA+防晒护肤品。"
            },
            {
              "title": "减肥指数",
              "level": "适宜",
              "desc": "天气较好，尽情感受运动的快乐吧。"
            },
            {
              "title": "血糖指数",
              "level": "较易发",
              "desc": "外出需远离过敏源，适当采取防护措施。"
            },
            {
              "title": "穿衣指数",
              "level": "舒适",
              "desc": "建议穿长袖衬衫单裤等服装。"
            },
            {
              "title": "洗车指数",
              "level": "适宜",
              "desc": "天气较好，适合擦洗汽车。"
            },
            {
              "title": "空气污染扩散指数",
              "level": "中",
              "desc": "易感人群应适当减少室外活动。"
            }
          ],
          "uvIndex": "5",
          "uvDescription": "中等"
        },
        {
          "day": "04日（星期一）",
          "date": "2023-12-04",
          "week": "星期一",
          "wea": "多云",
          "wea_img": "yun",
          "wea_day": "多云",
          "wea_day_img": "yun",
          "wea_night": "多云",
          "wea_night_img": "yun",
          "tem": "25",
          "tem1": "25",
          "tem2": "17",
          "humidity": "61",
          "visibility": "",
          "pressure": "",
          "win": [
            "无持续风向",
            "无持续风向"
          ],
          "win_speed": "<3级",
          "win_meter": "",
          "sunrise": "06:50",
          "sunset": "17:39",
          "air": "55",
          "air_level": "良",
          "air_tips": "",
          "alarm": {
            "alarm_type": "",
            "alarm_level": "",
            "alarm_content": ""
          },
          "hours": [
            {
              "hours": "08时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "18",
              "win": "北风",
              "win_speed": "<3级"
            },
            {
              "hours": "11时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "22",
              "win": "西风",
              "win_speed": "<3级"
            },
            {
              "hours": "14时",
              "wea": "晴",
              "wea_img": "qing",
              "tem": "23",
              "win": "西北风",
              "win_speed": "<3级"
            },
            {
              "hours": "17时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "23",
              "win": "北风",
              "win_speed": "<3级"
            },
            {
              "hours": "20时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "21",
              "win": "北风",
              "win_speed": "<3级"
            },
            {
              "hours": "23时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "20",
              "win": "西风",
              "win_speed": "<3级"
            },
            {
              "hours": "02时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "19",
              "win": "北风",
              "win_speed": "<3级"
            },
            {
              "hours": "05时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "17",
              "win": "北风",
              "win_speed": "<3级"
            }
          ],
          "index": [
            {
              "title": "紫外线指数",
              "level": "弱",
              "desc": "辐射较弱，涂擦SPF12-15、PA+护肤品。"
            },
            {
              "title": "减肥指数",
              "level": "适宜",
              "desc": "天气较好，尽情感受运动的快乐吧。"
            },
            {
              "title": "血糖指数",
              "level": "较易发",
              "desc": "外出需远离过敏源，适当采取防护措施。"
            },
            {
              "title": "穿衣指数",
              "level": "舒适",
              "desc": "建议穿长袖衬衫单裤等服装。"
            },
            {
              "title": "洗车指数",
              "level": "适宜",
              "desc": "天气较好，适合擦洗汽车。"
            },
            {
              "title": "空气污染扩散指数",
              "level": "中",
              "desc": "易感人群应适当减少室外活动。"
            }
          ],
          "uvIndex": "4",
          "uvDescription": "中等"
        },
        {
          "day": "05日（星期二）",
          "date": "2023-12-05",
          "week": "星期二",
          "wea": "多云",
          "wea_img": "yun",
          "wea_day": "多云",
          "wea_day_img": "yun",
          "wea_night": "多云",
          "wea_night_img": "yun",
          "tem": "25",
          "tem1": "25",
          "tem2": "15",
          "humidity": "57",
          "visibility": "",
          "pressure": "",
          "win": [
            "无持续风向",
            "无持续风向"
          ],
          "win_speed": "<3级",
          "win_meter": "",
          "sunrise": "06:51",
          "sunset": "17:39",
          "air": "53",
          "air_level": "良",
          "air_tips": "",
          "alarm": {
            "alarm_type": "",
            "alarm_level": "",
            "alarm_content": ""
          },
          "hours": [
            {
              "hours": "08时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "17",
              "win": "北风",
              "win_speed": "<3级"
            },
            {
              "hours": "11时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "20",
              "win": "北风",
              "win_speed": "<3级"
            },
            {
              "hours": "14时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "24",
              "win": "北风",
              "win_speed": "<3级"
            },
            {
              "hours": "17时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "24",
              "win": "东风",
              "win_speed": "<3级"
            },
            {
              "hours": "20时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "22",
              "win": "西北风",
              "win_speed": "<3级"
            },
            {
              "hours": "23时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "19",
              "win": "东南风",
              "win_speed": "<3级"
            },
            {
              "hours": "02时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "18",
              "win": "东北风",
              "win_speed": "<3级"
            },
            {
              "hours": "05时",
              "wea": "多云",
              "wea_img": "yun",
              "tem": "17",
              "win": "东北风",
              "win_speed": "<3级"
            }
          ],
          "index": [
            {
              "title": "紫外线指数",
              "level": "弱",
              "desc": "辐射较弱，涂擦SPF12-15、PA+护肤品。"
            },
            {
              "title": "减肥指数",
              "level": "适宜",
              "desc": "天气较好，尽情感受运动的快乐吧。"
            },
            {
              "title": "血糖指数",
              "level": "较易发",
              "desc": "外出需远离过敏源，适当采取防护措施。"
            },
            {
              "title": "穿衣指数",
              "level": "舒适",
              "desc": "建议穿长袖衬衫单裤等服装。"
            },
            {
              "title": "洗车指数",
              "level": "适宜",
              "desc": "天气较好，适合擦洗汽车。"
            },
            {
              "title": "空气污染扩散指数",
              "level": "中",
              "desc": "易感人群应适当减少室外活动。"
            }
          ],
          "uvIndex": "5",
          "uvDescription": "中等"
        }
      ],
      "aqi": {
        "update_time": "20:55",
        "cityid": "101281601",
        "city": "",
        "cityEn": "",
        "country": "",
        "countryEn": "",
        "air": "69",
        "air_level": "良",
        "air_tips": "各类人群可多参加户外活动，多呼吸一下清新的空气。",
        "pm25": "46",
        "pm25_desc": "良",
        "pm10": "87",
        "pm10_desc": "良",
        "o3": "50",
        "o3_desc": "",
        "no2": "45",
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
      }
    },
    monthweatherdata: {
      "city": "东莞",
      "cityid": "101281601",
      "update_time": "2023-12-02 15:21:24",
      "data": [
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
      ]
    }
  },
  mutations: {
    updateweathershownow(state, data) {
      delete data.zhishu.kaiche
      state.weatherdata = data
      if (!state.gps) {
        state.gps = state.weatherdata.city
      }
    },
    updateweathershowweek(state, data) {
      state.weekweatherdata = data
    },
    updateweathershowmonth(state, data) {
      console.log('更新40日数据');
      state.monthweatherdata = data
    },

  },
  actions: {
    //获取当日天气数据
    getweathershownow({ commit }, cityname) {
      console.log('调用了');
      axios({
        url: 'http://v1.yiketianqi.com/api',
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
      axios({
        url: 'http://v1.yiketianqi.com/api',
        params: {
          unescape: 1,
          version: 'v9',
          appid: '67713918',
          appsecret: 'aG4DNVMD',
          city: cityname
        }
      }).then(ref => {
        if (ref.data.errmsg) {
          console.log(ref.data.errmsg)
        } else {
          commit('updateweathershowweek', ref.data)
        }
      })
      axios({
        url: 'http://v1.yiketianqi.com/api',
        params: {
          unescape: 1,
          version: 'v3',
          appid: '67713918',
          appsecret: 'aG4DNVMD',
          city: cityname
        }
      }).then(ref => {
        if (ref.data.errmsg) {
          console.log(ref.data.errmsg)
        } else {
          commit('updateweathershowmonth', ref.data)
        }
      })
    },
  }
})