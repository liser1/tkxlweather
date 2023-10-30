<template>
  <div class="box">
    <div class="left">
      <i>天空旋律</i>
    </div>
    <div class="right">
      <p class="space">
        <img src="../assets/space.png" alt="">
        {{space.sheng+" "+space.shi}}
        <input type="text" value="搜索城市天气">
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        space: {
          sheng: '湖南省',
          shi: '长沙市'
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .box {
    margin: 0 auto;
    width: 1200px;
    background-color: #65b1fa;
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

      input {
        width: 250px;
        height: 20px;
        padding: 5px 13px;
        border: 0;
        background: rgba(255, 255, 255, 0.2);
        color: rgba(255, 255, 255, .7);
        border-radius: 15px;
      }
    }
  }
</style>