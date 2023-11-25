<template>
  <div class="hourshow">
    <div class="top">
      <h1>逐小时预报</h1>
      <span>数据来源易客云API</span>
      <div class="button">
        <el-icon @click="turnleft">
          <ArrowLeftBold />
        </el-icon>
        <el-icon @click="turnright">
          <ArrowRightBold />
        </el-icon>
      </div>
    </div>
    <div :style="{transform:`translateX(${translatedata}px)`}" class="hourlist">
      <div v-for="hourdata in weahourdata" :key="hourdata.hours">
        <span>{{hourdata.hours}}</span>
        <img :src='getImgsrc(hourdata.wea_img)'>
        <p>{{Math.floor(hourdata.tem)}}°</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        translatedata: 0
      }
    },
    methods: {
      turnleft() {
        this.translatedata = this.translatedata < 0 ? this.translatedata + 400 : this.translatedata
      },
      turnright() {
        this.translatedata = this.translatedata > -1200 ? this.translatedata - 400 : this.translatedata
      },
      getImgsrc(imgname) {
        return `../../public/icon/${imgname}.png`
      }
    },
    computed: {
      weahourdata() {
        return this.$store.state.weatherdata.hours.slice(0, 24)
      }
    }
  }
</script>
<style lang="less">
  .hourshow {
    width: 1200px;
    height: 190px;
    margin: 50px auto 0;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, .2);
    box-sizing: border-box;
    padding: 20px 30px 30px;
    overflow: hidden;

    .top {
      color: #344665;
      margin-bottom: 20px;
      width: 1140px;
      height: 20px;

      h1 {
        font-size: 18px;
        font-weight: 400;
        height: 20px;
        line-height: 20px;
        float: left;
        margin-right: 10px;
      }

      h1::before {
        content: '';
        float: left;
        margin-top: 9px;
        margin-right: 10px;
        width: 7px;
        height: 7px;
        background: #344665;
        border-radius: 50%;
      }

      span {
        height: 20px;
        line-height: 20px;
        float: left;
        font-size: 12px;
        color: #8a9baf;
      }

      .button {
        float: right;
        display: flex;
        width: 50px;
        justify-content: space-between;

        i:hover {
          cursor: pointer;
          transform: scale(1.3);
        }
      }
    }

    .hourlist {
      white-space: nowrap;
      width: 2340px;
      height: 100px;
      display: flex;
      justify-content: space-around;
      transition: all 1s;

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;

        span {
          font-size: 14px;
          color: #8a9baf;
        }

        img {
          width: 30px;
        }

        p {
          font-size: 18px;
          color: #384c78;
        }
      }
    }
  }
</style>