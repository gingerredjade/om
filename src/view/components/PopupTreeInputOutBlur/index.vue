<template>
  <div>
    <el-popover ref="popover" :placement="placement" trigger="click">
      <el-tree
        :data="data"
        :props="props"
        node-key="nodeKey"
        ref="popupTree"
        @current-change="currentChangeHandle"
        :default-expand-all="defaultExpandAll"
        :highlight-current="true"
        :expand-on-click-node="true"
      >
      </el-tree>
    </el-popover>
    <el-input v-model="prop" v-popover:popover :readonly="true" :placeholder="placeholder" style="cursor:pointer;" :id="id"></el-input>
  </div>
</template>

<script>

export default {
  name: 'PopupTreeInput',
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    // 对象或数组默认值必须从一个工厂函数获取
    props: {
      type: Object,
      default: function () {
        return {}
      }
    },
    prop: {
      type: String,
      default: ''
    },
    nodeKey: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '点击选择内容'
    },
    placement: {
      type: String,
      default: 'right-start'
    },
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    currentChangeHandle: {
      type: Function,
      default: null
    },
    id: {
      type: String,
      default: ''
    }
  }

}
</script>

<style scoped>

</style>
