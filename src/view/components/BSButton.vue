<template>
  <!--<b-button :size="size" :variant="variant"
            @click="handleClick" :disabled="!hasPerms(perms)">
    <i :class="icon" aria-hidden="true" :style="stylesheet"></i>
    <span>{{tag}}</span>
  </b-button>-->
  <b-button :size="size" :variant="variant"
            :disabled="disabled"
            @click="handleClick">
    <i :class="icon" aria-hidden="true" :style="stylesheet"></i>
    <span>{{tag}}</span>
  </b-button>
</template>

<script>
import { hasPermission } from '@/core/utils/permission/index.js'
export default {
  name: 'BSButton',
  props: {
    tag: {  // 按钮显示文本
      type: String,
      default: 'Button'
    },
    icon: {  // 按钮显示图标
      type: String,
      default: ''
    },
    stylesheet: {  // 自定义样式
      type: String,
      default: ''
    },
    size: {  // 按钮尺寸
      type: String,
      default: 'sm'
    },
    variant: {  // 按钮类型
      type: String,
      default: null
    },
    disabled: {  // 按钮是否禁用
      type: Boolean,
      default: false
    },
    perms: {  // 按钮权限标识，外部使用者传入
      type: String,
      default: null
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleClick: function () {
      // 按钮操作处理函数
      this.$emit('click', {})
    },
    hasPerms: function (perms) {
      // 根据权限标识和外部指示状态进行权限判断
      return hasPermission(perms) & !this.disabled
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
