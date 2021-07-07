<template>
  <div class="page-container">
    <!-- 工具栏 -->
    <div class="toolbar">
      <div class="">
        <el-form :inline="true" :model="filters" :size="size" ref="filters">
          <el-form-item prop="name">
            <el-input v-model="filters.name" placeholder="权限名称"></el-input>
          </el-form-item>
          <el-form-item>
            <b-s-button icon="fa fa-search" :tag="$t('ACTION.SEARCH')" variant="success"
                        @click="findPage({ pageRequest: {pageNum: 1, pageSize: pageRequest.pageSize} })"
                        perms="sys:authority:view"
                        stylesheet="font-size: 1.0rem;"
            />
          </el-form-item>
          <el-form-item>
            <b-s-button icon="fa fa-plus" :tag="$t('ACTION.ADD')" variant="success"
                        @click="handleAdd"
                        perms="sys:authority:add"
                        stylesheet="font-size: 1.0rem;"
            />
          </el-form-item>
          <el-form-item>
            <b-s-button icon="fa fa-undo" :tag="$t('ACTION.RESET')"
                        @click="resetForm('filters')"
                        perms="sys:authority:view"
                        stylesheet="font-size: 1.0rem;"
            />
          </el-form-item>
        </el-form>
      </div>
      <div class="">
        <el-form :inline="true" :size="size">
          <el-form-item>
            <el-button-group>
              <el-tooltip :content="$t('ACTION.REFRESH')" placement="top">
                <b-button class="fa fa-refresh" size="sm"
                          @click="findPage({ pageRequest: {pageNum: 1, pageSize: pageRequest.pageSize} })"
                /><!-- :disabled="!hasPerms('sys:authority:view')" -->
              </el-tooltip>
              <el-tooltip :content="$t('ACTION.COLUMN_SHOW')" placement="top"
                          style="margin-left: 4px;">
                <b-button class="fa fa-filter" size="sm"
                          @click="displayFilterColumnsDialog"></b-button>
              </el-tooltip>
            </el-button-group>
          </el-form-item>
        </el-form>
        <!-- 表格显示列界面 -->
        <table-column-filter-dialog ref="tableColumnFilterDialog" :columns="columns"
                                    @handleFilterColumns="handleFilterColumns">
        </table-column-filter-dialog>
      </div>
    </div>

    <!-- 主体内容 -->
    <div class="kt-portlet">
      <div class="kt-portlet__body kt-portlet__body--fit">
        <!-- 表格内容栏   @handleCurrentChange="handleRoleSelectChange"  -->
        <b-s-table
          :highlightCurrentRow="true" :stripe="false"
          :data="pageResult" :columns="filterColumns"
          :showBatchDelete="true"
          @findPage="findPage" @handleEdit="handleEdit" @handleDelete="handleDelete"
          permsDelete="sys:authority:delete" permsEdit="sys:authority:edit"
          permsPagination="sys:authority:view">
        </b-s-table>
      </div>
    </div>

    <!--新增编辑界面-->
    <el-dialog :title="operation?$t('ACTION.ADD') : $t('ACTION.EDIT')" width="40%"
               :visible.sync="dialogVisible" :close-on-click-modal="false"
               @close="handleCloseDialog()">
      <el-form :model="dataForm" :rules="dataFormRules" ref="dataForm"
               :size="size" label-width="80px" label-position="right">
        <el-form-item label="ID" prop="id" v-if="false">
          <el-input v-model="dataForm.id" :disabled="true" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限名" prop="name">
          <el-input v-model="dataForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="desc">
          <el-input v-model="dataForm.desc" auto-complete="off" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button :size="size" @click.native="handleCloseDialog()">{{$t('ACTION.CANCEL')}}</el-button>
        <el-button :size="size" type="primary" @click.native="submitForm" :loading="editLoading" style="color: #fff;">
          {{$t('ACTION.SUBMIT')}}
        </el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
  import { format } from "@/core/utils/datetime";
  import BSTable from '@/view/components/BSTable';
  import BSButton from '@/view/components/BSButton';
  import { hasPermission } from '@/core/utils/permission/index.js';
  import TableColumnFilterDialog from '@/view/components/TableColumnFilterDialog';
  import $ from 'jquery';

  export default {
    name: "Authority",
    components: {
      BSTable,
      BSButton,
      TableColumnFilterDialog
    },
    data() {
      return {
        size: 'medium',
        loading: false,

        // 筛选条件表单
        filters: {
          name: '' // 权限名称过滤
        },
        columns: [
          {prop:"id", label:"ID", minWidth:50},
          {prop:"name", label:"权限名", minWidth:120},
          {prop:"desc", label:"描述", minWidth:120},
          {prop:"createBy", label:"创建人", minWidth:120},
          {prop:"createTime", label:"创建时间", minWidth:120, formatter: this.dateFormat},
          {prop:"lastUpdateBy", label:"更新人", minWidth:120},
          {prop:"lastUpdateTime", label:"更新时间", minWidth:120, formatter: this.dateFormat}
        ],
        filterColumns: [],
        pageRequest: {pageNum: 1, pageSize: 10},
        pageResult: {},

        operation: false, // true:新增, false:编辑
        dialogVisible: false, // 新增编辑界面是否显示
        editLoading: false,
        dataFormRules: {
          name: [
            { required: true, message: '请输入权限名称', trigger: 'blur'},
            { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur'}
          ],
          desc: [
            { required: true, message: '请输入描述信息', trigger: 'blur'}
          ]
        },

        // 新增编辑界面数据
        dataForm: {
          id: 0,
          name: '',
          desc: ''
        }

      }
    },
    mounted() {
      this.$store.dispatch(SET_BREADCRUMB, [
        { title: "用户权限管理", route: "user" },
        { title: "权限管理" }
      ]);

      this.initColumns();
    },
    methods: {
      /** 权限控制相关-页面按钮权限 **/
      hasPerms: function (perms) {
        // 根据权限标识和外部指示状态进行权限判断
        // ('&'表示运算符按位与，都为1才为1否则为0。也类似于且，都真才为真)
        return hasPermission(perms) & !this.disabled
      },

      /** 权限相关 **/
      // 获取分页数据
      findPage: function (data) {
        if (data != null) {
          this.pageRequest = data.pageRequest;
        }
        this.pageRequest.params = [{name: 'name', value: this.filters.name}];
        this.$api.authority.findPage(this.pageRequest).then( (res) => {
          // 组织角色数据
          this.pageResult = res.data.data;
        }).then(data != null ? data.callback : '').catch(()=>{})
      },
      // 批量删除
      handleDelete: function (data) {
        let delRows = data.rows;
        this.$api.authority.batchDelete(delRows).then(data.callback).catch(()=>{})
      },
      // 显示新增界面
      handleAdd: function () {
        this.dialogVisible = true;
        this.operation = true;
        this.dataForm = {
          id: 0,
          name: '',
          desc: ''
        }
      },
      // 显示编辑界面
      handleEdit: function (params) {
        this.dialogVisible = true;
        this.operation = false;
        this.dataForm = Object.assign({}, params.row);
      },
      // 编辑-提交
      submitForm: function () {
        this.$refs.dataForm.validate( (valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then( () => {
              this.editLoading = true;
              let params = Object.assign({}, this.dataForm);
              this.$api.authority.save(params).then((res) => {
                this.editLoading = false;
                if (res.data.code == 200) {
                  this.$message({
                    message: '操作成功',
                    type: 'success',
                    duration: 2000
                  });
                  this.dialogVisible = false;
                  this.$refs['dataForm'].resetFields();
                } else {
                  this.$message({
                    message: '操作失败, ' + res.data.message,
                    type: 'error',
                    duration: 2000
                  })
                }
                this.findPage(null);
              }).catch(()=>{})
            }).catch(()=>{});
          }
        })
      },


      /** 通用 **/
      // 时间格式化
      dateFormat: function (row, column, cellValue, index) {
        return format(row[column.property])
      },
      // 重置表单
      resetForm(formName) {
        this.$nextTick(()=>{
          this.$refs[formName].resetFields();
        })
      },
      // 清除验证
      clearVail(formName) {
        this.$nextTick(()=>{
          this.$refs[formName].clearValidate();
        })
      },
      // 关闭dialog事件
      handleCloseDialog: function() {
        this.dialogVisible = false;
        this.clearVail('dataForm');
      },

      /**  处理表格列过滤显示  **/
      displayFilterColumnsDialog: function () {
        this.$refs.tableColumnFilterDialog.setDialogVisible(true);
      },
      handleFilterColumns: function (data) {
        this.filterColumns = data.filterColumns;
        this.$refs.tableColumnFilterDialog.setDialogVisible(false);
      },
      initColumns: function () {
        //this.filterColumns = JSON.parse(JSON.stringify(this.columns));
        this.filterColumns = $.extend(true, [], this.columns);
      }

    }
  }
</script>

<style scoped>
  div.toolbar {
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }
  div.toolbar > div:last-child {
    margin-left: auto;
  }


</style>
