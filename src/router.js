// router
import Vue from "vue";
import Router from "vue-router";

/*
 * 0. 如果使用模块化编程，要调用Vue.use(VueRouter)
 */
Vue.use(Router);

/*
 * 1. 定义(路由)组件
 *    可以从其他文件import进来。
 * 2. 定义路由
 *    每个路由应该映射一个组件。其中‘component’可以是通过Vue.extend()创建的组件构造器，或者只是一个组件配置对象。
 *    嵌套路由?
 *    @type {({path: string, component: {components: {HelloWorld: *}, name: string}, name: string}|{path: string, component: (function(): *), name: string})[]}
 * 3. 创建router实例，然后传‘routes’ 配置。还可以传别的参数，不过先这么简单吧
 *    @type {VueRouter}
 */
export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/bs",
      component: () => import("@/view/pages/bus/Bs"),
      children: [
        {
          path: "/bs",
          name: "bs",
          component: () => import("@/view/pages/bus/Bs")
        }
      ]
    },
    {
      path: "/",
      /*redirect: "/dashboard",*/
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/Dashboard.vue")
        },
        {
          path: "/monitor",
          name: "monitor",
          component: () => import("@/view/pages/bus/monitor/HealthManage.vue"),
          children: [
            {
              path: "hardware",
              name: "monitor-hardware",
              component: () => import("@/view/pages/bus/monitor/Hardware.vue")
            },
            {
              path: "service",
              name: "monitor-service",
              component: () => import("@/view/pages/bus/monitor/Service.vue")
            },
            {
              path: "storage",
              name: "monitor-storage",
              component: () => import("@/view/pages/bus/monitor/Storage.vue")
            },
            {
              path: "deal",
              name: "monitor-deal",
              component: () => import("@/view/pages/bus/monitor/Deal.vue")
            }
          ]
        },
        {
          path: "/dr",
          name: "dr",
          component: () => import("@/view/pages/bus/datares/DataResourceManage.vue"),
          children: [
            {
              path: "overview",
              name: "dr-overview",
              component: () => import("@/view/pages/bus/datares/Overview.vue")
            },
            {
              path: "search",
              name: "dr-search",
              component: () => import("@/view/pages/bus/datares/Search.vue")
            }
          ]
        },
        {
          path: "/log",
          name: "log",
          component: () => import("@/view/pages/bus/log/LogManage.vue"),
          children: [
            {
              path: "collection",
              name: "log-collection",
              component: () => import("@/view/pages/bus/log/Collection.vue")
            },
            {
              path: "query",
              name: "log-query",
              component: () => import("@/view/pages/bus/log/Query.vue")
            },
            {
              path: "stat",
              name: "log-stat",
              component: () => import("@/view/pages/bus/log/Stat.vue")
            }
          ]
        },
        {
          path: '/test/dict',
          name: 'dict',
          component: () => import('@/view/pages/bus/test/Dict.vue')
        }
      ]
    },
    {
      path: "/",
      component: () => import("@/view/layout/LayoutFixed"),
      children: [
        {
          path: "/scm",
          name: "scm",
          component: () => import("@/view/pages/bus/Scm.vue")
        },
        {
          path: "/sys",
          name: "sys",
          component: () => import("@/view/pages/bus/sys/UserPrivilegeManage.vue"),
          children: [
            {
              path: "user",
              name: "sys-user",
              component: () => import("@/view/pages/bus/sys/User.vue")
            },
            {
              path: "dept",
              name: "sys-dept",
              component: () => import("@/view/pages/bus/sys/Dept.vue")
            },
            {
              path: "role",
              name: "sys-role",
              component: () => import("@/view/pages/bus/sys/Role.vue")
            },
            {
              path: "menu",
              name: "sys-menu",
              component: () => import("@/view/pages/bus/sys/Menu.vue")
            },
            {
              path: "authority",
              name: "sys-authority",
              component: () => import("@/view/pages/bus/sys/Authority.vue")
            }
          ]
        }
      ]
    },
    {
      path: "/custom-error",
      name: "error",
      component: () => import("@/view/pages/error/Error.vue"),
      children: [
        {
          name: "error-400",
          path: "400",
          component: () => import("@/view/pages/error/Error-400.vue")
        },
        {
          name: "error-401",
          path: "401",
          component: () => import("@/view/pages/error/Error-401.vue")
        },
        {
          name: "error-403",
          path: "403",
          component: () => import("@/view/pages/error/Error-403.vue")
        },
        {
          name: "error-404",
          path: "404",
          component: () => import("@/view/pages/error/Error-404.vue")
        },
        {
          name: "error-405",
          path: "405",
          component: () => import("@/view/pages/error/Error-405.vue")
        },
        {
          name: "error-408",
          path: "408",
          component: () => import("@/view/pages/error/Error-408.vue")
        },
        {
          name: "error-500",
          path: "500",
          component: () => import("@/view/pages/error/Error-500.vue")
        },
        {
          name: "error-501",
          path: "501",
          component: () => import("@/view/pages/error/Error-501.vue")
        },
        {
          name: "error-502",
          path: "502",
          component: () => import("@/view/pages/error/Error-502.vue")
        },
        {
          name: "error-503",
          path: "503",
          component: () => import("@/view/pages/error/Error-503.vue")
        },
        {
          name: "error-504",
          path: "504",
          component: () => import("@/view/pages/error/Error-504.vue")
        },
        {
          name: "error-505",
          path: "505",
          component: () => import("@/view/pages/error/Error-505.vue")
        }
      ]
    },
    {
      path: "/",
      component: () => import("@/view/pages/auth/login_pages/Login-1"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/auth/login_pages/Login-1")
        }
      ]
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-404.vue")
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@/view/pages/bus/test/TestManage.vue"),
      children: [
        {
          path: "lm1",
          name: "test-lm1",
          component: () => import("@/view/pages/bus/test/LargeMonitor.vue"),
        },
        {
          path: "lm2",
          name: "test-lm2",
          component: () => import("@/view/pages/bus/test/LargeMonitor2.vue"),
        },
        {
          path: "lm3",
          name: "lm3",
          component: () => import("@/view/pages/bus/test/LargeMonitor3.vue"),
        },
        {
          path: "lm4",
          name: "lm4",
          component: () => import("@/view/pages/bus/test/LargeMonitor4.vue"),
        },
        {
          path: "lm5",
          name: "lm5",
          component: () => import("@/view/pages/bus/test/LargeMonitor5.vue"),
        }
      ]
    },
    {
      path: "/test/lm6",
      name: "lm6",
      component: () => import("@/view/pages/bus/test/PageLogin.vue"),
    },
    {
      path: "/test/register",
      name: "register",
      component: () => import("@/view/pages/bus/test/PageRegister.vue"),
    },
    {
      path: "/test/canvas1",
      name: "canvas1",
      component: () => import("@/view/pages/bus/test/CanvasTest1.vue"),
    },
    {
      path: "/test/canvas2",
      name: "canvas2",
      component: () => import("@/view/pages/bus/test/CanvasTest2.vue"),
    }
  ]
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
