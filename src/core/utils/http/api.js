/*
 * 接口统一集成模块
 */
import * as dept from './modules/dept'
import * as user from './modules/user'
import * as role from './modules/role'
import * as menu from './modules/menu'
import * as dict from './modules/dict'
import * as authority from './modules/authority'
import * as config from './modules/config'



// 默认全部导出
export default {
  dept,
  user,
  role,
  menu,
  dict,
  authority,
  config
}
