<template>
  <div class="box">
    <div class="left">
      <p>{{$store.state.weatherdata.city}}<span id="update_time">最近{{$store.state.weatherdata.update_time}}更新</span></p>
      <div class="main">
        <div class="bigline">
          <div id="tem">{{$store.state.weatherdata.tem+'°'}}</div>
          <div id="wea">{{$store.state.weatherdata.wea}}</div>
          <div id="airshow">
            <span id="air" @mouseenter="airmouseenter" @mouseleave="airmouseleave" :style="{backgroundColor: aircolor}">
              {{$store.state.weatherdata.air+' '+$store.state.weatherdata.air_level}}</span>
            <div>
              <airshow v-show="airshadow" :aircolor="aircolor">
              </airshow>
            </div>
          </div>
        </div>
        <div class="smallline">

          <el-icon :size="20">
            <WindPower />
          </el-icon>
          <span>
            {{$store.state.weatherdata.win+' '+$store.state.weatherdata.win_speed}}
          </span>

          <el-icon :size="20">
            <Umbrella />
          </el-icon>
          <span>
            湿度 {{$store.state.weatherdata.humidity}}
          </span>

          <el-icon :size="20">
            <Stopwatch />
          </el-icon>
          <span>
            气压 {{$store.state.weatherdata.pressure}}hPa
          </span>
        </div>
        <div class="airtips">
          <el-icon :size="20">
            <Ship />
          </el-icon>
          {{$store.state.weatherdata.air_tips}}
        </div>
      </div>
    </div>
    <div class="right">
      <img :src="weaimg" alt="">
    </div>
  </div>
</template>
<script>
  import airshow from './Airshow.vue'
  export default {
    components: {
      airshow
    },
    data() {
      return {
        aircolor: '',
        airshadow: false,
      }
    },
    methods: {
      changecolor() {
        if (this.$store.state.weatherdata.air_level == '优') {
          this.aircolor = '#a3d765'
        } else if (this.$store.state.weatherdata.air_level == '良') {
          this.aircolor = '#f0cc35'
        } else if (this.$store.state.weatherdata.air_level == '轻度污染' || this.$store.state.weatherdata.air_level == '中度污染') {
          this.aircolor = '#f0b835'
        } else {
          this.aircolor = '#f03535'
        }
      },
      airmouseenter() {
        this.airshadow = true
      },
      airmouseleave() {
        this.airshadow = false
      }
    }
    ,
    mounted() {
      this.changecolor()
    },
    computed: {
      weaimg: function () {
        return `../../public/icon/${this.$store.state.weatherdata.wea_img}.png`
      }
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
    align-items: center;

    .left {
      font-size: 18px;

      #update_time {
        font-size: 14px;
        opacity: 0.6;
      }

      .main {
        .bigline {
          margin: 25px 0;
          display: flex;
          align-items: flex-end;

          #tem {
            font-size: 86px;
            line-height: 86px;
          }

          #wea {
            font-size: 28px;
            margin-right: 20px;
          }

          #airshow {
            position: relative;

            #air {
              height: 20px;
              padding: 1px 10px;
              border-radius: 10px;
              text-align: center;
              font-size: 14px;
            }

            #air:hover {
              cursor: pointer;
            }

            div {
              position: absolute;
              top: 35px;
              z-index: 1;
              margin-left: calc(50% - 128px);
            }
          }
        }

        .smallline {
          display: flex;
          align-items: center;

          span {
            margin-right: 40px;
          }

          i {
            margin-right: 8px;
          }
        }

        .airtips {
          margin-top: 22px;
          display: flex;
          align-items: center;

          i {
            margin-right: 5px;
          }
        }
      }
    }

    .right {
      img {
        width: 180px;
        margin-right: 50px;
      }
    }
  }
</style>