<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="d-flex flex-row-fluid flex-column bgi-size-cover bgi-position-center bgi-no-repeat p-10 p-sm-30"
      :style="{
        backgroundImage: `url(${backgroundImage})`
      }"
    >
      <!-- begin:: Content -->
      <h1
        class="font-size-sm-100 font-weight-boldest text-dark-75 mt-15"
        style="font-size: 150px;"
      >
        403
      </h1>
      <p class="font-size-h3 font-weight-light">
        OOPS!
        <br />
        {{ errInfo.errStatusText }}
      </p>
      <p class="font-size-h3 font-weight-light">
        {{ errInfo.errMsg }}
      </p>
      <div class="btn-go-wrapper">
        <b-button variant="outline-secondary"
                  class="btn-go-lastpage"
                  @click="$router.go(-1)">返回上一页</b-button>
        <b-button variant="outline-primary"
                  class="btn-go-home"
                  @click="$router.push('/')">进入首页</b-button>
      </div>
      <!-- end:: Content -->
    </div>
  </div>
</template>

<style lang="scss">
  .btn-go-wrapper {
    margin-left: 80px;
  }
  .btn-go-lastpage,
  .btn-go-home {
    margin: 0 5px 0 30px;
    font-size: 16px;
  }
</style>

<script>
export default {
  name: "Error-1",
  mounted() {
    this.fillErrMsg();
  },
  computed: {
    backgroundImage() {
      return process.env.BASE_URL + "media/error/bg1.jpg";
    }
  },
  data() {
    return {
      errInfo: {
        errStatusText: 'OOPS! Forbiden access ...',
        errMsg: 'You don\'t have permission to access this page'
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
