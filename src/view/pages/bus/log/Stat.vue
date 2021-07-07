<template>
  <div class="page-container">
    <h1>日志统计分析</h1>
  </div>
</template>

<script>
  import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

  export default {
    name: "Stat",
    components:{

    },
    data() {
      return {

      }
    },
    mounted() {
      this.$store.dispatch(SET_BREADCRUMB, [
        { title: "日志收集分析", route: "collection" },
        { title: "日志统计分析" }
      ]);
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
