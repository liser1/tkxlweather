<template>
  <div class="historybox">
    <div class="top">
      <h1 class="title">
        {{$store.state.weatherdata.city}}历史天气
      </h1>
      <div class="dateselect">
        <el-date-picker class="cursor" @change="datechange" :disabled-date="disabledDate" :popper-options="{color:red}"
          v-model="value1" value-format="YYYY-MM-DD" type="date" placeholder="请选择查询日期" format="YYYY年MM月DD日" />
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        year: 0,
        month: 0,
        value1: '',
      }
    },
    methods: {
      datechange() {
        this.year = +this.value1.slice(0, 4)
        this.month = +this.value1.slice(5, 7)
        console.log(this.year, this.month, this.value1)
      },
      disabledDate(time) {
        const history = new Date(2012, 0, 0); // 获取当前日期
        const now = new Date(); // 获取当前日期
        const currentDate = new Date(time); // 获取日期选择器的日期

        // 将时间设置为当天 00:00:00，方便比较日期
        now.setHours(0, 0, 0, 0);
        currentDate.setHours(0, 0, 0, 0);

        return currentDate.getTime() >= now.getTime() || currentDate.getTime() <= history.getTime(); // 返回 true 则禁用日期
      }
    }
  }
</script>
<style scoped lang="less">
  .historybox {
    width: 800px;
    height: 100px;
    padding: 20px;
    color: #344665;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, .2);

    .top {
      height: 20px;

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

      .dateselect {
        width: 150px;
        float: right;

        .cursor {
          cursor: pointer;
        }
      }
    }
  }
</style>