<template>
  <div class="clickshowbox">
    <div class="top">
      <div class="date">
        <span>{{$store.state.monthweatherdata.data[this.activeIndex].week}}</span>
        <p>{{date}}</p>
        <p>农历 {{$store.state.monthweatherdata.data[this.activeIndex].date_nl}}</p>
      </div>
      <h1 class="title">天气详情</h1>
    </div>
    <div class="weabody">
      <div class="bodytop">
        <img :src="`/public/icon/${$store.state.monthweatherdata.data[this.activeIndex].wea_img}.png`">
        <div class="imgright">
          <p>{{$store.state.monthweatherdata.data[this.activeIndex].wea}}</p>
          <span>{{$store.state.monthweatherdata.data[this.activeIndex].tem2}} ~
            {{$store.state.monthweatherdata.data[this.activeIndex].tem1}}℃</span>
        </div>
      </div>
      <p>
        <el-icon>
          <Sunrise />
        </el-icon>
        日出时间：{{$store.state.monthweatherdata.data[this.activeIndex].sunrise==''?'未知':$store.state.monthweatherdata.data[this.activeIndex].sunrise}}
      </p>
      <p>
        <el-icon>
          <Sunset />
        </el-icon>
        日落时间：{{$store.state.monthweatherdata.data[this.activeIndex].sunset==''?'未知':$store.state.monthweatherdata.data[this.activeIndex].sunset}}
      </p>
      <p>
        <el-icon>
          <WindPower />
        </el-icon>
        风力：{{$store.state.monthweatherdata.data[this.activeIndex].win==''?'未知':$store.state.monthweatherdata.data[this.activeIndex].win}}
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      activeIndex: Number
    },
    computed: {
      date() {
        return `${this.$store.state.monthweatherdata.data[this.activeIndex].date.slice(0, 4)}年${this.$store.state.monthweatherdata.data[this.activeIndex].date.slice(5, 7)}月${this.$store.state.monthweatherdata.data[this.activeIndex].date.slice(-2)}日`
      }
    }
  }
</script>
<style scoped lang="less">
  .clickshowbox {
    width: 280px;
    height: 450px;
    box-sizing: border-box;
    padding: 20px;
    color: #344665;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, .2);
    position: sticky;
    top: 10px;

    .top {

      .date {
        margin-bottom: 30px;

        span {
          float: right;
        }
      }

      .title {
        font-size: 25px;
        font-weight: 400;
        height: 25px;
        line-height: 25px;
        text-align: center;
        margin-bottom: 40px;
      }
    }

    .weabody {
      .bodytop {
        display: flex;
        margin-bottom: 20px;

        img {
          width: 100px;
          margin-right: 20px;
        }

        .imgright {
          height: 100px;

          p {
            font-size: 20px;
            height: 20px;
            line-height: 20px;
            margin: 10px 0 25px;
          }

          span {
            font-size: 25px;
            height: 25px;
            line-height: 25px;
          }
        }
      }

      p {
        font-size: 18px;
        margin-bottom: 15px;
      }
    }
  }
</style>