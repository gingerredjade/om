import axios from '../axios'

/*
 * 角色管理模块
 */

// 保存
export const save = (data) => {
  return axios({
    url: '/role/save',
    method: 'post',
    data
  })
};
// 删除
export const batchDelete = (data) => {
  return axios({
    url: '/role/delete',
    method: 'delete',
    data
  })
};
// 分页查询
export const findPage = (data) => {
  return axios({
    url: '/role/list',
    method: 'post',
    data
  })
};
// 查询全部
export const findAll = () => {
  return axios({
    url: '/role/listAll',
    method: 'get'
  })
};
// 查询角色菜单集合
export const findRoleMenus = (params) => {
  return axios({
    url: '/role/findRoleMenus',
    method: 'get',
    params
  })
};
// 保存角色菜单集合
export const saveRoleMenus = (data) => {
  return axios({
    url: '/role/saveRoleMenus',
    method: 'post',
    data
  })
};

// 查询角色权限集合
export const findRoleAuthorities = (params) => {
  return axios({
    url: '/role/findRoleAuthorities',
    method: 'get',
    params
  })
};
// 保存角色权限集合
export const saveRoleAuthorities = (data) => {
  return axios({
    url: '/role/saveRoleAuthorities',
    method: 'post',
    data
  })
};

