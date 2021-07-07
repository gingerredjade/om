<template>
  <div class="canvas" id="canvas">
    <!-- 顶部 -->
    <div class="header">
      <h1>运行管理与维护可视化中心</h1>
      <div class="time-wrapper">
        <span id="showTime">{{nowTime}}</span>
      </div>
    </div>

    <!-- 主内容区域 -->
    <div class="main-box">
      <ul class="clearfix">
        <!-- 左侧区域 -->
        <li>
          <div class="box-all" style="height: 3.2rem;">
            <div class="box-title">服务分类</div>
            <div class="box-info" id="host-info-chart">
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
            </div>
            <div class="box-foot"></div>
          </div>
          <div class="box-all" style="height: 3.2rem;">
            <div class="box-title">物理资源使用情况</div>
            <div class="box-info" id="service-classify-chart">
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
            </div>
            <div class="box-foot"></div>
          </div>
        </li>
        <!-- 中间区域 -->
        <li>
          <div class="bar">
            <div class="bar-box">
              <ul class="clearfix">
                <li class="pulll_left counter">241332</li>
                <li class="pulll_left counter">554734</li>
                <li class="pulll_left counter">453466</li>
              </ul>
            </div>
            <div class="bar-box2">
              <ul class="clearfix">
                <li class="pulll_left counter">服务节点数量</li>
                <li class="pulll_left counter">存储节点数量</li>
                <li class="pulll_left counter">处理节点数量</li>
              </ul>
            </div>
          </div>
          <div class="relationship">
            <div class="r-map1"><img src="/media/large-monitor/lbx.png"></div>
            <div class="r-map2"><img src="/media/large-monitor/jt.png"></div>
            <div class="r-map3"><img src="/media/large-monitor/map.png"></div>
          </div>
        </li>
        <!-- 右侧区域 -->
        <li>
          <div class="box-all" style="height: 3.2rem;">
            <div class="box-title">数据资源分类</div>
            <div class="box-info" id="date-resource-chart">
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
            </div>
            <div class="box-foot"></div>
          </div>
          <div class="box-all" style="height: 3.0rem;">
            <div class="box-title">用户状态统计</div>
            <div class="box-info" id="user-status-chart">
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
            </div>
            <div class="box-foot"></div>
          </div>
          <div class="box-all" style="height: 2.8rem;">
            <div class="box-title">系统运行状态</div>
            <div class="box-info" id="system-run-status-chart">
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
              <p>gvdbdfbfdb</p>
            </div>
            <div class="box-foot"></div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import { showLocale } from "@/core/utils/datetime";
  import $ from 'jquery';
  import { pageResize4BigScreen } from "../../../../core/utils/bigscreen/resetScreenSize";

  export default {
    name: "LargeMonitor3",
    components: {

    },
    mounted() {
      this.getTimes();
      pageResize4BigScreen();
      $("html").css({overflowY: 'hidden'});
    },
    /* 页面创建前设置 */
    beforeCreate() {
      document.querySelector('body').setAttribute('style',
        'background-color: transparent;\n' +
        '    background-image: url("/media/large-monitor/bg_06.jpg");\n' +
        '    background-repeat: repeat-y;\n' +
        '    background-position: center;\n' +
        '    -webkit-background-size: cover;\n' +
        '    background-size: cover;\n' +
        '    width: 100%; height: 100%;' +
        '    min-height: 768px; ' +
        '    flex-direction: unset; -ms-flex-direction: unset;');
    },
    created() {

    },
    /* 在Vue实例销毁前清除定时器 */
    beforeDestroy () {

    },
    data() {
      return {
        nowTime: "", // 格式化后的当前时间
      }
    },
    methods: {
      getTimes() {
        let _this = this;
        this.timer = setInterval(function () {
          _this.nowTime = showLocale();
        }, 1000);
      },
      clear() {
        if (this.timer) {
          clearInterval(this.getTimes());
          this.nowTime = null;
        }
      },
    },
    computed: {

    }
  }
</script>

<style scoped>
  *, body {
    padding: 0;
    margin: 0;
    color: #222;
    font-family: "微软雅黑";
  }
  html {
    font-size: 20px;
  }
  *{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
  }
  @font-face{
    font-family: electronicFont;
    src: url("/font/DS-DIGIT.TTF");
  }
  img {
    border: none;
    max-width: 100%;
  }

  .clearfix:after,
  .clearfix:before {
    display: table;
    content: " "
  }
  .clearfix:after {
    clear: both;
  }

  .pulll_left{
    float:left;
  }
  .pulll_right{
    float:right;
  }

  .canvas{
    position: absolute;
    width:100%;
    left: 0;
    top: 0;
    height: 99%;
    z-index: 1;
  }

  #canvas {
    border: 2px solid red;
  }

  /* 顶部 */
  .header {
    height: 1.05rem;
    background: url("/media/large-monitor/head_bg.png") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    z-index: 100;
    font-family: "微软雅黑";
    border: none;
  }
  .header h1 {
    color: #ffffff;
    text-align: center;
    font-weight: bold;
    font-size: .4rem;
    line-height: .8rem;
    margin: 0 auto;
  }
  .header .time-wrapper {
    position: absolute;
    right: .3rem;
    top: 0;
    line-height: .75rem;
  }
  #showTime {
    color: rgba(255,255,255,.7);
    font-size: .18rem;
    padding-right: .1rem;
  }

  /* 主区域 */
  .main-box {
    /*border: 1px solid red;*/
    padding: .1rem .1rem 0rem .1rem;
  }
  .main-box ul {

  }
  .main-box ul li {
    float: left;
    padding: 0 .1rem;
    width: 30%;
  }
  .main-box ul li:nth-child(2) {
    padding: 0;
    width: 40%;
  }

  .box-all {
    border: 1px solid rgba(25, 186, 139, .17);
    /*padding: 0 .2rem .4rem .15rem;*/
    background: rgba(255, 255, 255, .04) url("/media/large-monitor/line.png");
    background-size: 100% ;
    position: relative;/*必须有after、before,对应设置的横竖线才生效*/
    margin-bottom: .4rem;
    z-index: 10;
    -webkit-box-shadow: inset 0 0 3px #00e4ff;/*#02a6b6 #2C58A6*/
    -moz-box-shadow: inset 0 0 3px #00e4ff;
    box-shadow: inset 0 0 3px #00e4ff;
  }
  .box-all:before,
  .box-all:after {
    position:absolute;
    width: .1rem;
    height: .1rem;
    content: "";
    border-top: 2px solid #02a6b5;
    top: 0;
  }
  .box-all:before,
  .box-foot:before {
    border-left: 2px solid #02a6b5;
    left: 0;
  }
  .box-all:after,
  .box-foot:after {
    border-right: 2px solid #02a6b5;
    right: 0;
  }
  .box-all .box-title {
    color: #ffffff;
    font-size: .2rem;
    text-align: center;
    line-height: .5rem;
  }
  .box-all .box-info p {
    color: #ffffff;
    font-size: .1rem;
  }

  .box-foot {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
  }
  .box-foot:before,
  .box-foot:after {
    position:absolute;
    width: .1rem;
    height: .1rem;
    content: "";
    border-bottom: 2px solid #02a6b5;
    bottom: 0;
  }


  .bar {
    background: rgba(101, 132, 226, .1);
    padding: .15rem;
  }

  .bar-box {
    border: 1px solid rgba(25, 186, 139, .17);
    position: relative;/*必须有after、before,对应设置的横竖线才生效*/
  }

  .bar-box li,
  .bar-box2 li {
    list-style: none;
    width: 33.33%;
    text-align: center;
    position: relative;
    z-index: 100;
  }
  .bar-box:before,
  .bar-box:after {
    position: absolute;
    width: .3rem;
    height: .1rem;
    content: '';
  }
  .bar-box:before {
    border-left: 2px solid #02a6b5;
    left: 0;
    top: 0;
    border-top: 2px solid #02a6b5;
  }
  .bar-box:after {
    border-right: 2px solid #02a6b5;
    right: 0;
    bottom: 0;
    border-bottom: 2px solid #02a6b5;
  }

  .bar-box li {
    color: #ffeb7b;
    padding: .05rem 0;
    font-family: electronicFont;
    font-weight: bold;
    font-size: .7rem;
  }
  .bar-box2 ul li {
    font-size: .19rem;
    color: rgba(255, 255, 255, .7);
    padding-top: .1rem !important;
  }

  .relationship {
    position: relative;
    height: 7.2rem;
    z-index: 9;
    /*border: 1px solid #00b300;*/
  }
  .r-map1,
  .r-map2,
  .r-map3 {
    position: absolute;
    opacity: .5;
  }
  .r-map1 {
    width: 6.43rem;
    z-index: 2;
    top: .45rem;
    left: .7rem;
    animation: r-map1-animate 15s infinite linear;
    /*border: 1px solid #8950FC;*/
  }
  .r-map2 {
    width: 5.66rem;
    z-index: 3;
    top: .85rem;
    left: 1.2rem;
    animation: r-map2-animate 10s infinite linear;
    /*border: 1px solid green;*/
  }
  .r-map3 {
    width: 5.18rem;
    z-index: 1;
    top: 1.07rem;
    left: 1.4rem;
    /*border: 1px solid orange;*/
  }
  @keyframes r-map1-animate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  @keyframes r-map2-animate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-359deg);
    }
  }



</style>
