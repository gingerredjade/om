import axios from '../axios'

/*
 * 权限管理模块
 */

// 保存
export const save = (data) => {
  return axios({
    url: '/authority/save',
    method: 'post',
    data
  })
};
// 删除
export const batchDelete = (data) => {
  return axios({
    url: '/authority/delete',
    method: 'post',
    data
  })
};
// 查询全部
export const findAll = () => {
  return axios({
    url: '/authority/listAll',
    method: 'get'
  })
};
// 分页查询
export const findPage = (data) => {
  return axios({
    url: '/authority/list',
    method: 'post',
    data
  })
};
