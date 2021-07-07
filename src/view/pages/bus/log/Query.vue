<template>
  <div class="page-container">
    <h1>日志查询浏览</h1>
  </div>
</template>

<script>
  import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

  export default {
    name: "Query",
    components:{

    },
    data() {
      return {

      }
    },
    mounted() {
      this.$store.dispatch(SET_BREADCRUMB, [
        { title: "日志收集分析", route: "collection" },
        { title: "日志查询浏览" }
      ]);
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
