<template>
  <div class="canvas" id="canvas" v-if="isAuthenticated">
    <!-- 顶部 -->
    <div class="header">
      <h1>运行管理与维护可视化中心</h1>
      <div class="time-wrapper">
        <span id="showTime">{{nowTime}}</span>
      </div>
      <div class="logout-wrapper">
        <button class="logout-btn" @click="onLogout">
          <i class="flaticon-logout logout-icon"></i>
        </button>
      </div>
    </div>

    <!-- 主内容区域 -->
    <div class="main-box">
      <ul class="clearfix">
        <!-- 左侧区域 -->
        <li>
          <div class="box-all" style="height: 50%;">
            <router-link
              to="/monitor/service">
              <div class="box-title">服务分类</div>
            </router-link>
            <div class="box-info" id="svcCategoryCharts"></div>
            <div class="box-foot"></div>
          </div>
          <div class="box-all" style="height: 42%;">
            <router-link to="/monitor/hardware">
              <div class="box-title">物理资源使用情况</div>
            </router-link>
            <div class="box-info">
              <div class="physical-res-usage"
                   style="height: 70%; width: 100%;">
                <div id="cpuUsageCharts" class="pru"></div>
                <div id="memUsageCharts" class="pru"></div>
                <div id="storageUsageCharts" class="pru"></div>
              </div>
              <div class="physical-res-info"
                   style="height: 30%; width: 100%;">
                <div class="host-total" style="">
                  <div class="host-number masked-info">6,754,895</div>
                  <div class="host-number-tip">主机个数</div>
                </div>
                <div class="host-warn" style="">
                  <div class="host-number masked-warn">27</div>
                  <div class="host-number-tip">异常</div>
                </div>
              </div>
            </div>
            <div class="box-foot"></div>
          </div>
        </li>
        <!-- 中间区域 -->
        <li>
          <div class="bar">
            <div class="bar-box">
              <ul class="clearfix">
                <li class="pull_left counter">
                  <CountUp
                    :delay="counterDelay"
                    :endVal="serviceNodeVal"
                    :options="options"
                  />
                </li>
                <li class="pull_left counter">
                  <CountUp
                    :delay="counterDelay"
                    :endVal="storageNodeVal"
                    :options="options"
                  />
                </li>
                <li class="pull_left counter">
                  <CountUp
                    :delay="counterDelay"
                    :endVal="dealNodeVal"
                    :options="options"
                  />
                </li>
              </ul>
            </div>
            <div class="bar-box2">
              <ul class="clearfix">
                <li class="pull_left">服务节点数量</li>
                <li class="pull_left">存储节点数量</li>
                <li class="pull_left">处理节点数量</li>
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
          <div class="box-all" style="height: 40%;">
            <router-link to="/dr/overview">
              <div class="box-title">数据资源分类</div>
            </router-link>
            <div class="box-info" id="date-resource-chart">
              <div id="dataResCharts" style="height: 100%; width: 100%;">
              </div>
            </div>
            <div class="box-foot"></div>
          </div>
          <div class="box-all" style="height: 26%;">
            <router-link to="/sys/user">
              <div class="box-title">用户画像</div>
            </router-link>
            <div class="box-info" id="user-status-chart">
              <div id="userStateCharts" style="height: 100%; width: 100%;">
                <div id="userTotalChart" class="usc"></div>
                <div id="userOnlineChart" class="usc"></div>
                <div id="userFrozenChart" class="usc"></div>
              </div>
            </div>
            <div class="box-foot"></div>
          </div>
          <div class="box-all" style="height: 24%;">
            <router-link to="/log/query">
              <div class="box-title">系统运行状态</div>
            </router-link>
            <div class="box-info" id="system-run-status-chart" style="width: 100%; height: 65%;">
              <div class="" v-if="sysRunInfoShow">系统运行正常</div>
              <!-- 创建canvas元素 -->
              <canvas id="system-run-status-con"
                      ref="srsCanvas"
                      style="display: inline-block; margin: 0 auto;"
              >
                您的浏览器不支持Canvas。
                <br />
                Your browser does not support the HTML5 canvas tag.
              </canvas>
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
  import { pageResize4BigScreen, pageResize4BigScreenDestroy } from "@/core/utils/bigscreen/resetScreenSize";
  import { mapGetters } from "vuex";
  import {
    ADD_BODY_CLASSNAME,
    REMOVE_BODY_CLASSNAME
  } from "@/core/services/store/htmlclass.module.js";
  import { LOGOUT } from "@/core/services/store/auth.module";
  import * as echarts from 'echarts';
  import mockData from "@/core/utils/bigscreen/data/mock-chart-data";
  import {
    serviceCategoryOptions,
    cpuUsageOptions,
    memoryUsageOptions,
    storageUsageOptions,
    dataResOptions,
    userStateOptionsTotal,
    userStateOptionsOnline,
    userStateOptionsFrozen,
    sysOperationStateOptions
  } from "@/core/utils/bigscreen/data/async-chart-options";
  import CountUp from 'vue-countup-v2'

  export default {
    name: "Bs",
    components: {
      CountUp
    },
    beforeMount() {
      // show page loading
      this.$store.dispatch(ADD_BODY_CLASSNAME, "page-loading");
    },
    mounted() {
      // check if current user is authenticated
      if (!this.isAuthenticated) {
        this.$router.push({name: "login"});
      }

      // Simulate the delay page loading
      setTimeout(() => {
        // Remove page loader after some time
        this.$store.dispatch(REMOVE_BODY_CLASSNAME, "page-loading");
      }, 500);

      // initialize time acquirer
      this.getTimes();

      // initialize reset screen size
      pageResize4BigScreen();
      //$("html").css({overflowY: 'hidden'});

      // load statistical chart data
      this.countSvcCategory();
      this.countCpuUsage();
      this.countMemoryUsage();
      this.countStorateUsage();
      this.dataResCategory();
      this.countUserTotal();
      this.countUserStateOnline();
      this.countUserStateFrozen();

      this.drawSystemRunStatus();
      // this.drawCanvasText();
    },
    computed: {
      ...mapGetters([
        "isAuthenticated",
        "layoutConfig"
      ])
    },
    /* set before page creation */
    beforeCreate() {
      document.querySelector('body').setAttribute('style',
        'background-color: transparent;\n' +
        '    background-image: url("/media/large-monitor/bg_06.jpg"); \n' +
        '    background-repeat: repeat-y;\n' +
        '    background-position: center;\n' +
        '    -webkit-background-size: cover;\n' +
        '    background-size: cover;\n' +
        '    width: 100%; height: 100%;' +
        '    flex-direction: unset; -ms-flex-direction: unset;');
    },
    created() {
    },
    /* clear timer before Vue instance destruction */
    beforeDestroy() {
      this.clear();
    },
    data() {
      return {
        nowTime: "", // formatted time

        // 数字动画相关
        counterDelay: 1000, // 数字动画延迟
        serviceNodeVal: 24133,
        storageNodeVal: 55473,
        dealNodeVal: 11453,
        options: {
          useEasing: true,
          useGrouping: false,
          separator: ',',
          decimal: ',',
          prefix: '',
          suffix: ''
        },

        // 用户画像相关
        userTotal: 821,
        userOnline: 298,
        userOffline: 523,
        userFrozen: 21,
        userUnfrozen: 800,

        canvasWidth: null,
        canvasHeight: null,
        sysRunInfoShow: false,
        canvasPoints: [],
        canvasCtx: null,
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
      onLogout() {
        this.$store
          .dispatch(LOGOUT)
          .then(() => this.$router.push({ name: "login" }));
      },
      /**
       * 统计数据
       */
      // 服务类别画像
      countSvcCategory: function () {
        let that = this;

        let curChart = document.getElementById('svcCategoryCharts');
        let myChart = echarts.init(curChart, 'light');
        if (serviceCategoryOptions && typeof serviceCategoryOptions === 'object') {
          myChart.setOption(serviceCategoryOptions);
        }

        // 使用指定的配置项和数据显示图表
        myChart.hideLoading();
        myChart.setOption({
          series: [{
            data: mockData.serviceCategoryData.seriesData
          }],
          legend: {},
          toolbox: {
            show: true,
            feature: {
              myUpdateTool: {
                show: true,
                title: '刷新',
                onclick: function () {
                  that.countSvcCategory();
                }
              }
            }
          }
        });

        window.addEventListener("resize",function(){
          myChart.resize();
        });
      },
      // CPU使用情况
      countCpuUsage: function () {
        let that = this;

        let curChart = document.getElementById('cpuUsageCharts');
        let myChart = echarts.init(curChart);
        if (cpuUsageOptions && typeof cpuUsageOptions === 'object') {
          myChart.setOption(cpuUsageOptions);
        }

        // 使用指定的配置项和数据显示图表
        myChart.hideLoading();
        myChart.setOption({
          series: [{
            data: [{
              value: mockData.cpuUsageDatas.seriesData,
              name: 'CPU使用率'
            }]
          }],
          legend: {}
        });

        window.addEventListener("resize",function(){
          myChart.resize();
        });
      },
      // 内存使用情况
      countMemoryUsage: function () {
        let that = this;

        let curChart = document.getElementById('memUsageCharts');
        let myChart = echarts.init(curChart, 'light');
        if (memoryUsageOptions && typeof memoryUsageOptions === 'object') {
          myChart.setOption(memoryUsageOptions);
        }

        // 使用指定的配置项和数据显示图表
        myChart.hideLoading();
        myChart.setOption({
          series: [{
            data: [{
              value: mockData.memoryUsageDatas.seriesData,
              name: '内存使用率'
            }]
          }],
          legend: {}
        });

        window.addEventListener("resize",function(){
          myChart.resize();
        });
      },
      // 存储使用情况
      countStorateUsage: function () {
        let that = this;

        let curChart = document.getElementById('storageUsageCharts');
        let myChart = echarts.init(curChart, 'light');
        if (storageUsageOptions && typeof storageUsageOptions === 'object') {
          myChart.setOption(storageUsageOptions);
        }

        // 使用指定的配置项和数据显示图表
        myChart.hideLoading();
        myChart.setOption({
          series: [{
            data: [{
              value: mockData.storageUsageDatas.seriesData,
              name: '存储使用率',
            }]
          }],
          legend: {}
        });

        window.addEventListener("resize",function(){
          myChart.resize();
        });
      },
      // 数据资源类别画像
      dataResCategory: function () {
        let that = this;

        let curChart = document.getElementById('dataResCharts');
        let myChart = echarts.init(curChart, 'light');
        if (dataResOptions && typeof dataResOptions === 'object') {
          myChart.setOption(dataResOptions);
        }

        // 使用指定的配置项和数据显示图表
        myChart.hideLoading();
        myChart.setOption({
          series: [{
            data: mockData.dataResDatas.seriesData
          }],
          legend: {},
          xAxis: [{
              data: mockData.dataResDatas.xAxisData
          }]
        });

        window.addEventListener("resize",function(){
          myChart.resize();
        });
      },
      // 用户状态统计
      countUserTotal: function () {
        let that = this;

        let curChart = document.getElementById('userTotalChart');
        let myChart = echarts.init(curChart, 'light');

        if (userStateOptionsTotal && typeof userStateOptionsTotal === 'object') {
          myChart.setOption(userStateOptionsTotal);
        }

        // 使用指定的配置项和数据显示图表
        myChart.hideLoading();
        myChart.setOption({
          series: [{
            data: [{
              value: this.userTotal,
              label: {
                normal: {
                  formatter: this.userTotal + '',
                  textStyle: {
                    fontSize: 20,
                    color: '#ffffff',
                  }
                }
              }
            }]
          }],
          legend: {}
        });

        window.addEventListener("resize",function(){
          myChart.resize();
        });
      },
      countUserStateOnline: function () {
        let that = this;

        let curChart = document.getElementById('userOnlineChart');
        let myChart = echarts.init(curChart, 'light');
        if (userStateOptionsOnline && typeof userStateOptionsOnline === 'object') {
          myChart.setOption(userStateOptionsOnline);
        }

        // 使用指定的配置项和数据显示图表
        myChart.hideLoading();
        myChart.setOption({
          series: [{
            data: [
              {
                value: that.userOnline,
                name: '在线用户',
                label: {
                  normal: {
                    formatter: that.userOnline + '\n',
                    textStyle: {
                      fontSize: 20,
                      color: '#fff',
                    }
                  }
                }
              },
              {
                value: that.userOffline,
                name: '离线用户',
                label: {
                  normal: {
                    formatter: function (params) {
                      let val = (that.userOnline) / (that.userTotal) * 100;
                      return '\n\n占比' + Math.round(val) + '%';
                    },
                    textStyle: {
                      color: '#aaa',
                      fontSize: 12
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: 'rgba(255,255,255,.2)'
                  },
                  emphasis: {
                    color: '#fff'
                  }
                },
              }
            ]
          }]
        });

        window.addEventListener("resize",function(){
          myChart.resize();
        });
      },
      countUserStateFrozen: function () {
        let that = this;

        let curChart = document.getElementById('userFrozenChart');
        let myChart = echarts.init(curChart, 'light');
        if (userStateOptionsFrozen && typeof userStateOptionsFrozen === 'object') {
          myChart.setOption(userStateOptionsFrozen);
        }

        // 使用指定的配置项和数据显示图表
        myChart.hideLoading();
        myChart.setOption({
          series: [{
            data: [
              {
                value: that.userFrozen,
                name: '冻结状态',
                label: {
                  normal: {
                    formatter: that.userFrozen + '\n',
                    textStyle: {
                      fontSize: 20,
                      color: '#fff',
                    }
                  }
                }
              },
              {
                value: 800,
                name: '正常状态',
                label: {
                  normal: {
                    formatter: function (params) {
                      return '\n\n占比' + Math.round(that.userFrozen / (that.userTotal) * 100) + '%'
                    },
                    textStyle: {
                      color: '#aaa',
                      fontSize: 12
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: 'rgba(255, 255, 255, .2)'
                  },
                  emphasis: {
                    color: '#fff'
                  }
                },
              }
            ]
          }]
        });

        window.addEventListener("resize",function(){
          myChart.resize();
        });
      },

      initCanvasWH: function () {
        this.canvasWidth = document.getElementById('system-run-status-chart').clientWidth;
        this.canvasHeight = document.getElementById('system-run-status-chart').clientHeight;
      },
      drawCanvasText: function () {
        this.sysRunInfoShow = false;

        this.initCanvasWH();

        let canvas = this.$refs.srsCanvas;
        // 获取上下文
        this.context = canvas.getContext('2d');
        canvas.width = this.canvasWidth;
        canvas.height = this.canvasHeight;
        // 绘制文字
        const font = '当前运行状况良好\n\n无故障待处理';
        this.context.clearRect(0, 0, canvas.width, canvas.height);
        this.context.save(); // 保存
        // 绘制视窗
        this.context.beginPath();

        this.context.font = '0.26rem Verdana';
        // 创建渐变
        let gradient = this.context.createLinearGradient(0, 0, canvas.width, 0);
        /*gradient.addColorStop(0, 'magenta');
        gradient.addColorStop(0.5, 'blue');
        gradient.addColorStop(1.0, 'red');*/
        gradient.addColorStop(0, 'rgb(201, 62, 255)');
        gradient.addColorStop(0.5, 'rgb(137, 150, 254)');
        gradient.addColorStop(1.0, 'rgb(81, 247, 253)');
        // 用渐变色
        this.context.fillStyle = gradient;
        // measureText方法获取文字的宽度,为了能够在画布中间绘制文字.
        const measure = this.context.measureText(font);

        this.context.fillText(font, (this.canvasWidth - measure.width)/2, this.canvasHeight/2);

        this.context.restore(); // 状态恢复

        let that = this;
        // 延迟清除画布
        /*setTimeout(function () {
          that.context.clearRect(0, 0, canvas.width, canvas.height);
          that.sysRunInfoShow = true;
        }, 3000);*/
      },

      show: function () {
        this.drawSystemRunStatus();
      },
      // 系统运行状态
      drawSystemRunStatus: function () {
        this.initCanvasWH();

        // 获取Canvas画布元素(主画布)
        //let canvas = document.getElementById('system-run-status-con');
        let canvas = this.$refs.srsCanvas;

        // 渲染上下文
        if (canvas.getContext) {
          // 获取canvas画布的上下文
          this.context = canvas.getContext('2d');
          canvas.width = this.canvasWidth;
          canvas.height = this.canvasHeight;

          //const font = '当前运行状况良好\n\n无故障待处理';
          const font = '当前运行状况良好 无故障待处理';
          this.context.clearRect(0, 0, canvas.width, canvas.height);
          this.context.save(); // 保存
          // 绘制视窗
          this.context.beginPath();

          this.context.font = '0.26rem Verdana';
          // 创建渐变
          let gradient = this.context.createLinearGradient(0, 0, canvas.width, 0);
          gradient.addColorStop(0, 'magenta');
          gradient.addColorStop(0.5, 'blue');
          gradient.addColorStop(1.0, 'red');
          // 用渐变色
          this.context.fillStyle = gradient;
          // measureText方法获取文字的宽度,为了能够在画布中间绘制文字.
          const measure = this.context.measureText(font);

          this.context.fillText(font, (this.canvasWidth - measure.width)/2, this.canvasHeight/2);
          this.context.restore(); // 状态恢复

          // 获取到文字粒子的位置信息.
          let fontInfos = this.getFontInfo(this.context);
          this.canvasPoints = fontInfos;

          debugger
          this.canvasCtx = this.context;
          //this.particlesInit(this.context);
          this.particlesInit();

          /*this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
          this.canvasPoints.forEach((value) => {
            value.draw();
          });
          let raf = window.requestAnimationFrame(this.drawSystemRunStatus);
          if (this.canvasPoints[0].item>=1) {
            window.cancelAnimationFrame(raf);
          }*/
        }
      },
      // 获取文字位置信息(获取每个文字在画布中的坐标)
      getFontInfo: function (ctx) {
        let that = this;

        class Particle {
          constructor(center) {
            this.x = center.x; // 记录点位最终应该停留在的x轴位置
            this.y = center.y; // 记录点位最终应该停留在的y轴位置
            this.item = 0;     // 贝塞尔曲线系数
            this.vx = 20;      // 点位在x轴的移动速度
            this.vy = 16;       // 点位在y轴的移动速度
            this.initX = Math.random() * that.canvasWidth; // 点位随机在画布中的x坐标
            this.initY = Math.random() * that.canvasHeight; // 点位随机在画布中的y坐标
          }
          draw(){ // 绘制点位
            ctx.beginPath();
            const {x, y} = threeBezier( // 贝塞尔曲线，获取每一个tick点位所在位置
              this.item,
              [this.initX,this.initY],
              [this.x,this.y],
              [this.x,this.y],
              [this.x, this.y]
            );
            ctx.arc(x, y, 2, 0, 2 * Math.PI, true);
            ctx.fillStyle = "green";
            ctx.fill();
            ctx.closePath();
            this.speed(); // 点位下次tick绘制时的坐标
          }
          speed() { // 每个点位绘制后的坐标
            this.initX += this.vx;
            this.initY += this.vy;
            this.item += 0.005;
          }
        }

        const threeBezier = (t, p1, p2, cp1, cp2) => {
          const [startX,startY] = p1;
          const [endX,endY] = p2;
          const [cpX1,cpY1] = cp1;
          const [cpX2,cpY2] = cp2
          let x = startX * Math.pow(1-t,3) +
            3 * cpX1 * t * Math.pow(1-t,2) +
            3 * cpX2 * Math.pow(t,2) * (1-t) +
            endX * Math.pow(t,3);
          let y = startY * Math.pow(1-t,3) +
            3 * cpY1 * Math.pow(1-t,2) * t +
            3 * cpY2 *(1- t) * Math.pow(t,2) +
            endY * Math.pow(t,3)
          return {
            x,
            y,
          }
        };

        // data属性返回一个 Uint8ClampedArray，它可以被使用作为查看初始像素数据。
        // 每个像素用4个1bytes值(按照红，绿，蓝和透明值的顺序; 这就是"RGBA"格式) 来代表。
        // 每个颜色值部份用0至255来代表。
        // 每个部份被分配到一个在数组内连续的索引，左上角像素的红色部份在数组的索引0位置。
        // 像素从左到右被处理，然后往下，遍历整个数组
        let imageData = ctx.getImageData(0, 0, that.canvasWidth, that.canvasHeight).data;
        const particles = [];
        for(let x = 0; x < that.canvasWidth; x += 4) {
          for(let y=0; y < that.canvasHeight; y += 4) {
            const fontIndex = (x + y * that.canvasWidth) * 4 + 3;
            if(imageData[fontIndex] > 0) {
              particles.push(new Particle({
                x,
                y,
              }))
            }
          }
        }

        console.log(particles);
        return particles;
      },
      // 文字位置、粒子运动轨迹确定后,启动/暂停动画
      // cancelAnimationFrame取消动画,要跟在requestAnimationFrame后面.
      // 保证在递归调用init方法之前去执行cancelAnimationFrame(异步!).
      particlesInit: function () {
        this.canvasCtx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.canvasPoints.forEach((value) => {
          value.draw();
        });
        let raf = window.requestAnimationFrame(this.particlesInit);
        if (this.canvasPoints[0].item>=1) {
          window.cancelAnimationFrame(raf);
        }
      }
    },
    beforeRouteLeave(to, from, next) {
      next();
      /* remove special custom content of current page */
      pageResize4BigScreenDestroy();
      $("html").removeAttr('style');
      $("body").removeAttr('style');
    },
    /* page destruction */
    destroyed() {

    }
  }

</script>

<style scoped>
  *, body {
    padding: 0;
    margin: 0;
  }
  html {
    font-size: 20px;
  }
  *{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
  }

  /*  多样化字体引入  */
  @font-face{/*DIGIT数字字体*/
    font-family: electronicFont;
    src: url("/font/DS-DIGIT.TTF");
  }
  @font-face {/*液晶字体*/
    font-family: 'ds-digitalbold';
    src: url('/font/_-webfont.eot');
    src: url('/font/_-webfont.eot?#iefix') format('embedded-opentype'),
    url('/font/_-webfont.woff2') format('woff2'),
    url('/font/_-webfont.woff') format('woff'),
    url('/font/_-webfont.ttf') format('truetype'),
    url('/font/_-webfont.svg#ds-digitalbold') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {/*变现金刚字体*/
    font-family: 'bankgothic_md_btmedium';
    src: url('/font/bnkgothm-webfont.eot');
    src: url('/font/bnkgothm-webfont.eot?#iefix') format('embedded-opentype'),
    url('/font/bnkgothm-webfont.woff2') format('woff2'),
    url('/font/bnkgothm-webfont.woff') format('woff'),
    url('/font/bnkgothm-webfont.ttf') format('truetype'),
    url('/font/bnkgothm-webfont.svg#bankgothic_md_btmedium') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {/*圆形字体*/
    font-family: 'nasalizationregular';
    src: url('/font/nasalization_rg-webfont.woff2') format('woff2'),
    url('/font/nasalization_rg-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {/*科幻字体加粗*/
    font-family: 'transformersregular';
    src: url('/font/transformers_movie-webfont.woff2') format('woff2'),
    url('/font/transformers_movie-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
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

  .pull_left{
    float:left;
  }
  .pull_right{
    float:right;
  }

  .canvas{
    position: absolute;
    width:100%;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 1;
  }

  #canvas {
    /*border: 1px solid red;*/
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
    left: .3rem;
    top: 0;
    line-height: .70rem;
  }
  #showTime {
    color: rgba(255,255,255,.7);
    font-size: .18rem;
    padding-right: .1rem;
  }

  .logout-wrapper {
    position: absolute;
    right: .3rem;
    top: 0;
    line-height: .70rem;
  }
  .logout-btn {
    color: rgba(255, 255, 255, .7);
    font-size: .18rem;
  }
  .logout-btn .logout-icon {
    color: rgba(255,255,255,.6);
    font-size: 0.25rem;
  }
  .logout-btn .logout-icon:hover,
  .logout-btn .logout-icon:active {
    /*color: rgba(174, 213, 245, 1);
    color: rgba(30, 144, 255);
    color: rgba(73, 146, 255);
    color: rgba(174, 213, 245);
    color: rgba(98, 182, 47);
    color: rgba(124, 255, 178);
    color: rgba(252, 203, 0);
    color: rgba(255, 132, 0);*/
    color: rgba(11, 183, 175, .8);
  }


  /* 主区域 */
  .main-box {
    padding: .1rem .1rem 0rem .1rem;
    height: calc(100% - 1.05rem);
    position: relative;
    /*border: 1px solid green;*/
  }
  .main-box ul {
    display: flex;
    flex-direction: row;
    align-items: normal;
    flex: 1 1 auto;
    height: 100%;
    /*border: 1px solid #8950FC;*/
  }
  .main-box ul li {
    /*float: left;*/
    padding: 0 .1rem;
    width: 30%;
    /*border: 1px solid orange;*/
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
    box-shadow: inset 0 0 1px #00e4ff;
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
  .box-all .box-title:hover {
    color: #0ee5ff;
  }
  .box-all .box-info p {
    color: #ffffff;
    font-size: .1rem;
  }
  .box-all .box-info {
    height: calc(100% - .7rem);
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
    position: relative; /*必须有after、before,对应设置的横竖线才生效*/
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
    height: 7.2rem; /* calc(100% - 3.5rem) */
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

  .pru {
    /*border: 1px solid green;*/
    float: left;
    width: 33.33%;
    height: 100%;
  }
  .usc {
    float: left;
    width: 33.33%;
    height: 100%;
  }

  .physical-res-info {
    display: flex;
    flex-direction: row;/* 子元素横向排列 */
    display: -webkit-flex;
    justify-content: center;/* 相对父元素水平居中 */
    align-items: center;/*  子元素相对父元素垂直居中 */
  }
  .physical-res-info .host-total {
    flex: 1;
    -webkit-flex: 1;
  }
  .physical-res-info .host-warn {
    flex: 1;
    -webkit-flex: 1;
    flex-grow:1;/* 属性用于设置或检索弹性盒的扩展比率。 */
  }
  .physical-res-info .host-total,
  .physical-res-info .host-warn {
    text-align: center;
  }
  .physical-res-info .host-number {
    color: #f4ab20 !important;
    font-family: 'ds-digitalbold';
    font-size: 0.30rem;
  }
  .physical-res-info .host-number-tip {
    color: rgba(255,255,255,.6);
    font-size: 0.15rem;
  }
  @media all and (-webkit-min-device-pixel-ratio:0) and (min-resolution: .001dpcm) {
    .masked-warn{
      /*background: -webkit-linear-gradient(left, #0ee5ff, #0e84ff 25%, #0ee5ff 50%, #0e84ff 75%, #0ee5ff);*/
      background: -webkit-linear-gradient(left, #FF2902, #f425f3 25%, #FF2902 50%, #f425f3 75%, #FF2902);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-background-size: 200% 100%;
      -webkit-animation: masked-animation 0.8s infinite linear;
    }
    .masked-info{
      background: -webkit-linear-gradient(left, #0ee5ff, #f4ab20 50%, #0ee5ff 50%, #f4ab20 100%, #0ee5ff);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-background-size: 200% 100%;
      -webkit-animation: masked-animation 4s infinite linear;
    }
  }
  @-webkit-keyframes masked-animation {
    0%  { background-position: 0 0;}
    100% { background-position: -100% 0;}
  }

  .counter:hover {
    color: #0ee5ff; /* #0BB7AF  #62B62F   */
    transition: color 0.35s ease-out;
    /*background: -webkit-linear-gradient(left, #0ee5ff, #f4ab20 50%, #0ee5ff 50%, #f4ab20 100%, #0ee5ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: hue 60s infinite linear;*/
  }
  @-webkit-keyframes hue {
    from {
      -webkit-filter: hue-rotate(0deg);
    }
    to {
      -webkit-filter: hue-rotate(-360deg);
    }
  }

</style>
