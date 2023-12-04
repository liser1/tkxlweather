<template>
  <div class="zhishubox">
    <div class="top">
      <h1 class="title">生活指数</h1>
      <div class="button">
        <el-icon @click="turnleft">
          <ArrowLeftBold />
        </el-icon>
        <el-icon @click="turnright">
          <ArrowRightBold />
        </el-icon>
      </div>
    </div>
    <div class="cardbox" :style="{transform:`translateX(${translatedata}px)`}">
      <div class="card" v-for="(value,key) in $store.state.weatherdata.zhishu" :key="key">
        <div class="massage">
          <div class="cardtop">
            <img :src="`/icon/${key}.png`">
            <p>{{zhishudata[key]}} {{value.level}}</p>
          </div>
          <div class="cardbottom">
            <p>{{value.tips}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        translatedata: 0,
        zhishudata: {
          "chuanyi": '穿衣',
          "daisan": '雨伞',
          "ganmao": '感冒',
          "chenlian": '锻炼',
          "ziwaixian": '防晒',
          "liangshai": '晾晒',
          "xiche": '洗车',
          "lvyou": '旅游',
          "diaoyu": '钓鱼',
        }
      }
    },
    methods: {
      turnleft() {
        this.translatedata = this.translatedata < 0 ? this.translatedata + 230 : this.translatedata
      },
      turnright() {
        this.translatedata = this.translatedata > -230 ? this.translatedata - 230 : this.translatedata
      },
    },
  }
</script>
<style scoped lang="less">
  .zhishubox {
    width: 470px;
    height: 520px;
    box-sizing: border-box;
    padding: 20px 20px 0;
    border-radius: 10px;
    color: #344665;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, .2);
    overflow: hidden;

    .top {
      margin-bottom: 20px;
      height: 20px;

      .title {
        font-size: 18px;
        font-weight: 400;
        height: 20px;
        line-height: 20px;
        float: left;
        margin-right: 10px;
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

      .button {
        float: right;
        display: flex;
        width: 50px;
        justify-content: space-between;
        align-items: center;

        i:hover {
          cursor: pointer;
          transform: scale(1.3);
        }
      }
    }

    .cardbox {
      width: 660px;
      height: 460px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      transition: all 1s;
      color: #384c78;


      .card {
        width: 200px;
        height: 140px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, .2);
        overflow: hidden;



        .massage {
          height: 280px;
          width: 160px;
          margin: 0 auto;
          transition: all 0.5s;

          .cardtop {
            height: 140px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
              width: 35px;
              margin-bottom: 15px;
            }
          }

          .cardbottom {
            height: 140px;
            display: flex;
            justify-content: center;
            align-items: center;

            p {
              font-size: 14px;
            }
          }
        }

        .massage:hover {
          transform: translateY(-140px);
        }
      }
    }
  }
</style>