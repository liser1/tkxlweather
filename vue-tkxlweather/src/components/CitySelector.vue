<template>
  <el-cascader class="transparent-cascader" v-model="city" :options="options" :show-all-levels="false" />
</template>
<script>
  import options from '../assets/city.js'
  export default {
    data() {
      return {
        options,
        city: ''
      };
    },
    props: {
      space: String
    },
    watch: {
      space(newvalue) {
        console.log('地质变化了:' + newvalue);
        this.city = newvalue
        console.log(this.city);
      }
    },
    methods: {
      optionchange() {
        this.$emit('citychange', this.city)
      }
    },
    created() {
      this.city = this.space
    }
  };
</script>
<style>
  .el-input__wrapper {
    background-color: transparent !important;
    box-shadow: none !important;
    padding: 0;

  }

  .el-input__inner {
    color: white !important;
    font-size: 16px;
    width: 80px;
    text-align: center;
  }

  .el-input__suffix {
    display: none;
  }
</style>