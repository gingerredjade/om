<template>
  <div class="page-container">
    <!-- 工具栏 -->
    <div class="toolbar">
      <div class="">
        <el-form :inline="true" :model="filters" :size="size" ref="filters">
          <el-form-item prop="name">
            <el-input v-model="filters.name" placeholder="角色名"></el-input>
          </el-form-item>
          <el-form-item>
            <b-s-button icon="fa fa-search" :tag="$t('ACTION.SEARCH')" variant="success"
                        @click="findPage({ pageRequest: {pageNum: 1, pageSize: pageRequest.pageSize} })"
                        perms="sys:role:view"
                        stylesheet="font-size: 1.0rem;"
            />
          </el-form-item>
          <el-form-item>
            <b-s-button icon="fa fa-plus" :tag="$t('ACTION.ADD')" variant="success"
                        @click="handleAdd"
                        perms="sys:role:add"
                        stylesheet="font-size: 1.0rem;"
            />
          </el-form-item>
          <el-form-item>
            <b-s-button icon="fa fa-undo" :tag="$t('ACTION.RESET')"
                        @click="resetForm('filters')"
                        perms="sys:role:view"
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
                /><!-- :disabled="!hasPerms('sys:role:view')" -->
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

    <div class="kt-portlet">
      <div class="kt-portlet__body kt-portlet__body--fit">
        <!--表格内容栏-->
        <b-s-table
          :highlightCurrentRow="true" :stripe="false"
          :data="pageResult" :columns="filterColumns"
          :showBatchDelete="false" @handleCurrentChange="handleRoleSelectChange"
          @findPage="findPage" @handleEdit="handleEdit" @handleDelete="handleDelete"
          permsDelete="sys:role:delete" permsEdit="sys:role:edit"
          permsPagination="sys:role:view">
        </b-s-table>
      </div>
    </div>

    <!--新增编辑界面-->
    <el-dialog :title="operation?$t('ACTION.ADD') : $t('ACTION.EDIT')" width="40%"
               :visible.sync="dialogVisible" :close-on-click-modal="false" @close="handleCloseDialog()">
      <el-form :model="dataForm" :rules="dataFormRules" ref="dataForm"
               :size="size" label-width="80px" label-position="right">
        <el-form-item label="ID" prop="id" v-if="false">
          <el-input v-model="dataForm.id" :disabled="true" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色名" prop="name">
          <el-input v-model="dataForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="dataForm.remark" auto-complete="off" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button :size="size" @click.native="handleCloseDialog()">{{$t('ACTION.CANCEL')}}</el-button>
        <el-button :size="size" type="primary" @click.native="submitForm" :loading="editLoading" style="color: #fff;">
          {{$t('ACTION.SUBMIT')}}
        </el-button>
      </div>
    </el-dialog>

    <!--角色权限，内容栏-->
    <div class="menu-container">
      <h1 class="menu-header">
        <img class="menu-header-title" src="media/logos/color-line.png" alt="logo" />
        <span><b>角色权限授权</b></span>
        <span class="role-menu-tips">授权时应至少赋予一个权限</span>
      </h1>
      <div class="menu-tool">
        <div class="menu-tool-operation">
          <b-s-button icon="fa fa-undo" variant="primary" :tag="$t('ACTION.RESET')"
                      @click="resetSelectionAuthority" :disabled="this.selectRole.id == null"
                      perms="sys:role:edit"
                      stylesheet="font-size: 1.0rem;"
          ></b-s-button>
          <b-s-button icon="fa fa-arrow-right" variant="primary" :tag="$t('ACTION.SUBMIT')"
                      @click="submitAuthorityForm" :disabled="this.selectRole.id == null"
                      perms="sys:role:edit"
                      stylesheet="font-size: 1.0rem;" class="ml-2"
          ></b-s-button>
        </div>
      </div>
      <div>
        <!--  @selection-change="selectionChange"   @current-change="handleCurrentChange"  :max-height="maxHeight"    -->
        <el-table :data="authorityPageResult" :highlight-current-row="true"
                  ref="authorityTable"
                  @selection-change="authoritySelectionChange"
                  v-loading="authorityLoading" :element-loading-text="$t('ACTION.LOADING','ch')" :border="false" :stripe="false"
                  :show-overflow-tooltip="true" size="small" align="left" style="width:100%;" >
          <el-table-column type="selection" width="50" v-if="true" header-align="center" align="center">
          </el-table-column>
          <el-table-column v-for="column in authorityColumns" header-align="center" align="center"
                           :prop="column.prop" :label="column.label" :width="column.width" :min-width="column.minWidth"
                           :fixed="column.fixed" :key="column.prop" :type="column.type" :formatter="column.formatter"
                           :sortable="column.sortable==null?true:column.sortable">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!--角色菜单，表格树内容栏-->
    <div class="menu-container">
      <h1 class="menu-header">
        <img class="menu-header-title" src="media/logos/color-line.png" alt="logo" />
        <span><b>角色菜单授权</b></span>
        <span class="role-menu-tips">授权时应至少赋予一个菜单</span>
      </h1>
      <div class="menu-tool">
        <div class="menu-tool-select-all">
          <el-checkbox v-model="checkAll" @change="handleCheckAll" :disabled="this.selectRole.id == null"><b>{{$t('ACTION.CHECK_ALL')}}</b></el-checkbox>
        </div><!--:disabled="this.selectRole.id == null"-->
        <div class="menu-tool-operation">
          <b-s-button icon="fa fa-undo" variant="primary" :tag="$t('ACTION.RESET')"
                      @click="resetSelection" :disabled="this.selectRole.id == null"
                      perms="sys:role:edit"
                      stylesheet="font-size: 1.0rem;"
          ></b-s-button>
          <b-s-button icon="fa fa-arrow-right" variant="primary" :tag="$t('ACTION.SUBMIT')"
                      @click="submitAuthForm" :disabled="this.selectRole.id == null"
                      perms="sys:role:edit"
                      stylesheet="font-size: 1.0rem;" class="ml-2"
          ></b-s-button>
        </div>
      </div>
      <el-tree :data="menuData" size="mini" show-checkbox node-key="id" :props="defaultProps"
               style="width: 100%;padding-top: 20px; padding-bottom: 20px;" ref="menuTree" :render-content="renderContent"
               v-loading="menuLoading" element-loading-text="拼命加载中" :check-strictly="true"
               @check-change="handleMenuCheckChange">
      </el-tree>
    </div>

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
    name: "Role",
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
          name: '' // 角色名称过滤
        },
        columns: [
          /*{prop:"id", label:"ID", minWidth:50},*/
          {prop:"name", label:"角色名", minWidth:120},
          {prop:"remark", label:"备注", minWidth:120},
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
            { required: true, message: '请输入角色名称', trigger: 'blur'},
            { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur'}
          ]
        },

        // 新增编辑界面数据
        dataForm: {
          id: 0,
          name: '',
          remark: ''
        },

        selectRole: {}, // 当前被选角色
        menuData: [], // 菜单树数据
        menuSelections: [],
        menuLoading: false, // 菜单树加载时使用
        authLoading: false, // 提交角色菜单授权按钮时使用
        checkAll: false, // 角色菜单全选按钮控制时使用
        currentRoleMenus: [], // 当前角色对应的角色菜单数据
        defaultProps: {
          children: 'children',
          label: 'name'
        },

        // 权限控制相关
        authorityPageResult: [],
        authorityColumns: [
          {prop:"id", label:"ID", minWidth:50},
          {prop:"name", label:"权限名", minWidth:120},
          {prop:"desc", label:"描述", minWidth:120},
          {prop:"createBy", label:"创建人", minWidth:120},
          {prop:"createTime", label:"创建时间", minWidth:120, formatter: this.dateFormat},
          {prop:"lastUpdateBy", label:"更新人", minWidth:120},
          {prop:"lastUpdateTime", label:"更新时间", minWidth:120, formatter: this.dateFormat}
        ],
        currentRoleAuthority: [],     // 当前角色对应的角色权限数据
        authoritySelections: [],      // 权限列表选中列
        authorityLoading: false,      // 权限表加载时使用
        authorityAuthLoading: false,  // 提交角色权限授权按钮时使用
      }
    },
    mounted() {
      this.$store.dispatch(SET_BREADCRUMB, [
        { title: "用户权限管理", route: "user" },
        { title: "角色管理" }
      ]);

      this.initColumns();
      this.findAuthorityPage();
    },
    methods: {
      /** 权限控制相关-页面按钮权限 **/
      hasPerms: function (perms) {
        // 根据权限标识和外部指示状态进行权限判断
        // ('&'表示运算符按位与，都为1才为1否则为0。也类似于且，都真才为真)
        return hasPermission(perms) & !this.disabled
      },

      /** 角色相关 **/
      // 获取分页数据
      findPage: function (data) {
        if (data != null) {
          this.pageRequest = data.pageRequest;
        }
        this.pageRequest.params = [{name: 'name', value: this.filters.name}];
        this.$api.role.findPage(this.pageRequest).then( (res) => {
          // 组织角色数据
          this.pageResult = res.data.data;
          console.log(res.data.data);
          // 获取菜单树数据
          this.findMenuTreeData();
        }).then(data != null ? data.callback : '').catch(()=>{})
      },
      // 批量删除
      handleDelete: function (data) {
        let delRows = data.rows;
        this.$api.role.batchDelete(delRows).then(data.callback).catch(()=>{})
      },
      // 显示新增界面
      handleAdd: function () {
        this.dialogVisible = true;
        this.operation = true;
        this.dataForm = {
          id: null,
          name: '',
          remark: ''
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
              this.$api.role.save(params).then((res) => {
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
      /** 菜单相关 **/
      // 获取菜单数据
      findMenuTreeData: function () {
        this.menuLoading = true;
        this.$api.menu.findMenuTree().then((res) => {
          this.menuData = res.data.data;
          this.menuLoading = false;
        })
      },
      // 角色选择改变监听的事件
      handleRoleSelectChange(val) {
        if (val == null || val.val == null) {
          return
        }
        this.selectRole = val.val;
        let params = {'roleId':val.val.id};
        // 加载对应的角色信息
        this.$api.role.findRoleMenus(params).then((res) => {
          this.currentRoleMenus = res.data.data;
          this.$refs.menuTree.setCheckedNodes(res.data.data);
        }).then( res => {
          // 加载对应的权限信息
          this.$api.role.findRoleAuthorities(params).then((res) => {
            this.currentRoleAuthority = res.data.data;
            let that = this;
            // 注:EL-Table组件不同对象的数据设置进去不生效
            let handledData = [];
            that.currentRoleAuthority.forEach( item => {
              that.authorityPageResult.forEach( entry => {
                let flag = that.isObjEquals(item, entry);
                if (flag) {
                  handledData.push(entry);
                }
              });
            });
            console.log(handledData);
            if (handledData.length !== 0) {
              this.toggleSelection(handledData);
            } else {
              this.toggleSelection();
            }
          })
        }).catch(()=>{})
      },

      // 树节点选择监听的事件
      handleMenuCheckChange(data, check, subCheck) {
        if (check) {
          // 节点选中时同步选中父节点
          let parentId = data.parentId;
          this.$refs.menuTree.setChecked(parentId, true, false);
        } else {
          // 节点取消选中时同步取消选中子节点
          if (data.children != null) {
            data.children.forEach(element => {
              this.$refs.menuTree.setChecked(element.id, false, false);
            });
          }
        }
      },
      // 重置选择
      resetSelection() {
        this.checkAll = false;
        // 设置菜单树选中节点均为空
        this.$refs.menuTree.setCheckedNodes(this.currentRoleMenus);
      },
      // 全选操作
      handleCheckAll() {
        if (this.checkAll) {
          let allMenus = [];
          this.checkAllMenu(this.menuData, allMenus);
          this.$refs.menuTree.setCheckedNodes(allMenus);
        } else {
          this.$refs.menuTree.setCheckedNodes([]);
        }
      },
      // 递归全选
      checkAllMenu(menuData, allMenus) {
        menuData.forEach(menu => {
          allMenus.push(menu);
          if (menu.children) {
            this.checkAllMenu(menu.children, allMenus);
          }
        });
      },
      // 角色菜单授权提交
      submitAuthForm() {
        let roleId = this.selectRole.id;
        if ('admin' == this.selectRole.name) {
          this.$message({ message: '超级管理员拥有所有菜单权限，禁止修改！', type: 'error', duration: 2000 });
          return;
        }
        this.authLoading = true;
        let checkedNodes = this.$refs.menuTree.getCheckedNodes(false, true);
        let roleMenus = [];
        for (let i=0, len=checkedNodes.length; i<len; i++) {
          let roleMenu = { roleId: roleId, menuId: checkedNodes[i].id };
          roleMenus.push(roleMenu);
        }
        this.$api.role.saveRoleMenus(roleMenus).then((res) => {
          if (res.data.code == 200) {
            this.$message({ message: '操作成功, ' + res.data.message, type: 'success', duration: 2000 })
          } else {
            this.$message({ message: '操作失败, ' + res.data.message, type: 'error', duration: 2000 })
          }
          this.authLoading = false;
        }).catch(()=>{})
      },
      // 镭射内容
      renderContent(h, { node, data, store }) {
        return (
          <div class="column-container">
            <span style="text-align: center; margin-right: 80px;">{data.name}</span>
            <span style="text-align: center; margin-right: 80px;">
              <el-tag type={data.type === 0?'':data.type === 1?'success':'info'} size="small">
                {data.type === 0?'目录':data.type === 1?'菜单':'按钮'}
              </el-tag>
            </span>
            <span style="text-align: center; margin-right: 80px;"><i class={data.icon}></i></span>
            <span style="text-align: center; margin-right: 80px;">{data.parentName?data.parentName:'顶级菜单'}</span>
            <span style="text-align: center; margin-right: 80px;">{data.url?data.url:'\t'}</span>
          </div>
        )
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
      },


      /** 角色权限控制相关 **/
      findAuthorityPage: function (data) {
        this.$api.authority.findAll().then( (res) => {
          this.authorityPageResult = res.data.data;
        }).catch(()=>{})
      },
      // 比较两个对象是否相同
      isObjEquals(o1, o2) {
        let props1 = Object.getOwnPropertyNames(o1);
        let props2 = Object.getOwnPropertyNames(o2);
        if (props1.length !== props2.length) {
          return false;
        }
        for (let i=0,max=props1.length; i<max; i++) {
          let propName = props1[i];
          if (propName !== '__ob__' && o1[propName] !== o2[propName]) {
            return false;
          }
        }
        return true;
      },
      // 设置table组件选中列
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.authorityTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.authorityTable.clearSelection();
        }
      },
      // 重置选择
      resetSelectionAuthority: function () {
        // 设置表格选中节点均为空
        this.$refs.authorityTable.clearSelection();
        this.authoritySelections = [];
      },
      // 提交权限设置操作
      submitAuthorityForm: function () {
        let roleId = this.selectRole.id;
        if ('admin' == this.selectRole.name) {
          this.$message({ message: '超级管理员拥有所有菜单权限，禁止修改！', type: 'error', duration: 2000 });
          return;
        }
        this.authorityAuthLoading = true;
        let checkedContent = this.authoritySelections;
        let roleAuthorities = [];
        for (let i=0, len=checkedContent.length; i<len; i++) {
          let roleAuthority = {
            roleId: roleId,
            authorityId: checkedContent[i].id
          };
          roleAuthorities.push(roleAuthority);
        }
        this.$api.role.saveRoleAuthorities(roleAuthorities).then((res) => {
          if (res.data.code == 200) {
            this.$message({ message: '操作成功, ' + res.data.message, type: 'success', duration: 2000 })
          } else {
            this.$message({ message: '操作失败, ' + res.data.message, type: 'error', duration: 2000 })
          }
          this.authorityAuthLoading = false;
        }).catch(()=>{})
      },
      // 选择切换
      authoritySelectionChange:function (selections) {
        this.authoritySelections = selections;
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

  /** 菜单展示相关 **/
  div.menu-container {
    margin-top: 30px;
  }
  h1.menu-header {
    padding-bottom: 5px;
    text-align: left;
    font-size: 16px;
    color: #333;/* #5d78ff !important    */
  }
  div.menu-tool {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    margin: 0 0 5px 0;
  }
  div.menu-tool > div:last-child {
    margin-left: auto;
  }
  div.menu-tool div.menu-tool-select-all {

  }
  div.menu-tool div.menu-tool-operation {

  }
  h1.menu-header > img.menu-header-title {
    display: inline-block;
    width: 1.6em;
    height: auto;
    vertical-align: middle;
    margin-right: 10px;
  }
  h1.menu-header > span {
    font-size: 1.1em;
    font-weight: normal;
  }
  h1.menu-header > span.role-menu-tips {
    font-size: 0.8em;
    color: #444444;
    font-weight: 400;
    margin-left: 10px;
  }
</style>
