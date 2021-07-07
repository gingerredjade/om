<template>
  <div>
    <!--表格栏-->
    <el-table :data="data.list" :highlight-current-row="highlightCurrentRow" @selection-change="selectionChange"
          @current-change="handleCurrentChange" v-loading="loading" :element-loading-text="$t('ACTION.LOADING','ch')" :border="border" :stripe="stripe"
          :show-overflow-tooltip="showOverflowTooltip" :max-height="maxHeight" :size="size" :align="align" style="width:100%;" >
      <el-table-column type="selection" width="40" v-if="showBatchDelete & showOperation"></el-table-column>
      <el-table-column v-for="column in columns" header-align="center" align="center"
        :prop="column.prop" :label="column.label" :width="column.width" :min-width="column.minWidth"
        :fixed="column.fixed" :key="column.prop" :type="column.type" :formatter="column.formatter"
        :sortable="column.sortable==null?true:column.sortable">
      </el-table-column>
      <el-table-column :label="$t('ACTION.OPERATION','ch')" width="185" fixed="right" v-if="showOperation" header-align="center" align="center">
        <template slot-scope="scope">
          <k-t-button icon="fa fa-edit" :label="$t('ACTION.EDIT','ch')" :perms="permsEdit" :size="size" @click="handleEdit(scope.$index, scope.row)" />
          <k-t-button icon="fa fa-trash" :label="$t('ACTION.DELETE','ch')" :perms="permsDelete" :size="size" type="danger" @click="handleDelete(scope.$index, scope.row)" />
        </template>
      </el-table-column>
    </el-table>
    <!--分页栏-->
    <div class="toolbar" style="padding:10px;">
      <k-t-button :label="$t('ACTION.BATCHDELETE','ch')" :perms="permsDelete" :size="size" type="danger" @click="handleBatchDelete()"
        :disabled="this.selections.length===0" style="float:left;" v-if="showBatchDelete & showOperation"/>
      <!--<el-pagination layout="total, prev, pager, next, jumper" @current-change="refreshPageRequest"
        :current-page="pageRequest.pageNum" :page-size="pageRequest.pageSize" :total="data.totalSize" style="float:right;">
      </el-pagination>-->
      <el-pagination layout="total, sizes, prev, pager, next, jumper"
                     @current-change="refreshPageRequest"
                     :current-page="pageRequest.pageNum"
                     :page-size="pageRequest.pageSize"
                     :total="data.totalRow"
                     style="float:right;"
                     @size-change="handleSizeChange"
                     :page-sizes="[1, 3, 5, 10, 20, 30]"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import KTButton from "@/view/components/KTButton"
export default {
  name: 'KTTable',
  components:{
    KTButton
	},
  props: {
    columns: Array, // 表格列配置
    data: Object, // 表格分页数据
    permsEdit: String,  // 编辑权限标识
    permsDelete: String,  // 删除权限标识
    size: { // 尺寸样式
      type: String,
      default: 'mini'
    },
    align: {  // 文本对齐方式
      type: String,
      default: 'left'
    },
    maxHeight: {  // 表格最大高度
      type: Number,
      default: 440
    },
    showOperation: {  // 是否显示操作组件
      type: Boolean,
      default: true
    },
    border: {  // 是否显示边框
      type: Boolean,
      default: false
    },
    stripe: {  // 是否显示斑马线
      type: Boolean,
      default: true
    },
    highlightCurrentRow: {  // 是否高亮当前行
      type: Boolean,
      default: true
    },
    showOverflowTooltip: {  // 是否单行显示
      type: Boolean,
      default: true
    },
    showBatchDelete: {  // 是否显示操作组件
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // 分页信息
			pageRequest: {
				pageNum: 1,
        pageSize: 10
      },
      loading: false,  // 加载标识
      selections: []  // 列表选中列
    }
  },
  methods: {
    // 分页查询
    findPage: function () {
        this.loading = true
        let callback = res => {
          this.loading = false
        }
      this.$emit('findPage', {pageRequest:this.pageRequest, callback:callback})
    },
    // 选择切换
    selectionChange: function (selections) {
      this.selections = selections
      this.$emit('selectionChange', {selections:selections})
    },
    // 选择切换
    handleCurrentChange: function (val) {
      this.$emit('handleCurrentChange', {val:val})
    },
    // 换页刷新
		refreshPageRequest: function (pageNum) {
      this.pageRequest.pageNum = pageNum
      this.findPage()
    },
    // 每页条目数调整刷新
    handleSizeChange(val) {
      //console.log(`每页 ${val} 条`);
      let params = Object.assign({}, this.pageRequest);
      params.pageSize = val;
      this.pageRequest.pageSize = val;
      this.findPage({"pageRequest": params});
    },
    // 编辑
		handleEdit: function (index, row) {
      this.$emit('handleEdit', {index:index, row:row})
		},
    // 删除
		handleDelete: function (index, row) {
      this.delete([row])
		},
		// 批量删除
		handleBatchDelete: function () {
      //console.log(this.selections)
      if (this.selections.length > 0) {
        this.delete(this.selections);
      } else {
        this.$message({ message: '请选择要删除的数据', type: 'error', duration: 2000 })
      }
		},
		// 删除操作
		delete: function (rows) {
			this.$confirm('确认删除选中记录吗？', '提示', {
				type: 'warning'
			}).then(() => {
        this.loading = true
        let callback = res => {
          if(res.data.code == 200) {
            //console.log(res);
            this.$message({ message: '删除成功, ' + res.data.message, type: 'success', duration: 3000 })
            this.findPage()
          } else {
            //console.log(res);
            this.$message({ message: '操作失败, ' + res.data.message, type: 'error', duration: 3000 })
          }
          this.loading = false
        }
        this.$emit('handleDelete', {rows:rows, callback:callback})
			}).catch(() => {
			})
		}
  },
  mounted() {
    this.refreshPageRequest(1)
  }
}
</script>

<style scoped>

</style>
