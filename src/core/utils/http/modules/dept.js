import axios from '../axios'

/*
 * 机构管理模块
 */

// 保存
export const save = (data) => {
  return axios({
    url: '/dept/save',
    method: 'post',
    data
  })
};
// 删除（后台参数为结构体时使用）
export const batchDelete = (data) => {
  return axios({
    url: '/dept/delete',
    method: 'delete',
    data
  })
};
// 查询机构树
export const findDeptTree = (params) => {
  return axios({
    url: '/dept/findTree',
    method: 'get',
    params
  })
};
