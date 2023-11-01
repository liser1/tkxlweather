<template>
  <div class="box">
    <div class="left">
      <i>天空旋律气象站</i>
    </div>
    <div class="right">
      <div class="space">
        <span id="choosespace" @click="spaceclick">
          <img src="../assets/space.png" alt="">
          {{space.sheng+" "+space.shi}}
        </span>
        <input type="text" placeholder="搜索城市天气">
        <div v-show="isshow" class="child">
          <CitySelector />
        </div>
      </div>
    </div>
  </div>
  <div class="border"></div>
</template>
<script>
  import CitySelector from './CitySelector.vue'
  export default {
    components: {
      CitySelector
    },
    data() {
      return {
        isshow: false,
        space: {
          sheng: '湖南',
          shi: '长沙'
        }
      }
    },
    methods: {
      spaceclick() {
        this.isshow = !this.isshow
        console.log(this.isshow);
      },
      otherclick(e) {
        if (e.target !== document.querySelector('#selectbox') && e.target !== document.querySelector('#choosespace') && this.isshow) {
          this.isshow = false
          console.log(e.target);
        }
      }
    },
    mounted() {
      document.addEventListener('click', this.otherclick)
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

        .child {
          position: absolute;
          top: 50px;
        }

        span {
          cursor: pointer;
        }

        input {
          width: 250px;
          height: 20px;
          padding: 5px 13px;
          margin-left: 20px;
          border: 0;
          background: rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, .7);
          border-radius: 15px;
          outline: none;
        }

        input::placeholder {
          color: rgba(255, 255, 255, .7);
        }
      }
    }
  }

  .border {
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    margin-bottom: 40px;
  }
</style>