<template>
  <div>
    <!-- begin::Sticky Toolbar -->
    <ul class="sticky-toolbar nav flex-column pl-2 pr-2 pt-3 pb-3 mt-4">
      <li v-b-tooltip.hover.left="'状态监控'" class="nav-item mb-2">
        <router-link
          href="#"
          :to="{ name: 'monitor' }"
          class="btn btn-sm btn-icon btn-bg-light btn-text-primary btn-hover-primary">
          <i class="flaticon2-gear"></i>
        </router-link>
      </li>
      <li v-b-tooltip.hover.left="'帮助手册'" class="nav-item mb-2">
        <router-link
          href="#"
          :to="{ name: 'help' }"
          class="btn btn-sm btn-icon btn-bg-light btn-text-primary btn-hover-primary"
        >
          <i class="flaticon2-open-text-book"></i>
        </router-link>
      </li>
      <li v-b-tooltip.hover.left="'说明文档'" class="nav-item">
        <a
          href="https://keenthemes.com/metronic/?page=docs"
          class="btn btn-sm btn-icon btn-bg-light btn-text-warning btn-hover-warning"
          target="_blank">
          <i class="flaticon2-telegram-logo"></i>
        </a>
      </li>
    </ul>
    <!-- end::Sticky Toolbar -->
  </div>
</template>

<script>
export default {
  name: "KTStickyToolbar"
};
</script>
