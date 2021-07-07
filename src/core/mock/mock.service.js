// 按照ES6的语法,以import的方式引入
import Vue from "vue";

// 以require方式引入
// 使用axios-mock-adapter对axios请求进行测试
var MockAdapter = require("axios-mock-adapter");

// mock testing user accounts
const users = [
  {
    username: "admin@demo.com",
    password: "demo",
    token: "mgfi5juf74j"
  },
  {
    username: "gis",
    password: "gis",
    token: "fgj8fjdfk43"
  }
];

const MockService = {
  init() {
    // this sets the mock adapter on the default instance
    var mock = new MockAdapter(Vue.axios);

    // get use onGet, post use onPost, put use onPut
    // mock login request(以函数形式处理)
    mock.onPost("/login").reply(data => {
      // 解析axios传过来的数据
      const credential = JSON.parse(data.data);
      // 判断模拟假数据中是否有和传过来的数据匹配的
      const found = users.find(user => {
        return (
          credential.username === user.username &&
          credential.password === user.password
        );
      });
      if (found) {
        return [200, found];
      }
      return [404, { errors: ["The login detail is incorrect"] }];
    });

    // mock to verify authentication(使用正则表达式匹配 函数形式处理)
    mock.onGet(/\/verify\/?/).reply(data => {
      const token = data.headers.Authorization.replace("Token ", "");
      if (token !== "undefined") {
        const found = users.find(user => {
          return token === user.token;
        });
        return [200, found];
      }
      return [401, { errors: ["Invalid authentication"] }];
    });
  }
};

export default MockService;
