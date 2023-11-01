<template>
  <div id="selectbox">
    <select v-model="selectedprovince" @change="onProvinceChange">
      <option v-for="province in province" :value="province.name">{{ province.name }}</option>
    </select>
    <select v-model="selectedCity" @change="onCityChange">
      <option v-for="city in cities" :value="city.name">{{ city.name }}</option>
    </select>
    <select v-model="selectedCounty">
      <option v-for="county in counties" :value="county">{{ county }}</option>
    </select>
  </div>
</template>
<script>
  import province from '../assets/city.js'
  export default {
    data() {
      return {
        province,
        cities: [],
        counties: [],
        selectedprovince: null,
        selectedCity: null,
        selectedCounty: null,
      };
    },
    methods: {
      onProvinceChange() {
        this.selectedCounty = null;
        this.selectedCity = null;
        this.cities = this.province.filter(item => item.name == this.selectedprovince)[0].city
        console.log(this.selectedprovince);
      },
      onCityChange() {
        this.selectedCounty = null;
        this.counties = this.cities.filter(item => item.name == this.selectedCity)[0].districtAndCounty
      }

    }
  };
</script>
<style scoped lang="less">
  div {
    width: 300px;
    height: 100px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    select {
      height: 25px;
      width: 90px;
      margin-left: 5px;
    }
  }
</style>