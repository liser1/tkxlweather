<template>
  <div class="monthShow">
    <div class="top">
      <h1 class="title">{{$store.state.weatherdata.city}}未来四十日天气预报</h1>
      <div class="button">
        <router-link to="/dayweathershow/tem">今日天气预报</router-link>
        <router-link to="/monthweatherShow">40日天气预报</router-link>
      </div>
    </div>
    <ul class="weekname">
      <li>周日</li>
      <li>周一</li>
      <li>周二</li>
      <li>周三</li>
      <li>周四</li>
      <li>周五</li>
      <li>周六</li>
    </ul>
    <div class="bottom">
      <div class="dayBox" v-for="index in newweatherdata[1]" :key="index"></div>
      <div class="dayBox" v-for="(day, index) in newweatherdata[0]" :key="index" :data-index="index"
        @click="changecolor" :style="{ backgroundColor: activeIndex == index ? '#9ee3ff' : '' }">
        <div>
          <p class="date">{{day.date.slice(8) == '01' ? day.date.slice(5) : day.date.slice(-2)}}</p>
          <img :src="`/public/icon/${day.wea_img}.png`" alt="">
          <p>{{day.tem2}} ~ {{day.tem1}}℃</p>
          <p>{{day.wea}}</p>
          <p>{{day.win}}</p>
        </div>
      </div>
      <div class="dayBox" v-for="index in newweatherdata[2]" :key="index"></div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      activeIndex: Number
    },
    methods: {
      changecolor(e) {
        this.$emit('updateIndex', +e.currentTarget.dataset.index)
      }
    },
    computed: {
      newweatherdata() {
        const newdata = []
        const befordata = []
        const afterdata = []
        let beforcard = 0
        let aftercard = 0
        newdata.push(JSON.parse(JSON.stringify(this.$store.state.monthweatherdata.data)))
        newdata[0][0].date = '今天'
        switch (this.$store.state.monthweatherdata.data[0].week) {
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
          befordata.unshift({})
        }
        for (let i = 0; i < aftercard; i++) {
          afterdata.push({})
        }
        newdata.push(befordata)
        newdata.push(afterdata)
        return newdata
      }
    },
  }
</script>
<style scoped lang="less">
  .monthShow {
    width: 880px;
    padding: 0 10px 10px;
    color: #344665;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, .2);

    .top {
      height: 20px;
      padding: 20px;

      .title {
        font-size: 18px;
        font-weight: 400;
        height: 20px;
        line-height: 20px;
        float: left;
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
        width: 210px;
        justify-content: space-between;
        align-items: center;

        a {
          text-align: center;
          width: 95px;
          height: 24px;
          line-height: 24px;
          font-size: 12px;
          color: #384c78;
          border-radius: 12px;
          background-color: #d6ddec;
          border: 1px solid #bdc5ce;
        }

        a:hover {
          background-color: #c0c9db;
        }
      }

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

      .dayBox[data-index] {
        cursor: pointer;
      }

      .dayBox:hover {
        padding-top: 9px;
        padding-left: 9px;
        background-color: rgba(255, 255, 255, 0.4);
        border: 1px solid blue;
      }
    }
  }
</style>