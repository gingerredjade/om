<template>
  <div class="content-wrapper">
    <!-- 标题栏 -->
    <div class="header">
      <p class="now-time"><span>{{nowTime}}</span></p>
      <p class="title">
        <span>运行管理与维护监控分析平台</span>
      </p>
      <p class="to-dashboard">
        <button class="" @click="goHome">首页</button>
      </p>
    </div>

    <!-- 动效显示 -->
    <div class="flash-effect-out-box">
      <div class="flash-effect-out-box-wrapper"
           style="width: 1000px; height: 500px; position: relative">
        <div class="line2 line"></div>
        <div class="line3 line"></div>
        <div class="line4 line"></div>
        <div class="line5 line"></div>
        <div class="line6 line"></div>

        <!--主动效-->
        <div class="main-effect circle-effect">
          <!--<a href="" _blank></a>-->
          <router-link to="/dashboard">
            <img class="effect-position main-data-effect"
                 src="/media/large-monitor/main_data_effect.png"/>
            <div class="effect-position across-remind-effect-out"
                 style="width: 76px; height: 76px; margin: 9px;">
              <div class="across-remind-effect-in"
                   style="width: 68px; height: 68px; margin: 4px;">
              </div>
            </div>
            <img class="effect-position main-data-effect-special"
                 src="/media/large-monitor/main_data_special_effect.png"/>
            <img class="effect-position across-remind-effect-index"
                 src="/media/large-monitor/main_data_icon.png"/>
            <span class="stage-title">运行管理与维护中心</span>
          </router-link>
        </div>

        <!--卫星动效-->
        <div>
          <div class="circle-effect around-function-effect"
               style="left: 254px; top: 135px;">
            <router-link to="/monitor/cluster-service">
              <img class="effect-position around-data-effect-02" src="/media/large-monitor/aroundeffect.png">
              <div class="effect-position across-remind-effect-out across-remind-effect-out-ard">
                <div class="across-remind-effect-in across-remind-effect-in-ard"></div>
              </div>
              <img class="effect-position across-remind-effec-index" src="/media/large-monitor/xingzhengshenpi.png">
              <span class="stage-title stage-around-title">服务集群监控</span>
            </router-link>
          </div>
          <div class="circle-effect around-function-effect"
               style="left: 190px; bottom: 89px;">
            <router-link to="/monitor/cluster-storage">
              <img class="effect-position around-data-effect-02" src="/media/large-monitor/aroundeffect.png">
              <div class="effect-position across-remind-effect-out across-remind-effect-out-ard">
                <div class="across-remind-effect-in across-remind-effect-in-ard"></div>
              </div>
              <img class="effect-position across-remind-effec-index" src="/media/large-monitor/baixingpaiAPP.png">
              <span class="stage-title stage-around-title">存储集群监控</span>
            </router-link>
          </div>
          <div class="circle-effect around-function-effect"
               style="right: 405px; bottom: 53px;">
            <router-link to="/monitor/cluster-deal">
              <img class="effect-position around-data-effect-02" src="/media/large-monitor/aroundeffect.png">
              <div class="effect-position across-remind-effect-out across-remind-effect-out-ard">
                <div class="across-remind-effect-in across-remind-effect-in-ard"></div>
              </div>
              <img class="effect-position across-remind-effec-index" src="/media/large-monitor/zhatuyunshu.png">
              <span class="stage-title stage-around-title">处理集群监控</span>
            </router-link>
          </div>
          <div class="circle-effect around-function-effect"
               style="right: 243px; bottom: 165px;">
            <router-link to="/dr/overview">
              <img class="effect-position around-data-effect-02" src="/media/large-monitor/aroundeffect.png">
              <div class="effect-position across-remind-effect-out across-remind-effect-out-ard">
                <div class="across-remind-effect-in across-remind-effect-in-ard"></div>
              </div>
              <img class="effect-position across-remind-effec-index" src="/media/large-monitor/12319rexian.png">
              <span class="stage-title stage-around-title">数据资源监控</span>
            </router-link>
          </div>
          <div class="circle-effect around-function-effect"
               style="right: 294px; top: 79px;">
            <router-link to="/upm/user">
              <img class="effect-position around-data-effect-02" src="/media/large-monitor/aroundeffect.png">
              <div class="effect-position across-remind-effect-out across-remind-effect-out-ard">
                <div class="across-remind-effect-in across-remind-effect-in-ard"></div>
              </div>
              <img class="effect-position across-remind-effec-index" src="/media/large-monitor/zonghezhifa.png">
              <span class="stage-title stage-around-title">用户管理</span>
            </router-link>
          </div>

          <div class="circle-effect dec-arround01"
               style="top: 218px;left: 92px;">
            <div class="across-remind-effect-in dec-arround-in01" style=" "></div>
          </div>
          <div class="circle-effect dec-arround01"
               style="top: 197px;right: 163px;">
            <div class="across-remind-effect-in dec-arround-in01" style=" "></div>
          </div>
          <div class="circle-effect dec-arround02"
               style="top: 99px;right: 93px;">
            <div class="across-remind-effect-in dec-arround-in02" style=" "></div>
          </div>
        </div>

      </div>
    </div>


    <!-- 侧边浮窗 -->
    <!-- 左侧 -->
    <div class="flt-outbox left-box">
      <div class="box-content-wrapper">
        <!-- 左上边框 -->
        <div class="t_line_box">
          <i class="t_l_line"></i>
          <i class="l_t_line"></i>
        </div>
        <!-- 右上边框 -->
        <div class="t_line_box">
          <i class="t_r_line"></i>
          <i class="r_t_line"></i>
        </div>
        <!-- 左下边框 -->
        <div class="t_line_box">
          <i class="l_b_line"></i>
          <i class="b_l_line"></i>
        </div>
        <!-- 右上边框 -->
        <div class="t_line_box">
          <i class="r_b_line"></i>
          <i class="b_r_line"></i>
        </div>
        <div class="left-top">
          <div class="all-title">实时统计</div>
          <div class="left-top-info">
            <div class="info-1">
              <div class="info-img fl">
                <img src="" alt="" />
              </div>
              <div class="info-text fl">
                <p>配置总数(个)</p>
                <p>12,457</p>
              </div>
            </div>
            <div class="info-2">
              <div class="info-img fl">
                <img src="" alt="" />
              </div>
              <div class="info-text fl">
                <p>用户总数(个)</p>
                <p>12,457</p>
              </div>
            </div>
            <div class="info-3">
              <div class="info-img fl">
                <img src="" alt="" />
              </div>
              <div class="info-text fl">
                <p>机器总数(台)</p>
                <p>12,457</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="box-content-wrapper">
        <!-- 左上边框 -->
        <div class="t_line_box">
          <i class="t_l_line"></i>
          <i class="l_t_line"></i>
        </div>
        <!-- 右上边框 -->
        <div class="t_line_box">
          <i class="t_r_line"></i>
          <i class="r_t_line"></i>
        </div>
        <!-- 左下边框 -->
        <div class="t_line_box">
          <i class="l_b_line"></i>
          <i class="b_l_line"></i>
        </div>
        <!-- 右上边框 -->
        <div class="t_line_box">
          <i class="r_b_line"></i>
          <i class="b_r_line"></i>
        </div>
        <div class="left-bottom">
          <div class="all-title">配置分类</div>
          <div>echarts图表</div>
          <div>echarts图表</div>
          <div>echarts图表</div>
          <div>echarts图表</div>
          <div>echarts图表</div>
          <div>echarts图表</div>
        </div>
      </div>
    </div>


    <!-- 右侧 -->
    <div class="flt-outbox right-box">
      <div class="box-content-wrapper">
        <!-- 左上边框 -->
        <div class="t_line_box">
          <i class="t_l_line"></i>
          <i class="l_t_line"></i>
        </div>
        <!-- 右上边框 -->
        <div class="t_line_box">
          <i class="t_r_line"></i>
          <i class="r_t_line"></i>
        </div>
        <!-- 左下边框 -->
        <div class="t_line_box">
          <i class="l_b_line"></i>
          <i class="b_l_line"></i>
        </div>
        <!-- 右上边框 -->
        <div class="t_line_box">
          <i class="r_b_line"></i>
          <i class="b_r_line"></i>
        </div>
        <div class="right-top">
          <div class="all-title">滚动显示</div>
          <!--<transition-group>-->
            <div class="scroll-box">
              <div class="scroll-div">
                <ul>
                  <!--<li v-for="(item, i) in scrollData" v-bind:key="i">
                    {{item.content}}
                    <span>{{item.number}}</span>
                  </li>-->
                </ul>
              </div>
            </div>
          <!--</transition-group>-->
        </div>
      </div>

      <div class="box-content-wrapper">
        <!-- 左上边框 -->
        <div class="t_line_box">
          <i class="t_l_line"></i>
          <i class="l_t_line"></i>
        </div>
        <!-- 右上边框 -->
        <div class="t_line_box">
          <i class="t_r_line"></i>
          <i class="r_t_line"></i>
        </div>
        <!-- 左下边框 -->
        <div class="t_line_box">
          <i class="l_b_line"></i>
          <i class="b_l_line"></i>
        </div>
        <!-- 右上边框 -->
        <div class="t_line_box">
          <i class="r_b_line"></i>
          <i class="b_r_line"></i>
        </div>
        <div class="left-bottom">
          <div class="all-title">配置分类</div>
          <div>echarts图表</div>
          <div>echarts图表</div>
          <div>echarts图表</div>
          <div>echarts图表</div>
          <div>echarts图表</div>
          <div>echarts图表</div>
        </div>
      </div>
    </div>


    <!-- 版权 -->
    <div class="copyright-box">
      <i class="fa fa-copyright"></i>
      <span> 版权所有 中国电子科技集团公司第十五研究所 2021 保留一切权利 </span>
    </div>

  </div>
</template>

<script>
  import { showLocale } from "@/core/utils/datetime";
  import $ from 'jquery';

  export default {
    name: "LargeMonitor1",
    components: {

    },
    /* mounted钩子函数 */
    mounted() {
      this.getTimes();
      document.getElementsByTagName("body")[0].className = "big-screen-01-body";
      document.querySelector('body').className = "big-screen-01-body";

      this.infoScroll();
    },
    /* 页面创建前设置 */
    beforeCreate() {
      document.querySelector('body').setAttribute('style', 'background-color: transparent;\n' +
        '    background-image: url("/media/large-monitor/bg_06.jpg");\n' +
        '    background-repeat: repeat-y;\n' +
        '    background-position: center;\n' +
        '    -webkit-background-size: cover;\n' +
        '    background-size: cover;\n' +
        '    width: 100%;\n' +
        '    height: 100%; min-width: 1024px; min-height: 768px;');
    },
    created() {

    },
    /* 在Vue实例销毁前清除定时器 */
    beforeDestroy () {
      this.clear();
      document.querySelector('body').setAttribute('style', "background-image: url(\"media/bg/bg-10.jpg\");");
    },
    data() {
      return {
        nowTime: "", // 格式化后的当前时间
        scrollData: [
          {content: "START本季度执法案件数量超过平均值20%以上。", number: "11/2"},
          {content: "人员制度管理。", number: "11/2"},
          {content: "案件超期率超过30%。", number: "11/2"},
          {content: "本季度执法案件数量超过平均值20%以上。", number: "11/2"},
          {content: "女性人数偏少，仅占总数的20%，执法过程中女性...！", number: "11/2"},
          {content: "END案件超期率超过30。", number: "11/2"}
        ]
      }
    },
    /* methods钩子函数 */
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
      goHome() {
        this.$router.push({ path: "/dashboard"});
      },

      // 实时滚动
      infoScroll() {
        let html = $(".scroll-div ul").html();
        $(".scroll-div ul").append(html);
        let ls = $(".scroll-div li").length/2+1;
        let i = 0;
        this.scrollTimer = setInterval(function () {
          i++;
          if (i == ls) {
            i = 1;
            $(".scroll-div ul").css({marginTop: 0});
            $(".scroll-div ul").animate({marginTop: -'74'*i+'px'}, 1000);
          }
          $(".scroll-div ul").animate({marginTop: -'74'*i+'px'}, 1000);
        }, 2400);
      }
    },
    computed: {

    }
  }
</script>

<style scoped>
  /* 全局控制栏 */
  /*.content-wrapper {
    background-color: transparent;
    background-image: url("/media/large-monitor/bg_03.png");
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: cover;
    background-size: cover;
    width: 100%;
    height: 100%;
  }*/

  /* 标题栏 */
  .header {
    background-image: url("/media/large-monitor/Hometitlebg.png");
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    font-weight: bold;
    display: flex;
    align-items: center;
    flex-direction: initial;
  }
  .header p {
    width: 33.33%;
    display: block;
  }
  .header p:nth-child(1) > span {
    /*background: rgba(255, 255, 255, 0.1);
    padding: 8px 20px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;*/
    display: inline-block;
  }
  .header p:nth-child(1) {
    text-align: left;
    margin-left: 30px;
  }
  .header p:nth-child(3) {
    text-align: right;
    margin-right: 30px;
  }
  .now-time {
    color: #ffffff;
    font-size: 16px;
    font-weight: normal;
  }
  .title {
    font-size: 20px;
    color: #00e4ff;
    height: 69px;
    line-height: 69px;
    margin: auto;
  }
  .to-dashboard {
    color: #ffffff;
  }
  .to-dashboard button {
    background: rgba(255, 255, 255, 0.1);
    font-size: 14px;
    font-weight: normal;
    padding: 8px 15px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .to-dashboard button:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  /* 动效栏 */
  .flash-effect-out-box {
    width: 1000px;
    height: 500px;
    /*margin: 100px auto 0px auto;*/
    /*margin: 0 auto;*/
    background-image: url("/media/large-monitor/chain_bg.png");
    background-repeat: no-repeat;
    background-position: center;
    /*display: flex;
    align-items: center;*/
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .flash-effect-out-box .flash-effect-out-box-wrapper {
    /*height: 500px;*/
    /*position: relative;*/
  }
  .circle-effect {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: rgba(0, 168, 255, 0.6) 1px solid;
    cursor: pointer;
    position: absolute;
  }
  .effect-position {
    position: absolute;
  }
  .across-remind-effect-out {
    background-color: rgba(0, 126, 255, 0.05);
    border-radius: 50%;
  }
  .across-remind-effect-out-ho {
    background-color: rgba(0, 126, 255, 0.15);
  }
  .across-remind-effect-in {
    background-color: rgba(0, 126, 255, 0.3);
    border-radius: 50%;
    margin: auto;
  }
  .across-remind-effect-in-ho {
    background-color: rgba(0, 126, 255, 0.45);
  }
  .across-remind-effect-index {

  }
  .stage-title {
    color: #00e4ff;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: lighter;
    display: block;
    text-align: center;
    position: absolute;
    width: 130px;
    top: 104px;
    left: -10%;
  }
  .stage-around-title {
    left: -25%;
    top:85px;
  }

  .line {
    position: absolute;
    transform-origin:left;
    animation-iteration-count:infinite
  }
  .line2 {
    z-index: 1;left: 330px;top: 183px;width: 0;height: 3px;
    transform: rotate(21deg);
    animation: mm2 4s ;
    animation-delay:2s;animation-iteration-count:infinite;
    background-image: url("/media/large-monitor/linght_ef.png");
    background-repeat: no-repeat;
    background-position: 100%;
  }
  .line3 {
    z-index: 1;left: 262px;top: 351px;width: 0;height: 3px;
    transform: rotate(-25deg);animation: mm 5s ;
    animation-delay:4s;animation-iteration-count:infinite;
    background-image: url("/media/large-monitor/linght_ef.png");
    background-repeat: no-repeat;
    background-position: 100%;

  }
  .line4 {
    z-index: 1;left: 638px;top: 141px;width: 0;height: 3px;
    transform: rotate(-211deg);animation: mm4 3s  ;
    animation-delay:3s;animation-iteration-count:infinite;
    background-image: url("/media/large-monitor/linght_ef.png");
    background-repeat: no-repeat;
    background-position: 100%;
  }
  .line5 {
    z-index: 1;left: 679px;top: 289px;width: 0;height: 3px;
    transform: rotate(-172deg);animation: mm5 5s  ;animation-delay:1s;
    animation-iteration-count:infinite;
    background-image: url("/media/large-monitor/linght_ef.png");
    background-repeat: no-repeat;
    background-position: 100%;
  }
  .line6 {
    z-index: 1;left: 537px;top: 373px;width: 0;height: 3px;
    transform: rotate(-116deg);animation: mm6 4s  ;animation-delay:0s;
    animation-iteration-count:infinite;
    background-image: url("/media/large-monitor/linght_ef.png");
    background-repeat: no-repeat;
    background-position: 100%;
  }
  @keyframes mm{
    0%{width: 0}
    100%{width: 194px}
  }
  @keyframes mm2{
    0%{width: 0}
    100%{width: 113px}
  }
  @keyframes mm4{
    0%{width: 0}
    100%{width: 140px}
  }
  @keyframes mm5{
    0%{width: 0}
    100%{width: 158px}
  }
  @keyframes mm6{
    0%{width: 0}
    100%{width: 94px}
  }


  /* 主动效 */
  .main-effect {
    border: rgba(0, 168, 255, 0.6) 3px solid;
    width: 100px;
    height: 100px;
    left: 430px;
    top: 191px;
  }
  .main-data-effect {
    -webkit-animation: scroll-effect 6.5s infinite linear;;
    -o-animation: scroll-effect 6.5s infinite linear;;
    animation: scroll-effect 6.5s infinite linear;;
  }
  .main-data-effect-special {
    -webkit-animation: main-data-effect-special-animate 0.6s forwards;
    -o-animation: main-data-effect-special-animate 0.6s forwards;
    animation: main-data-effect-special-animate 0.6s forwards;
  }
  @keyframes scroll-effect {
    0%{transfrom: rotate(0deg);}
    25%{transform: rotate(90deg);}
    50%{transform: rotate(180deg);}
    75%{transform: rotate(270deg);}
    100%{transform: rotate(360deg);}
  }
  @keyframes main-data-effect-special-animate {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
  }


  /* 卫星动效 */
  .around-function-effect {
    width: 76px;
    height: 76px;
  }
  .across-remind-effect-out-ard {
    width: 60px;
    height: 60px;
    margin: 8px;
  }
  .across_remind-effect-in-ard {
    width: 54px;
    height: 54px;
    margin: 3px;
  }
  .around-data-effect-01 {
    animation: scroll-effect-arround01 linear infinite 4s forwards;
  }
  .around-data-effect-02 {
    animation: scroll-effect-arround01 linear infinite 3.8s forwards;
  }
  .around-data-effect-03 {
    animation: scroll-effect-arround01 linear infinite 4.2s forwards;
  }
  @keyframes scroll-effect-arround01 {
    0%{transfrom: rotate(0deg);}
    25%{transform: rotate(-90deg);}
    50%{transform: rotate(-180deg);}
    75%{transform: rotate(-270deg);}
    100%{transform: rotate(-360deg);}
  }

  /* 修饰卫星 */
  .dec-arround01 {
    width: 39px;
    height: 39px;
    cursor: auto;
  }
  .dec-arround-in01 {
    width: 33px;
    height: 33px;
    margin: 2px;
    background-color: rgba(0,126,255,0.8);
  }
  .dec-arround-in01:hover {
    background-color: rgba(0,126,255,0.9);
  }
  .dec-arround02 {
    width: 29px;
    height: 29px;
    cursor: auto;
  }
  .dec-arround-in02 {
    width: 23px;
    height: 23px;
    margin: 2px;
    background-color: rgba(0,126,255,0.7);
  }
  .dec-arround-in02:hover {
    background-color: rgba(0,126,255,0.8);
  }


  /* 版权信息 */
  .copyright-box {
    position: absolute;
    bottom: 10px;
    left: 40%;
  }
  .copyright-box span {
    color: #ffffff;
    font-size: 12px;
    text-align: center;
  }

  /* 左右侧盒子信息 */
  .flt-outbox {
    position: absolute;
    width: 282px;
  }
  .left-box {
    left: 2%;
    top: 85px;
  }
  .right-box {
    right: 2%;
    top: 85px;
  }
  .box-content-wrapper {
    border: 1px solid rgba(25, 186, 139, .17);
    padding: 0 .3rem .3rem .3rem;
    background: rgba(255, 255, 255, .04) url("/media/large-monitor/line.png");
    -webkit-background-size: 100% auto;
    background-size: 100% auto;
    margin-top: 40px;
    z-index: 10;
    /* (水平X方向偏移量,垂直Y方向偏移量,高斯模糊半径,阴影颜色值) */
    -webkit-box-shadow: inset 0 0 8px #00e4ff;/*#02a6b6 #2C58A6*/
    -moz-box-shadow: inset 0 0 8px #00e4ff;
    box-shadow: inset 0 0 8px #00e4ff;
    position: relative;
  }
  .flt-outbox > div.box-content-wrapper {
    width: 100%;
    height: 380px;
    box-sizing: border-box;
  }

  /* 方框边角 */
  .t_line_box {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .t_line_box i {
    background-color: #00e4ff;
    -webkit-box-shadow: inset 0px 0px 10px #00e4ff; /*00e4ff   4788fb*/
    -moz-box-shadow: inset 0px 0px 10px #00e4ff;
    box-shadow: inset 0px 0px 10px #00e4ff;
    position: absolute;
  }
  /*左上角左竖*/
  .l_t_line {
    width: 2px;
    height: 24px;
    left: -7px;
    top: -3px;
  }
  /*左上角上横*/
  .t_l_line {
    width: 22px;
    height: 2px;
    left: -5px;
    top: -3px;
  }
  /*右上角上横*/
  .t_r_line {
    width: 22px;
    height: 2px;
    right: 4px;
    top: -3px;
  }
  /*右上角右竖*/
  .r_t_line {
    width: 2px;
    height: 24px;
    top: -3px;
    right: 2px;
  }
  /*左下角左竖*/
  .l_b_line {
    width: 2px;
    height: 24px;
    left: -7px;
    bottom: -3px;
  }
  /*左下角底横*/
  .b_l_line {
    width: 22px;
    height: 2px;
    bottom: -3px;
    left: -5px;
  }
  /*右下角右竖*/
  .r_b_line {
    width: 2px;
    height: 24px;
    right: 2px;
    bottom: -3px;
  }
  /*右下角底横*/
  .b_r_line {
    width: 22px;
    height: 2px;
    bottom: -3px;
    right: 2px;
  }

  /* 左侧盒子信息 */
  .all-title {
    font-size: 18px;
    line-height: 45px;
    height: 45px;
    color: #ffffff;
    text-align: center;
    /*border-bottom: 1px solid rgba(255,255,255,.2);*/
  }



  /* 右侧盒子信息 */
  /*实时滚动信息*/
  .scroll-box {
    margin: auto;
  }
  .scroll-box .scroll-div {
    height: 294px;
    overflow: hidden;
  }
  .scroll-box .scroll-div > ul {
    list-style: none;
  }
  .scroll-box .scroll-div > ul li {
    background-color: rgba(252, 250, 243, .1);
    width: 260px;
    height: 66px;
    margin: 8px auto;
    position: relative;
    padding: 6px 9px 6px 9px;
    font-size: 14px;
    color: #dfdede;
    overflow: hidden;
    line-height: 30px;
  }
  .scroll-ul-li {
    background-color: rgba(252, 250, 243, .1);
    width: 260px;
    height: 66px;
    margin: 8px auto;
    position: relative;
    padding: 6px 9px 6px 9px;
    font-size: 14px;
    color: #dfdede;
    overflow: hidden;
    line-height: 30px;
  }
  .scroll-box .scroll-div > ul li > span {
    position: absolute;
    bottom: 5px;
    right:16px;
    width: 68px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    color: #081e49;
    background-color: #69c200;
    display: block;
  }


</style>
