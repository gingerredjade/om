<template>
  <div class="">
    <!-- 工具栏 -->
    <div class="toolbar">
      <div class="">
        <el-form :inline="true" :model="filters" :size="size4el" ref="filters">
          <el-form-item prop="label">
            <el-input v-model="filters.label" placeholder="名称"></el-input>
          </el-form-item>
          <el-form-item>
            <b-s-button icon="fa fa-search" :tag="$t('ACTION.SEARCH')" variant="success" :size="size4bootstrap"
                        stylesheet="font-size: 1.0rem;"
                        @click="findPage({ pageRequest: {pageNum: 1, pageSize: pageRequest.pageSize} })">
            </b-s-button>
          </el-form-item>
          <el-form-item>
            <b-s-button icon="fa fa-plus" :tag="$t('ACTION.ADD')" variant="success" :size="size4bootstrap"
                        stylesheet="font-size: 1.0rem;"
                        @click="handleAdd"
            />
          </el-form-item>
          <el-form-item>
            <b-s-button icon="fa fa-undo" :tag="$t('ACTION.RESET')" variant="" :size="size4bootstrap"
                        stylesheet="font-size: 1.0rem;"
                        @click="resetForm('filters')"
            />
          </el-form-item>
        </el-form>
      </div>
      <div class="">
        <el-form :inline="true" :size="size4el">
          <el-form-item>
            <el-button-group>
              <el-tooltip content="刷新" placement="top">
                <b-button class="fa fa-refresh"
                           @click="findPage({ pageRequest: {pageNum: 1, pageSize: pageRequest.pageSize} })"/>
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
          @findPage="findPage" @handleEdit="handleEdit" @handleDelete="handleDelete">
        </b-s-table>
      </div>
    </div>

    <!--新增编辑界面-->
    <el-dialog :title="operation?'新增':'编辑'" width="40%"
               :visible.sync="editDialogVisible" :close-on-click-modal="false" @close="handleCloseDialog()">
      <el-form :model="dataForm" label-width="80px" :rules="dataFormRules" ref="dataForm" :size="size4el">
        <el-form-item label="ID" prop="id"  v-if="false">
          <el-input v-model="dataForm.id" :disabled="true" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="名称" prop="label">
          <el-input v-model="dataForm.label" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="值" prop="value">
          <el-input v-model="dataForm.value" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-input v-model="dataForm.type" auto-complete="off"></el-input>
        </el-form-item>
        <!--<el-form-item label="排序" prop="sort">
          <el-input v-model="dataForm.sort" auto-complete="off"></el-input>
        </el-form-item>-->
        <el-form-item label="描述 " prop="description">
          <el-input v-model="dataForm.description" auto-complete="off" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remarks">
          <el-input v-model="dataForm.remarks" auto-complete="off" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button :size="size4el" @click.native="handleCloseDialog()">{{$t('ACTION.CANCEL')}}</el-button>
        <el-button :size="size4el" type="primary" @click.native="submitForm" :loading="editLoading">{{$t('ACTION.SUBMIT')}}</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import { SET_BREADCRUMB } from '@/core/services/store/breadcrumbs.module';
  import { format } from "@/core/utils/datetime";
  import BSTable from '@/view/components/BSTable';
  import BSButton from '@/view/components/BSButton';

  export default {
    name: "Dict",
    components: {
      BSTable,
      BSButton
    },
    mounted () {
      this.$store.dispatch(SET_BREADCRUMB, [
        { title: "系统配置", route: "dict" },
        { title: "字典管理"}
      ]);
    },
    data() {
      return {
        size4el: 'medium',
        size4bootstrap: 'sm',
        loading: false,
        filters: {
          label: '' // 字典名称过滤
        },
        columns: [
          {prop:"id", label:"ID", minWidth:50},
          {prop:"label", label:"名称", minWidth:100},
          {prop:"value", label:"值", minWidth:100},
          {prop:"type", label:"类型", minWidth:80},
          /*{prop:"sort", label:"排序", minWidth:80},*/
          {prop:"description", label:"描述", minWidth:120},
          {prop:"remarks", label:"备注", minWidth:120},
          {prop:"createBy", label:"创建人", minWidth:100},
          {prop:"createTime", label:"创建时间", minWidth:120, formatter:this.dateFormat},
          {prop:"lastUpdateBy", label:"更新人", minWidth:100},
          {prop:"lastUpdateTime", label:"更新时间", minWidth:120, formatter:this.dateFormat}
        ],
        pageRequest: { pageNum: 1, pageSize: 10 },
        pageResult: {},

        operation: false, // true:新增, false:编辑
        editDialogVisible: false, // 新增编辑界面是否显示
        editLoading: false,
        dataFormRules: {
          label: [
            { required: true, message: '请输入名称', trigger: 'blur' }
          ]
        },
        // 新增编辑界面数据
        dataForm: {
          id: 0,
          label: '',
          value: '',
          type: '',
          sort: 0,
          description: '',
          remarks: ''
        }
      }
    },
    methods: {
      /** 字典相关 **/
      findPage: function (data) {
        if (data != null) {
          this.pageRequest = data.pageRequest;
        }
        this.pageRequest.params = [{name: 'label', value: this.filters.label}];
        this.$api.dict.findPage(this.pageRequest).then( (res) => {
          this.pageResult = res.data.data;
        }).then(data != null ? data.callback : '')
      },
      // 批量删除
      handleDelete: function (data) {
        let delRows = data.rows;
        this.$api.dict.batchDelete(delRows).then(data!=null?data.callback:'')
      },
      // 显示新增界面
      handleAdd: function () {
        this.editDialogVisible = true;
        this.operation = true;
        this.dataForm = {
          id: 0,
          label: '',
          value: '',
          type: '',
          sort: 0,
          description: 'desc',
          remarks: 'remark'
        }
      },
      // 显示编辑界面
      handleEdit: function (params) {
        this.editDialogVisible = true;
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
              this.$api.dict.save(params).then( (res) => {
                this.editLoading = false;
                if (res.data.code == 200) {
                  this.$message({
                    message: '操作成功', type: 'success', duration: 2000
                  });
                  this.editDialogVisible = false;
                  this.$refs['dataForm'].resetFields();
                } else {
                  this.$message({
                    message: '操作失败, ' + res.data.message, type: 'error', duration: 2000
                  })
                }
                this.findPage(null);
              })
            }).catch( () => {})
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
        this.editDialogVisible = false;
        this.clearVail('dataForm');
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
