// China
export const locale = {
  TRANSLATOR: {
    SELECT: "选择你的语言"
  },
  MENU: {
    NEW: "新",
    ACTIONS: "行动",
    CREATE_POST: "创建新帖子",
    PAGES: "Pages",
    FEATURES: "特征",
    APPS: "应用",
    DASHBOARD: "首页",
  },
  AUTH: {
    GENERAL: {
      OR: "要么",
      SUBMIT_BUTTON: "提交",
      NO_ACCOUNT: "没有账号？",
      SIGNUP_BUTTON: "注册",
      FORGOT_BUTTON: "忘记密码",
      BACK_BUTTON: "返回",
      PRIVACY: "隐私",
      LEGAL: "法律",
      CONTACT: "联系",
      NEW_HERE: '新人?',
      CREATE_ACCOUNT: '创建账户',
      AGREE: '我已同意',
      TERMS_CONDITIONS: '条款和协议'
    },
    LOGIN: {
      TITLE: "创建帐号",
      BUTTON: "登录"
    },
    FORGOT: {
      TITLE: "忘记密码?",
      DESC: "Enter your email to reset your password",
      SUCCESS: "你的账户已经成功重置."
    },
    REGISTER: {
      TITLE: "注册",
      DESC: "输入详细信息创建账户",
      SUCCESS: "账户成功注册."
    },
    INPUT: {
      EMAIL: "邮箱",
      FULLNAME: "全名",
      PASSWORD: "密码",
      CONFIRM_PASSWORD: "确认密码",
      USERNAME: "用戶名"
    },
    VALIDATION: {
      INVALID: "{name} 是无效的",
      REQUIRED: "{name} 是必填项",
      MIN_LENGTH: "{name} 最小长度为 {min}",
      AGREEMENT_REQUIRED: "请接受条款和条件",
      NOT_FOUND: "请求的 {name} 不存在",
      INVALID_LOGIN: "登录信息不正确",
      REQUIRED_FIELD: "必填",
      MIN_LENGTH_FIELD: "最小长度:",
      MAX_LENGTH_FIELD: "最大长度:",
      INVALID_FIELD: "无效的填写"
    },
    LOGOUT: {
      TITLE: "登出账户",
      BUTTON: "退出"
    }
  },
  ECOMMERCE: {
    COMMON: {
      SELECTED_RECORDS_COUNT: "Selected records count: ",
      ALL: "All",
      SUSPENDED: "Suspended",
      ACTIVE: "Active",
      FILTER: "Filter",
      BY_STATUS: "by Status",
      BY_TYPE: "by Type",
      BUSINESS: "Business",
      INDIVIDUAL: "Individual",
      SEARCH: "Search",
      IN_ALL_FIELDS: "in all fields"
    },
    ECOMMERCE: "eCommerce",
    CUSTOMERS: {
      CUSTOMERS: "顾客",
      CUSTOMERS_LIST: "客户名单",
      NEW_CUSTOMER: "New Customer",
      DELETE_CUSTOMER_SIMPLE: {
        TITLE: "Customer Delete",
        DESCRIPTION: "Are you sure to permanently delete this customer?",
        WAIT_DESCRIPTION: "Customer is deleting...",
        MESSAGE: "Customer has been deleted"
      },
      DELETE_CUSTOMER_MULTY: {
        TITLE: "Customers Delete",
        DESCRIPTION: "Are you sure to permanently delete selected customers?",
        WAIT_DESCRIPTION: "Customers are deleting...",
        MESSAGE: "Selected customers have been deleted"
      },
      UPDATE_STATUS: {
        TITLE: "Status has been updated for selected customers",
        MESSAGE: "Selected customers status have successfully been updated"
      },
      EDIT: {
        UPDATE_MESSAGE: "Customer has been updated",
        ADD_MESSAGE: "Customer has been created"
      }
    }
  },
  ACTION: {
    OPERATION: "操作",
    ADD: "新增",
    EDIT: "编辑",
    DELETE: "删除",
    BATCHDELETE: "批量删除",
    SEARCH: "查询",
    LOADING: "拼命加载中",
    SUBMIT: "提交",
    CONFIRM: "确定",
    CANCEL: "取消",
    RESET: "重置",
    AUDIT: '审核',
    RELEASE: '发布',
    RELEASE_UNDO: '下线',
    UPDATE: '更新',
    REFRESH: '刷新',
    CHECK_ALL: '全选',
    COLUMN_SHOW: '列显示'
  },
  STATUS: {
    USER_OK: '正常',
    USER_LOCK: '锁定'
  },
  COPYRIGHT: {
    COMPANY: {
      NAME: 'XXXXXXX股份有限公司'
    }
  },
  PROMPT: {
    REGISTRATION_CLOSED: '该系统不开放注册 请联系管理员添加账户!'
  },
  SYSTEM: {
    LAYOUT: {
      TITLE: "系统布局设置",
      HEADER_SET: {
        TITLE: "顶部菜单设置",
        DESKTOP_FIXED_HEADER: "桌面版固定头部",
        MOBILE_FIXED_HEADER: "手机版固定头部",
        HEADER_WIDTH: "顶部宽度",
        HEADER_MENU_ARROWS: "顶部菜单箭头"
      },
      SUBHEADER_SET: {
        TITLE: "子菜单设置",
        DISPLAY_SUBHEADER: "显示子菜单",
        SUBHEADER_WIDTH: "子菜单宽度"
      },
      CONTENT_SET: {
        TITLE: "内容设置",
        CONTENT_WIDTH: "内容宽度"
      },
      ASIDE_SET: {
        TITLE: "侧边栏设置",
        DISPLAY_ASIDE: "显示侧边栏"
      },
      FOOTER_SET: {
        TITLE: "页脚设置",
        FOOTER_WIDTH: "页脚宽度",
        FOOTER_LAYOUT: "页脚布局"
      },
      TOOLBAR_SET: {
        TITLE: "",
        SHOW_TOOLBAR: "显示工具栏"
      },
      SHOW_LOGO: "显示LOGO"
    }
  },
  USER: {
    INFO: {
      LABEL: '用户信息'
    }
  },
  BUS_MENU: {
    BIG_SCREEN: "可视化中心",
    MONITOR: "监控",
    HEALTH_MONITORING: {
      TITLE: "运行状态监控",
      LABEL: "运行状态",
      SUB: {
        HARDWARE_RESOURCE_MONITORING: "硬件资源监控",
        SERVICE_CLUSTER_MONITORING: "服务集群监控",
        STORAGE_CLUSTER_MONITORING: "存储集群监控",
        DEAL_CLUSTER_MONITORING: "处理集群监控"
      }
    },
    DATA_RESOURCE_MONITORING: {
      TITLE: "数据资源监控",
      LABEL: "数据资源",
      SUB: {
        OVERVIEW: "总览",
        DATA_RESOURCE_QUERY: "数据资源查询",
      }
    },
    SYSTEM_CONFIGURATION_MANAGEMENT: "系统配置管理",
    USER_PRIVILEGE_MANAGEMENT: {
      TITLE: "用户权限管理",
      LABEL: "用户 & 权限",
      SUB: {
        USER_MANAGEMENT: "用户管理",
        DEPT_MANAGEMENT: "机构管理",
        ROLE_MANAGEMENT: "角色管理",
        MENU_MANAGEMENT: "菜单管理",
        AUTHORITY_MANAGEMENT: "权限管理"
      }
    },
    LOG_COLLECTION_ANALYSIS: {
      TITLE: "日志收集分析",
      LABEL: "日志",
      SUB: {
        LOG_COLLECTION_CONFIGURATION: "日志采集配置",
        LOG_QUERY_BROWSING: "日志查询浏览",
        LOG_STATISTICAL_ANALYSIS: "日志统计分析"
      }
    },
    LARGE_MONITOR: {
      TITLE_1: "大屏测试1",
      TITLE_2: "大屏测试2",
      TITLE_3: "大屏测试3",
      TITLE_4: "大屏测试4",
      TITLE_5: "大屏测试5",
      TITLE_6: "登录页测试",
      TITLE_7: "Canvas1",
      TITLE_8: "Canvas2",
    }

  }
};
