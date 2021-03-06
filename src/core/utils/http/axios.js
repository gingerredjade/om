import axios from "axios";
import config from "./config";
import router from "@/router";
import JwtService from "@/core/services/jwtremake.service";

// 统一请求路径前缀。
let baseAPI = process.env.NODE_ENV === "development" ? '/api' : '/';
// console.log("current process.env.NODE_ENV is [%s]", process.env.NODE_ENV)
// console.log("current baseURL is [%s]", baseAPI)

/**
 * http请求工具类,统一处理网络请求的响应拦截处理方式
 *    请求拦截器，负责将客户端标识token值存储并放置在头部提交给服务端
 *    响应拦截器，负责全局处理业务请求的网络后者业务错误
 *
 * @param options
 * @returns {Promise<unknown>}
 */

const instance = axios.create({
  baseURL: baseAPI,
  headers: config.headers,
  timeout: config.timeout,
  withCredentials: config.withCredentials
});
// request 请求拦截器
instance.interceptors.request.use(
  config => {
    /*let token = JwtService.getToken();
    // 发送请求时携带token
    if (token) {
      config.headers.token = token
    } else {
      // 重定向到登录页面
      router.push('/login')
    }*/
    return config;
  },
  error => {
    // 请求发生错误时
    console.log("request:", error);
    // 判断请求超时
    if (
      error.code === "ECONNABORTED" &&
      error.message.indexOf("timeout") !== -1
    ) {
      console.log("timeout请求超时");
    }
    // 需要重定向到错误页面
    const errorInfo = error.response;
    console.log(errorInfo);
    if (errorInfo) {
      error = errorInfo.data; // 页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
      const errorStatus = errorInfo.status; // 404 403 500 ...
      router.push({
        path: `/custom-error/${errorStatus}`
      });
    }
    return Promise.reject(error); // 在调用的那边可以拿到(catch)你想返回的错误信息
  }
);

// response 响应拦截器
instance.interceptors.response.use(
  response => {
    // return response.data
    return response;
  },
  err => {
    debugger;
    if (err && err.response) {
      console.log(err.response);
      switch (err.response.status) {
        case 400:
          err.message = `请求错误: ${err.response.config.url}`;
          //router.push('/custom-error/400');
          router.push({
            name: 'error-400',
            params: {statusText: err.response.statusText, errMsg: err.message}
          });
          break;
        case 401:
          err.message = "未授权，请登录";
          //router.push('/login');
          router.push({
            name: 'login',
            params: {warmPrompt: '当前登录状态已过期，请重新登录！'}
          });
          break;
        case 403:
          err.message = `拒绝访问: ${err.response.config.url}`;
          router.push({
            name: 'error-403',
            params: {statusText: err.response.statusText, errMsg: err.message}
          });
          break;
        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`;
          router.push({
            name: 'error-404',
            params: {statusText: err.response.statusText, errMsg: err.message}
          });
          break;
        case 408:
          err.message = `请求超时: ${err.response.config.url}`;
          router.push({
            name: 'error-408',
            params: {statusText: err.response.statusText, errMsg: err.message}
          });
          break;
        case 500:
          err.message = `服务器内部错误: ${err.response.config.url}`;
          router.push({
            name: 'error-500',
            params: {statusText: err.response.statusText, errMsg: err.message}
          });
          break;
        case 501:
          err.message = `服务未实现: ${err.response.config.url}`;
          router.push({
            name: 'error-501',
            params: {statusText: err.response.statusText, errMsg: err.message}
          });
          break;
        case 502:
          err.message = `网关错误: ${err.response.config.url}`;
          router.push({
            name: 'error-502',
            params: {statusText: err.response.statusText, errMsg: err.message}
          });
          break;
        case 503:
          err.message = `服务不可用: ${err.response.config.url}`;
          router.push({
            name: 'error-503',
            params: {statusText: err.response.statusText, errMsg: err.message}
          });
          break;
        case 504:
          err.message = `网关超时: ${err.response.config.url}`;
          router.push({
            name: 'error-504',
            params: {statusText: err.response.statusText, errMsg: err.message}
          });
          break;
        case 505:
          err.message = "HTTP版本不受支持";
          router.push({
            name: 'error-505',
            params: {errMsg: err.message}
          });
          break;
        default:
          err.message = err.response.data.msg;
          break;
      }
    } else {
      err.message = err;
    }
    console.error(err);
    return Promise.reject(err); // 返回接口返回的错误信息
  }
);

export default instance;
