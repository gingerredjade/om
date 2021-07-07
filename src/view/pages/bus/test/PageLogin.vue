<template>
  <div class="" id="">
    <particles></particles>

    <div class="login">
      <div class="login-top"> 登录 </div>
      <div class="login-center clearfix">
        <div class="login-center-img">
          <img src="/media/other/name.png" />
        </div>
        <div class="login-center-input">
          <input type="text" name="username" value="" id="username"
                 placeholder="请输入您的用户名"
                 onfocus="this.placeholder=''"
                 onblur="this.placeholder='请输入您的用户名'">
          <div class="login-center-input-text">用户名</div>
        </div>
      </div>
      <div class="login-center clearfix">
        <div class="login-center-img">
          <img src="/media/other/password.png" />
        </div>
        <div class="login-center-input">
          <input type="password" name="password" id="password" value=""
                 placeholder="请输入您的密码"
                 onfocus="this.placeholder=''"
                 onblur="this.placeholder='请输入您的密码'">
          <div class="login-center-input-text">密码</div>
        </div>
      </div>
      <div class="login-button"> 登录 </div>
      <router-link to="/test/register">
        <div class="login-button">没有账号？请注册</div>
      </router-link>
      <router-link to="/monitor/service">
        <div class="login-button">忘记密码？请修改</div>
      </router-link>
    </div>

    <div class="sk-rotating-plane"></div>
  </div>
</template>

<script>
  import Particles from '@/view/components/Particles/index';

  export default {
    name: "PageLogin",
    components: {
      Particles
    },
    mounted() {

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

      }
    },
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="scss" scoped>
  /*Reset*/
  /**{box-sizing:content-box;}
  a:hover, a:focus{text-decoration:none;}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td{margin:0;padding:0;}
  table{border-collapse:collapse;border-spacing:0;}
  body{-webkit-text-size-adjust:none;}
  fieldset,img{border:0;}
  img{ vertical-align: top; max-width: 100%; }
  address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:normal;}
  ol,ul{list-style:none;}
  caption,th{text-align:left;}
  h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal;}
  q:before,q:after{content:'';}
  abbr,acronym {border:0;}
  .clearfix:after{visibility:hidden;display: block;font-size:0;content:" ";clear:both;height:0;}
  * html .clearfix{ zoom: 1; } !* IE6 *!
  *:first-child+html .clearfix { zoom: 1; } !* IE7 *!
  .cli{ clear:both; font-size:0; height:0; overflow:hidden;display:block;}
  .lclear{clear:left;font-size:0;height:0;overflow:hidden;}
  .fl{float:left;}
  .fr{float:right;}*/

  /* ֹ
  iframe{nifm2:expression(this.src='about:blank',this.outerHTML='');}
  script{no2js:expression((this.src.toLowerCase().indexOf('http')==0)?document.close():'');}
  */
  /* ıԼ˶
  div{word-wrap: break-word;word-break: normal;}
  p{text-align:justify; text-justify:inter-ideograph;}
  */
  /*general*/
  /*body{font-size:12px;font-family:'微软雅黑',"宋体","Arial Narrow",Helvetica,sans-serif;color:#000;line-height:1.2;text-align:left;}
  a{color:#333;text-decoration:none;}*/


  /*Business*/
  .login {
    z-index: 2;
    position: absolute;
    width: 350px;
    height: 500px;
    border-radius: 5px;
    background: white;
    box-shadow: 0px 0px 5px #333333;
    top: 50%;
    left: 50%;
    margin-top: -275px;
    margin-left: -175px;
    transition: all 1s;
    -moz-transition: all 1s;
    -webkit-transition: all 1s;
    -o-transition: all 1s;
  }
  .login-top {
    font-size: 20px;
    margin-top: 60px;
    padding-left: 40px;
    box-sizing: border-box;
    color: #333333;
    margin-bottom: 50px;
  }
  .login-center {
    width: 100%;
    box-sizing: border-box;
    padding: 0 40px;
    margin-bottom: 30px;
  }
  .login-center-img {
    width: 20px;
    height: 20px;
    float: left;
    margin-top: 5px;
  }
  .login-center-img>img {
    width: 100%;
  }
  .login-center-input {
    float: left;
    width: 230px;
    margin-left: 15px;
    height: 30px;
    position: relative;
  }
  .login-center-input input {
    z-index: 2;
    transition: all 0.5s;
    padding-left: 10px;
    color: #333333;
    width: 100%;
    height: 30px;
    border: 0;
    border-bottom: 1px solid #cccccc;
    border-top: 1px solid #ffffff;
    border-left: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
    box-sizing: border-box;
    outline: none;
    position: relative;
  }
  .login-center-input-text {
    background: white;
    padding: 0 5px;
    position: absolute;
    z-index: 0;
    opacity: 0;
    height: 20px;
    top: 50%;
    margin-top: -10px;
    font-size: 14px;
    left: 5px;
    color: dodgerblue;
    line-height: 20px;
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
  }

  .login-button {
    cursor: pointer;
    width: 250px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: dodgerblue;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 30px;
    color: white;
  }

  .sk-rotating-plane {
    display: none;
    width: 80px;
    height: 80px;
    margin: auto;
    background-color: white;
    -webkit-animation: sk-rotating-plane 1.2s infinite ease-in-out;
    animation: sk-rotating-plane 1.2s infinite ease-in-out;
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -40px;
    margin-top: -80px;
  }

</style>
