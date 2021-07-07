const path = require("path");

function resolve (dir = '') {
  return path.join(__dirname, './src', dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'om',
  assetsDir: 'static',
  productionSourceMap: false,
  /*configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 请求本地json
      alias: {
        '@': path.resolve(__dirname, './src'), // 直接写法
        '@a': path.resolve(__dirname, './src/assets'),
        '@c': resolve('components'), // 调用封装的函数写法
        // If using the runtime only build
        vue$: "vue/dist/vue.runtime.esm.js" // 'vue/dist/vue.runtime.common.js' for webpack 1
        // Or if using full build of Vue (runtime + compiler)
        // vue$: 'vue/dist/vue.esm.js'      // 'vue/dist/vue.common.js' for webpack 1
      }
    }
  },*/
  configureWebpack: (config) => {
    Object.assign(config, {
      // 开发生产同配置
      resolve: {
        extensions: ['.js', '.vue', '.json'], // 请求本地json
        alias: {
          '@': path.resolve(__dirname, './src'), // 直接写法
          '@a': path.resolve(__dirname, './src/assets'),
          '@c': resolve('components') // 调用封装的函数写法
        } // 别名配置
      }
    })
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置
      config.mode = 'production'
      const optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          minSize: 20000, // 依赖包超过20000字节会被单独打包
          maxInitialRequests: Infinity,
          maxAsyncRequests: 20
        }
      }
      Object.assign(config, {
        optimization
      })
    } else {
      // 为开发环境修改配置
      config.mode = 'development'
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .tap(options => {
        options.configFile = path.resolve(__dirname, ".eslintrc.js");
        return options;
      });
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启CSS source map?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      postcss: {
        config: {
          path: __dirname
        }
      },
      scss: {
        prependData: `@import "@/assets/sass/vendors/vue/vuetify/variables.scss";`
      }
    }
  },
  transpileDependencies: ["vuetify"],
  // webpack-dev-server 相关配置
  devServer: {
    open: true, // 自动打开浏览器
    // host: 'localhost',
    port: 8081,
    https: false,
    hotOnly: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    disableHostCheck: true,
    /* 使用代理 */
    proxy: {
      '/api': {
        // 跨域解决4）此处写法目的是为了将/api替换成http://localhost:9999
        // target: 'http://192.168.56.218:8182', // 目标代理服务器地址
        target: 'http://192.168.56.218:8083', // 目标代理服务器地址
        changeOrigin: true, // 开启代理,允许跨域
        ws: true, // 是否启用websockets
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
};

/**
 * 前端开发数据交互node端代理的说明
 * /api 代表接口的基本地址
 * target 目标服务器的地址
 * changeOrigin 是否跨域（一般都可以设置为true）
 * pathRewrite 将当前路径，重定向到目标路径，可以用于调试
 * */
