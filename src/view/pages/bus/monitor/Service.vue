<template>
  <div class="page-container">
    <h1>运行状态监控-服务集群监控</h1>
  </div>
</template>

<script>
  import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

  export default {
    name: "Service",
    components:{

    },
    data() {
      return {

      }
    },
    mounted() {
      this.$store.dispatch(SET_BREADCRUMB, [
        { title: "运行状态监控", route: "hardware" },
        { title: "服务集群监控" }
      ]);
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
