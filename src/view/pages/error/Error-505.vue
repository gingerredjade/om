<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="error error-6 d-flex flex-row-fluid bgi-size-cover bgi-position-center"
      :style="{
        backgroundImage: `url(${backgroundImage})`
      }"
    >
      <!-- begin:: Content -->
      <div class="d-flex flex-column flex-row-fluid text-center">
        <h1
          class="error-title font-weight-boldest text-white mb-12"
          style="margin-top: 12rem;"
        >
          505...
        </h1>
        <p class="display-4 font-weight-bold text-white">
          <!--HTTP版本不受支持...-->
          OOPS!
          <br />
          {{ errMsg }}
          <br />
          <br />
        </p>
        <div class="btn-go-wrapper">
          <b-button variant="dark"
                    class="btn-go-lastpage"
                    @click="$router.go(-1)">返回上一页</b-button>
          <b-button variant="success"
                    class="btn-go-home"
                    @click="$router.push('/')">进入首页</b-button>
        </div>
      </div>
      <!-- end:: Content -->
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/error/error-6.scss";

.btn-go-wrapper {
  margin-left: 0;
}
.btn-go-lastpage,
.btn-go-home {
  margin: 0 35px 0 30px;
  font-size: 16px;
}
</style>

<script>
export default {
  name: "Error-6",
  mounted() {
    this.fillErrMsg();
  },
  computed: {
    backgroundImage() {
      return process.env.BASE_URL + "media/error/bg6.jpg";
    }
  },
  data() {
    return {
      errMsg: 'HTTP版本不受支持...'
    }
  },
  methods: {
    fillErrMsg() {
      let routeParams = this.$route.params;
      if (JSON.stringify(routeParams) !== '{}') {
        console.log(routeParams.errMsg);
        this.errMsg = routeParams.errMsg;
      }
    }
  }
};
</script>
