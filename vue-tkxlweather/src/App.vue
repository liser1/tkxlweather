<template>
  <Header></Header>
</template>

<script>
  import axios from 'axios'
  import Header from './components/Header.vue'
  export default {
    components: {
      Header
    },
    data() {
      return {
        massage: 'Hello World!'
      };
    },
    watch: {},
    computed: {},
    methods: {

    },
    created() {

    },
    mounted() {

    }
  };
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    background: linear-gradient(to left bottom, rgb(85, 105, 255), rgb(120, 180, 250));
  }
</style>