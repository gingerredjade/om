<template>
  <div class="canvas" id="canvas">
    <div class="leftC">
      <div>vdsbgiuh897er48t</div>
      <div>vdsbgiuh897er48t</div>
      <div>vdsbgiuh897er48t</div>
      <div>vdsbg0iuh897er48t</div>
      <div>vdsbgiuh897er48t</div>
      <div>vdsbgiuh897er48t</div>
    </div>
    <div class="centerC">
      <div>vdsbgiuh897er48t</div>
      <div>vdsbgiuh897er48t</div>
      <div>vdsbgiuh897er48t</div>
      <div>vdsbgiuh897er48t</div>
      <div>vdsbgiuh897er48t</div>
      <div>vdsbgiuh897er48t</div>
    </div>
    <div class="rightC">
      <div>vdsbgiuh897er48t</div>
      <div>vdsbgiuh897er48t</div>
      <div>vdsbgiuh897er48t</div>
      <div>vdsbgiuh897er48t</div>
      <div>vdsbgiuh897er48t</div>
      <div>vdsbgiuh897er48t</div>
    </div>
  </div>
</template>

<script>
  import { showLocale } from "@/core/utils/datetime";
  import $ from 'jquery';
  import { pageResize } from "../../../../core/utils/bigscreen/resetScreenSize";

  export default {
    name: "LargeMonitor4",
    components: {

    },
    mounted() {
      this.getTimes();

      pageResize();
      console.log('pageResize');
    },
    /* 页面创建前设置 */
    beforeCreate() {

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

<style lang="scss">
  html {
    font-size: 20px;
  }
  .canvas{
    display: flex;
    // 排列方向
    flex-direction: row;
    // 对齐方式
    // 项目在横轴的对齐方式,默认flex-start左对齐
    justify-content: center;
    // 控制项目在纵轴排列方式,默认stretch即如果项目没有设置高度或为auto，则占满整个容器
    align-items: normal;
    // 基于多轴线对齐方式
    align-content: center;
    // flex元素排序，拉伸与缩放，通过flex实现骰子的六个点数
    flex: 1 1 auto;
    padding: (15/96)rem;

    border: 1px solid red;
  }
  .leftC {
    border: 1px solid #00e4ff;
    width: (410/96)rem;
    flex-shrink: 1;
    flex-grow: 0;
    font-size: 0.7rem;
  }
  .centerC {
    border: 1px solid orange;
    width: (1060/96)rem;
    flex-shrink: 1;
    flex-grow: 1;
    font-size: 0.4rem;
  }
  .rightC {
    border: 1px solid chartreuse;
    width: (450/96)rem;
    flex-shrink: 1;
    flex-grow: 1;
    font-size: 0.6rem;
  }
</style>
