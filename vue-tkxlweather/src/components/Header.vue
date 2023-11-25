<template>
  <div class="box">
    <div class="left">
      <i>天空旋律气象站</i>
    </div>
    <div class="right">
      <div class="space">
        <span>
          <img src="../assets/space.png" alt="">
          <!-- <CitySelector :space="space" /> -->
          <el-cascader class="transparent-cascader" v-model="space" :options="options" :show-all-levels="false" />
        </span>
        <div id="cityselect">
          <input v-model="information" type="text" placeholder="搜索城市天气" @input="areaInput" @focus="show" @blur="hidden">
          <div class="selectbox" v-show="inputIsshow">
            <div class="history" v-if="!information.length">
              <div>
                <p>当前定位</p>
                <el-icon>
                  <LocationFilled />
                </el-icon>
                <span @click="dianji">
                  {{$store.state.gps}}
                </span>

              </div>
              <div>
                <p>
                  历史记录
                  <a @click="cleanall">清除</a>
                </p>
                <div v-for="city in historycities" :key="city">
                  <span @click="dianji">{{city}}</span>
                </div>
              </div>
            </div>
            <ul v-else-if="cities.length">
              <li v-for="city in cities" :key="city">
                {{city[0]}},<span @click="dianji">{{city[1]}}</span>
              </li>
            </ul>
            <ul class="nocity" v-else>
              <li class="nocity">抱歉，未找到相关城市</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="border"></div>
</template>
<script>
  import debounce from 'lodash/debounce'
  import options from '../assets/city.js'
  export default {
    data() {
      return {
        options,
        isshow: false,
        inputIsshow: false,
        space: '',
        information: '',
        cities: [],
        historycities: [],
        key: true
      }
    },
    methods: {
      dianji(e) {
        this.space = e.target.innerText
        const index = this.historycities.indexOf(e.target.innerText)
        if (index != -1) {
          this.historycities.splice(index, 1)
        }
        this.historycities.unshift(e.target.innerText)
        localStorage.setItem('historycities', JSON.stringify(this.historycities))
      },
      getHistory() {
        const history = localStorage.getItem('historycities')
        this.historycities = history ? JSON.parse(history) : []
      },
      cleanall() {
        this.historycities = []
        localStorage.setItem('historycities', JSON.stringify(this.historycities))
      },
      show() {
        this.inputIsshow = true
      },
      hidden() {
        setTimeout(() => {
          this.inputIsshow = false
          this.information = ''
          this.cities = []
        }, 100)
      },
      citycommit(data) {
        if (data != '滨海新区' && data != '沈北新区' && data.length > 2) {
          if (data.slice(-3) == '自治县') {
            data = data.slice(0, -3)
          } else if ((data.slice(-2) == '特区' || data.slice(-2) == '矿区') && data != '鹰手营子矿区') {
            data = data.slice(0, -2)
          } else {
            data = data.slice(0, -1)
          }
        }
        return data
      },
      citychange(cityname) {
        const citycommit = this.citycommit(cityname)
        this.$store.dispatch('getweathershownow', citycommit)
      },
      areaInput: debounce(function () {
        //输入框数据处理
        const information = this.information.trim().toLowerCase()
        this.cities = []
        if (information !== '') {
          this.options.forEach(province => {
            const matchedCities = this.searchCities([province], information)

            for (let i = 0; i < matchedCities.length; i++) {
              this.cities.push(matchedCities[i])
            }
          });
        }
      }, 300),//加入lodash debounce节流
      searchCities(data, im) {
        const matchingCities = []
        data.forEach(area => {
          if (area.children && area.children.length != 0) {
            const matchingChildren = this.searchCities(area.children, im)

            if (matchingChildren.length > 0) {
              matchingCities.push(...matchingChildren.map(a => a[0] ? [area.label + ',' + a[0], a[1]] : [area.label, a[1]]))
            }
          } else if (area.label.includes(im)) {
            matchingCities.push([null, area.label])
          }
        })
        return matchingCities
      },
      updatespace(value) {
        this.options.forEach(province => {
          const matchedCities = this.searchCities([province], value)
          for (let i = 0; i < matchedCities.length; i++) {
            if (matchedCities[i]) {
              this.space = matchedCities[i][1]
            }
          }
        })
      }
    },
    created() {

    },
    mounted() {
      this.$store.watch(
        (state) => state.weatherdata, // 监听的状态路径
        (newValue, oldValue) => {
          // 当状态发生变化时执行的操作
          if (this.key) {
            this.updatespace(newValue.city)
            this.key = false
          }
        },
      )
      this.getHistory()

    },
    watch: {
      space(newValue, oldValue) {
        if (oldValue) {
          if (typeof (newValue) == 'object') {
            this.citychange(newValue[newValue.length - 1])
          } else {
            this.citychange(this.space)
          }
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .box {
    margin: 0 auto;
    width: 1200px;
    height: 65px;
    display: flex;
    align-items: center;
    color: white;

    .left {
      height: 40px;
      line-height: 40px;
      font-size: 30px;
      margin-right: auto;
    }

    .right {

      img {
        vertical-align: middle;
        margin-right: 5px;
      }

      .space {
        position: relative;
        display: flex;

        .child {
          position: absolute;
          top: 40px;
        }

        span {
          cursor: pointer;
        }

        #cityselect {
          input {
            width: 250px;
            height: 20px;
            padding: 5px 13px;
            margin-left: 10px;
            border: 0;
            background: rgba(255, 255, 255, 0.2);
            color: rgba(255, 255, 255, .7);
            border-radius: 15px;
            outline: none;
          }

          input::placeholder {
            color: rgba(255, 255, 255, .7);
          }

          .selectbox {
            position: absolute;
            top: 35px;
            right: 0;
            width: 256px;
            box-shadow: 0 0 4px 0 rgba(0, 0, 0, .15);
            border-radius: 5px;
            background: #fff;
            color: #555;
            padding: 10px 10px;
            font-size: 12px;

            .history {
              >div {
                padding: 10px 10px;

                p {
                  color: #9f9f9f;
                  margin-bottom: 10px;
                }

                a {
                  float: right;
                  width: 40px;
                  height: 18px;
                  line-height: 18px;
                  text-align: center;
                  border-radius: 9px;
                  background-color: #f0f0f0;
                  color: #868686;
                  cursor: pointer;
                }

                span {
                  font-size: 14px;
                  margin-bottom: 10px;
                }

                span:hover {
                  background-color: #f3f3f3;
                  color: blue;
                }

                div {
                  width: 59px;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  float: left;
                  margin-bottom: 10px;
                }
              }
            }

            ul {
              list-style: none;
              max-height: 210px;
              overflow: auto;

              li {
                padding: 10px 0;

                span {
                  color: blue;
                }

                span:hover {
                  cursor: pointer;
                }
              }
            }


          }

          .nocity {
            text-align: center;
          }
        }

      }
    }
  }

  .border {
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    margin-bottom: 40px;
  }
</style>