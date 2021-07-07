<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="d-flex flex-row-fluid bgi-size-cover bgi-position-center"
      :style="{
        backgroundImage: `url(${backgroundImage})`
      }"
    >
      <!-- begin:: Content -->
      <div
        class="d-flex flex-row-fluid flex-column justify-content-end align-items-center text-center text-white pb-40"
      >
        <h1 class="display-1 font-weight-bold">
          OOPS!
          <br />
          {{ errInfo.errStatusText }}
        </h1>
        <span class="display-4 font-weight-boldest mb-8">
          <!--The page you're looking for doesn't exist.-->
          {{ errInfo.errMsg }}
        </span>
        <div class="btn-go-wrapper">
          <b-button variant="warning"
                    class="btn-go-lastpage"
                    @click="$router.go(-1)">返回上一页</b-button>
          <b-button variant="primary"
                    class="btn-go-home"
                    @click="$router.push('/')">进入首页</b-button>
        </div>
      </div>
      <!-- end:: Content -->
    </div>
  </div>
</template>

<style lang="scss">
  .btn-go-wrapper {
    margin-left: 0;
  }
  .btn-go-lastpage,
  .btn-go-home {
    margin: 0 5px 0 30px;
    font-size: 16px;
  }
</style>

<script>
export default {
  name: "Error-2",
  mounted() {
    this.fillErrMsg();
  },
  computed: {
    backgroundImage() {
      return process.env.BASE_URL + "media/error/bg2.jpg";
    }
  },
  data() {
    return {
      errInfo: {
        errStatusText: 'We couldn\'t find it ...',
        errMsg: 'The page you\'re looking for doesn\'t exist.'
      }
    }
  },
  methods: {
    fillErrMsg() {
      let routeParams = this.$route.params;
      if (JSON.stringify(routeParams) !== '{}') {
        console.log(routeParams.errMsg);
        this.errInfo.errStatusText = routeParams.statusText;
        this.errInfo.errMsg = routeParams.errMsg;
      }
    }
  }
};
</script>
