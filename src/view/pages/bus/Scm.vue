<template>
  <div class="page-container">
    <!-- 工具栏 -->
    <div class="toolbar">
      <div class="">
        <el-form :inline="true" :model="filters" :size="size" ref="filters">
          <span class="tool-search-label">配置项名称：</span>
          <el-form-item prop="dataId">
            <el-input v-model="filters.dataId" placeholder="添加通配符'*'进行模糊查询"></el-input>
          </el-form-item>
          <span class="tool-search-label">组名：</span>
          <el-form-item prop="group">
            <el-input v-model="filters.group" placeholder="添加通配符'*'进行模糊查询"></el-input>
          </el-form-item>
          <el-form-item>
            <b-s-button icon="fa fa-search" :tag="$t('ACTION.SEARCH')" variant="success"
                        @click="findPage({ pageRequest: {pageNum: 1, pageSize: pageRequest.pageSize} })"
                        perms="sys:config:view"
                        stylesheet="font-size: 1.0rem;"
            />
          </el-form-item>
          <el-form-item>
            <b-s-button icon="fa fa-plus" :tag="$t('ACTION.ADD')" variant="success"
                        @click="handleAdd"
                        perms="sys:config:add"
                        stylesheet="font-size: 1.0rem;"
            />
          </el-form-item>
          <el-form-item>
            <b-s-button icon="fa fa-undo" :tag="$t('ACTION.RESET')"
                        @click="resetForm('filters')"
                        perms="sys:config:view"
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
                <b-button class="fa fa-refresh"
                          @click="findPage({ pageRequest: {pageNum: 1, pageSize: pageRequest.pageSize} })"
                /><!-- :disabled="!hasPerms('sys:config:view')" -->
              </el-tooltip>
            </el-button-group>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <div class="kt-portlet">
      <div class="kt-portlet__body kt-portlet__body--fit">
        <!--表格内容栏-->
        <b-s-table
          :highlightCurrentRow="true" :stripe="false"
          :data="pageResult" :columns="columns"
          :showBatchDelete="true"
          @findPage="findPage" @handleEdit="handleEdit" @handleDelete="handleDelete"
          permsDelete="sys:config:delete" permsEdit="sys:config:edit"
          permsPagination="sys:config:view">
        </b-s-table>
      </div>
    </div>

    <!--新增编辑界面-->
    <el-dialog :title="operation?$t('ACTION.ADD') : $t('ACTION.EDIT')" width="50%"
               :visible.sync="dialogVisible"
               :close-on-click-modal="false"
               @close="handleCloseDialog()"
    >
      <el-form :model="dataForm" :rules="dataFormRules" ref="dataForm"
               :size="size" label-width="80px" label-position="right">
        <el-form-item label="配置项名" prop="dataId" v-if="true">
          <el-input v-model="dataForm.dataId" :disabled="operation?false:true" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="组名" prop="group">
          <el-input v-model="dataForm.group" :disabled="operation?false:true" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="配置内容" prop="content">
          <el-input v-model="dataForm.content" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="desc">
          <el-input v-model="dataForm.desc" auto-complete="off" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-link type="primary" :underline='false'
                 @click.native="handleCloseDialog()"
                 style="padding-right: 15px;">
          {{$t('ACTION.CANCEL')}}
        </el-link>
        <!--<el-button :size="size" @click.native="handleCloseDialog()">{{$t('ACTION.CANCEL')}}</el-button>-->
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
  import { containAsterisk } from '@/core/utils/validate.js';

  export default {
    name: "Scm",
    components: {
      BSTable,
      BSButton
    },
    data() {
      return {
        size: 'medium',
        loading: false,

        // 筛选条件表单
        filters: {
          dataId: '', // 配置项过滤
          group: '' // 组名过滤
        },
        columns: [
          {prop:"dataId", label:"配置项名(Data Id)", minWidth:120},
          {prop:"group", label:"组名(Group)", minWidth:100},
          {prop:"content", label:"配置内容", minWidth:160},
          {prop:"desc", label:"描述", minWidth:100}
        ],
        pageRequest: {pageNum: 1, pageSize: 10},
        pageResult: {},

        operation: false, // true:新增, false:编辑
        dialogVisible: false, // 新增编辑界面是否显示
        editLoading: false,
        dataFormRules: {
          dataId: [
            { required: true, message: '请输入配置项名称', trigger: 'blur'}
          ],
          group: [
            {required: true, message: '请输入组名称', trigger: 'blur'}
          ],
          content: [
            {required: true, message: '请输入配置内容', trigger: 'blur'}
          ]
        },

        // 新增编辑界面数据
        dataForm: {
          dataId: '',
          group: '',
          content: '',
          desc: ''
        },

        // 查询模式选项
        searchMode: {
          accurate: 'accurate',
          blur: 'blur'
        },

        // 后台请求模型
        records: {
          pageNum: 1,
          pageSize: 10,
          dataId: "",
          group: "",
          search: ""
        }

      }
    },
    created() {
    },
    mounted() {
      this.$store.dispatch(SET_BREADCRUMB, [
        { title: "系统配置管理", route: "scm" }
      ]);

    },
    methods: {
      /** 权限控制相关-页面按钮权限 **/
      hasPerms: function (perms) {
        // 根据权限标识和外部指示状态进行权限判断
        // ('&'表示运算符按位与，都为1才为1否则为0。也类似于且，都真才为真)
        return hasPermission(perms) & !this.disabled
      },
      /** 配置相关 **/
      // 获取分页数据
      findPage: function (data) {
        if (data != null) {
          this.pageRequest = data.pageRequest;
        }

        let searchMode = this.searchMode.accurate;
        let curDataId = this.filters.dataId,
          curGroup = this.filters.group;
        if ( containAsterisk(curDataId) || curGroup ) {
          searchMode = this.searchMode.blur;
        }

        this.records = {
          pageNum: this.pageRequest.pageNum,
          pageSize: this.pageRequest.pageSize,
          dataId: this.filters.dataId,
          group: this.filters.group,
          search: searchMode
        };

        this.$api.config.findPage(this.records).then( (res) => {
          console.log(res);
          // 组织配置数据
          this.pageResult = {
            list: res.data.data.pageItems,
            pageNum: res.data.data.pageNumber,
            pageSize: this.pageRequest.pageSize,
            totalPage: res.data.data.pagesAvailable,
            totalRow: res.data.data.totalCount
          };
        }).then(data != null ? data.callback : '').catch(()=>{})
      },
      // 批量删除
      handleDelete: function (data) {
        let delRows = data.rows;
        this.$api.config.batchDelete(delRows).then(data.callback).catch(()=>{})
      },
      // 显示新增界面
      handleAdd: function () {
        this.dialogVisible = true;
        this.operation = true;
        this.dataForm = {
          dataId: '',
          group: '',
          content: '',
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
              this.$api.config.save(params).then((res) => {
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
      }

    }
  }
</script>

<style scoped>
  /*.page-container {
    position: relative;
  }
  .gradient {
    position: absolute;
    width: 100%;
    height: 500px;
    background: url("/media/other/hero-gradient.jpg");
    background-size: 1000px auto;
    opacity: 0.5;
  }*/

  div.toolbar {
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }
  div.toolbar > div:last-child {
    margin-left: auto;
  }
  div.toolbar span.tool-search-label {
    display: inline-block;
    padding: 8px;
    color: rgba(255, 255, 255, 0.75);
  }


</style>
