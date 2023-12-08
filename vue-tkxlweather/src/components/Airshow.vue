<template>
  <table cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th :style="{backgroundColor:aircolor}" colspan="3">空气质量指数
          {{$store.state.weatherdata.aqi.air+''+$store.state.weatherdata.aqi.air_level}}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="right top">
          <div class="im">
            <p>{{$store.state.weatherdata.aqi.pm25}}</p>
            <p>PM2.5</p>
          </div>
        </td>
        <td class="right top">
          <div class="im">
            <p>{{$store.state.weatherdata.aqi.pm10}}</p>
            <p>PM10</p>
          </div>
        </td>
        <td class="top">
          <div class="im">
            <p>{{$store.state.weatherdata.aqi.so2}}</p>
            <p>SO2</p>
          </div>
        </td>
      </tr>
      <tr>
        <td class="top right">
          <div class="im">
            <p>{{$store.state.weatherdata.aqi.no2}}</p>
            <p>NO2</p>
          </div>
        </td>
        <td class="top right">
          <div class="im">
            <p>{{$store.state.weatherdata.aqi.o3}}</p>
            <p>O3</p>
          </div>
        </td>
        <td class="top">
          <div class="im">
            <p>{{$store.state.weatherdata.aqi.co}}</p>
            <p>CO</p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    props: {
      aircolor: String
    },
  }
</script>
<style scoped lang="less">
  table {
    width: 255px;
    text-align: center;
    border-radius: 8px;
    color: black;
    background-color: white;

    th {
      height: 42px;
      color: white;
      font-weight: 400;
      border-radius: 8px 8px 0 0;
    }

    td {
      height: 63px;
      width: 85px;

      p {
        line-height: 24px;
        margin: 0;
        font-size: 14px;
        color: #555;
      }
    }

    .right {
      border-right: 1px solid #efefef;
    }

    .top {
      border-top: 1px solid #efefef;
    }

    .im p:nth-child(2) {
      font-size: 12px;
      color: #9f9f9f;
    }
  }
</style>