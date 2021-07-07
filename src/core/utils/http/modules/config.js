import axios from '../axios'

/*
 * 配置管理模块
 */

// 发布
export const save = (data) => {
  return axios({
    url: '/config/publish',
    method: 'post',
    data
  })
};
// 删除
export const batchDelete = (data) => {
  return axios({
    url: '/config/deleteInBatch',
    method: 'delete',
    data
  })
};
// 分页查询
export const findPage = (data) => {
  return axios({
    url: '/config/list',
    method: 'post',
    data
  })
};

