<template>
  <div class="page-container">
    <h1>数据资源查询</h1>
  </div>
</template>

<script>
  import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

  export default {
    name: "Search",
    components:{

    },
    data() {
      return {

      }
    },
    mounted() {
      this.$store.dispatch(SET_BREADCRUMB, [
        { title: "数据资源监控", route: "overview" },
        { title: "数据资源查询" }
      ]);
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
