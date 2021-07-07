<template>
  <!-- begin::Page loader -->
  <div class="page-loader page-loader-logo">
    <img alt="Logo" :src="logo" width="100" />
    <div class="spinner" v-bind:class="spinnerClass || 'spinner-primary'"></div>
    <!--<div class="spinner-border text-success" role="status"></div>
    <div class="spinner-grow text-warning" role="status"></div>-->

    <!-- Bootstrap旋转特效-Spinners
      基于纯CSS旋转特效类,用于指示控件或页面的加载状态.
        ·圆形旋转：使用不间断的旋转特效,作为轻量级加载指示器.
        ·渐变缩放：
        ·对准：
     -->
  </div>
  <!-- end::Page Loader -->
</template>

<script>
export default {
  name: "Loader",
  props: {
    logo: String,
    spinnerClass: String
  }
};
</script>
