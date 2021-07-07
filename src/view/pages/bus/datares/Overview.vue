<template>
  <div class="page-container">
    <h1>数据资源监控总览</h1>
  </div>
</template>

<script>
  import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

  export default {
    name: "Overview",
    components:{

    },
    data() {
      return {

      }
    },
    mounted() {
      this.$store.dispatch(SET_BREADCRUMB, [
        { title: "数据资源监控", route: "overview" },
        { title: "总览" }
      ]);
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
