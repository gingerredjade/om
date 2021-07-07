<template>
  <!-- 使用particals.js实现登录页炫酷粒子动效 -->
  <div id="particles-js"></div>
</template>

<script>
  /* eslint-disable */
  import particlesJs from 'particles.js';
  import particlesConfig from './particles.json';

  export default {
    name: "index",
    mounted() {
      this.init();
    },
    methods: {
      init() {
        particlesJS('particles-js', particlesConfig);
        //document.body.style.overflow = "hidden";
      }
    }
  }
</script>

<style scoped>
  /*粒子动效*/
  #particles-js {
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url("/media/large-monitor/bg_10.jpg") !important;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: auto;
    margin-right: auto;
  }
</style>
