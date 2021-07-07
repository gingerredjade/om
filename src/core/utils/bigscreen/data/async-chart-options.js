import * as echarts from 'echarts';

/**
 * 服务类别画像
 */
let dataStyle = {
  normal: {
    label: {
      show: true
    },
    labelLine: {
      show: true
    },
    borderRadius: 5,
    //shadowBlur: 40,
    //shadowColor: 'rgba(40, 40, 40, 1)',
  }
};
let placeHolderStyle = {
  normal: {
    color: 'rgba(255, 255, 255, .05)',
    label: {show: false,},
    labelLine: {show: false}
  },
  emphasis: {
    color: 'rgba(0, 0, 0, 0)'
  }
};
export const serviceCategoryOptions = {
  /*title: {
    text: '南丁格尔玫瑰图',
    subtext: '纯属虚构',
    left: 'center'
  },*/
  tooltip: {
    trigger: 'item',
    formatter: '{b} <br/> {c} ({d}%)'  /* {a} <br/>{b} : {c} ({d}%) */
  },
  legend: {
    left: 'center',
    //top: 'bottom',
    bottom: '1%',
    itemWidth: 10,
    itemHeight: 10,
    itemGap: 12,
    textStyle: {
      color: 'rgba(255, 255, 255, .6)',
    },
    //data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
  },
  toolbox: {
    show: false,
    feature: {
      mark: {show: true},
      dataView: {show: false, readOnly: false},
      restore: {show: false},
      saveAsImage: {show: false}
    }
  },
  series: [
    {
      name: '服务分类',
      type: 'pie',
      radius: ['50%', '60%'], // radius: ['59%', '70%'],[50, 250]
      center: ['50%', '42%'], // center: ['50%', '42%'],['50%', '50%']
      roseType: 'radius',
      itemStyle: dataStyle,
      hoverAnimation: false,
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: false
        }
      },
      data: [
        {value: 40, name: 'rose 1'},
        {value: 38, name: 'rose 2'},
        {value: 32, name: 'rose 3'},
        {value: 30, name: 'rose 4'},
        {value: 28, name: 'rose 5'},
        {value: 26, name: 'rose 6'},
        {value: 22, name: 'rose 7'},
        {value: 18, name: 'rose 8'}
      ]
    }
  ]
};


/**
 * 物理资源使用情况数据资源类别画像physicalResUsageOptions
 *  CPU/内存/存储
 */
export const cpuUsageOptions = {
  tooltip: {
    formatter: '{b} : {c}%' /* {a} <br/>{b} : {c}% */
  },
  series: [{
    //name: 'Pressure',
    type: 'gauge',
    radius: '90%',
    center: ['50%', '50%'],
    startAngle: 220,
    endAngle: -40,
    splitNumber: 4,
    min: 0,
    max: 100,
    progress: {
      show: true
    },
    detail: {
      show: true,
      valueAnimation: true,
      formatter: '{value}%',
      offsetCenter: [0, 30],
      textStyle: {
        fontSize: 18,
        color: 'rgba(0, 199, 187, 1)'
      }
    },
    data: [{
      value: 20,
      name: 'CPU使用率',
    }],
    axisLine: {          // 坐标轴线
      show: true,
      lineStyle: {       // 属性lineStyle控制线条样式
        color: [
          [0.1, 'rgb(13, 211, 97)'],
          [0.4, new echarts.graphic.LinearGradient(
            0, 1, 0, 0,
            [{
              offset: 0,
              color: 'rgb(13, 211, 97)'
            }, {
              offset: 0.8,
              color: 'rgb(235, 205, 6)'
            }]
          )],
          [0.7, 'rgb(235, 205, 6)'],
          [0.9, new echarts.graphic.LinearGradient(
            0, 1, 0, 0,
            [{
              offset: 0,
              color: 'red'
            }, {
              offset: 0.6,
              color: 'rgb(235, 205, 6)'
            }]
          )],
          [1, 'red']
        ],
        opacity: 0.9,
        width: 14,
      }
    },
    axisTick: {           // 刻度样式
      show: false,
      length: 8,
      //splitNumber: 7,
      lineStyle: {
        color: 'rgba(255, 255, 255, .6)',
        width: 1
      }
    },
    axisLabel: {
      show: true,
      distance: 6,
      textStyle: {
        color: 'rgba(255, 255, 255, .7)',
        fontSize: '9',
        fontWeight: 'bold'
      }
    },
    pointer: {
      show: true,
      width: 2,
      //length: '45%'
    },
    itemStyle: {
      normal: {
        //color: '#9bd6ff'
      }
    },
    title: {
      show: true,
      textStyle: {
        color: 'rgba(255, 255, 255, .6)',
        fontSize: '14'
      },
      offsetCenter:[0, 70]
    },
    splitLine: {        // 分割线样式
      show: false,
      length: 10,
      lineStyle: {
        color: 'rgba(0, 142, 255, 0.4)'
      }
    },
  }]
};
export const memoryUsageOptions = {
  tooltip: {
    formatter: '{b} : {c}%'
  },
  series: [{
    //name: 'Pressure',
    type: 'gauge',
    radius: '90%',
    center: ['50%', '50%'],
    startAngle: 220,
    endAngle: -40,
    splitNumber: 4,
    min: 0,
    max: 100,
    progress: {
      show: true
    },
    detail: {
      show: true,
      valueAnimation: true,
      formatter: '{value}%',
      offsetCenter: [0, 30],
      textStyle: {
        fontSize: 18,
        color: 'rgba(0, 199, 187, 1)'
      }
    },
    data: [{
      value: 80,
      name: '内存使用率',
    }],
    axisLine: {          // 坐标轴线
      show: true,
      lineStyle: {       // 属性lineStyle控制线条样式
        color: [
          [0.1, 'rgb(49, 219, 222)'],
          [0.4, new echarts.graphic.LinearGradient(
            0, 1, 0, 0,
            [{
              offset: 0,
              color: 'rgb(49, 219, 222)'
            }, {
              offset: 0.8,
              color: 'rgb(90, 177, 239)'
            }]
          )],
          [0.7, 'rgb(90, 177, 239)'],
          [0.9, new echarts.graphic.LinearGradient(
            0, 1, 0, 0,
            [{
              offset: 0,
              color: 'red'
            }, {
              offset: 0.6,
              color: 'rgb(90, 177, 239)'
            }]
          )],
          [1, 'red']
        ],
        opacity: 0.9,
        width: 14,
      }
    },
    axisTick: {           // 刻度样式
      show: 0,
      length: 8,
      //splitNumber: 7,
      lineStyle: {
        color: 'rgba(255, 255, 255, .6)',
        width: 1
      }
    },
    axisLabel: {
      show: true,
      distance: 6,
      textStyle: {
        color: 'rgba(255, 255, 255, .7)',
        fontSize: '9',
        fontWeight: 'bold'
      }
    },
    pointer: {
      show: true,
      width: 2,
      //length: '45%'
    },
    itemStyle: {
      normal: {
        //color: '#9bd6ff'
      }
    },
    title: {
      show: true,
      textStyle: {
        color: 'rgba(255, 255, 255, .6)',
        fontSize: '14'
      },
      offsetCenter:[0, 70]
    },
    splitLine: {        // 分割线样式
      show: false,
      length: 10,
      lineStyle: {
        color: 'rgba(0, 142, 255, 0.4)'
      }
    },
  }]
};
export const storageUsageOptions = {
  tooltip: {
    formatter: '{b} : {c}%'
  },
  series: [{
    //name: 'Pressure',
    type: 'gauge',
    radius: '90%',
    center: ['50%', '50%'],
    startAngle: 220,
    endAngle: -40,
    splitNumber: 4,
    min: 0,
    max: 100,
    progress: {
      show: true
    },
    detail: {
      show: true,
      valueAnimation: true,
      formatter: '{value}%',
      offsetCenter: [0, 30],
      textStyle: {
        fontSize: 18,
        color: 'rgba(0, 199, 187, 1)'
      }
    },
    data: [{
      value: 50,
      name: '存储使用率',
    }],
    axisLine: {          // 坐标轴线
      show: true,
      lineStyle: {       // 属性lineStyle控制线条样式
        color: [
          [0.1, 'rgb(49, 219, 222)'],
          [0.4, new echarts.graphic.LinearGradient(
            0, 1, 0, 0,
            [{
              offset: 0,
              color: 'rgb(49, 219, 222)'
            }, {
              offset: 0.8,
              color: 'rgb(90, 177, 239)'
            }]
          )],
          [0.7, 'rgb(90, 177, 239)'],
          [0.9, new echarts.graphic.LinearGradient(
            0, 1, 0, 0,
            [{
              offset: 0,
              color: 'red'
            }, {
              offset: 0.6,
              color: 'rgb(90, 177, 239)'
            }]
          )],
          [1, 'red']
        ],
        opacity: 0.9,
        width: 14,
      }
    },
    axisTick: {           // 刻度样式
      show: 0,
      length: 8,
      //splitNumber: 7,
      lineStyle: {
        color: 'rgba(255, 255, 255, .6)',
        width: 1
      }
    },
    axisLabel: {
      show: true,
      distance: 6,
      textStyle: {
        color: 'rgba(255, 255, 255, .7)',
        fontSize: '9',
        fontWeight: 'bold'
      }
    },
    pointer: {
      show: true,
      width: 2,
      //length: '45%'
    },
    itemStyle: {
      normal: {
        //color: '#9bd6ff'
      }
    },
    title: {
      show: true,
      textStyle: {
        color: 'rgba(255, 255, 255, .6)',
        fontSize: '14'
      },
      offsetCenter:[0, 70]
    },
    splitLine: {        // 分割线样式
      show: false,
      length: 10,
      lineStyle: {
        color: 'rgba(0, 142, 255, 0.4)'
      }
    },
  }]
};

/**
 * 数据资源类别画像
 */
export const dataResOptions = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {    // 坐标轴指示器,坐标轴触发有效
      type: 'shadow'  // 默认为直线,可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '2%',
    top: '10px',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,.1)",
          width: 1,
          type: "solid"
        }
      },
      axisLabel: {
        interval: 0,
        //rotate: 50,
        show: true,
        splitNumber: 15,
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: '12',
        },
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        //formatter: '{value} 个',
        show:true,
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: '12',
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,.1	)",
          width: 1,
          type: "solid"
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)",
        }
      }
    }
  ],
  series: [
    {
      //name: '数量',
      type: 'bar',
      barWidth: '35%',  // 柱子宽度
      barGap: 1,        // 柱子之间间距
      itemStyle: {
        normal: {
          color:'#2f89cf', /* #27d08a */
          opacity: 1,
          barBorderRadius: 5,
        }
      }
      //data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
};

/**
 * 用户状态统计
 */
// 总数
export const userStateOptionsTotal = {
  title: {
    show: true,
    text: "用户总量",
    subtext: "",
    bottom: "0%",
    left: 'center',
    textStyle: {
      color: 'rgba(255, 255, 255, .6)',
      fontWeight: 'normal',
      fontSize: '14'
    },
    padding: 5,
    itemGap: 10
  },
  tooltip: {
    trigger: 'item'
  },
  series: [{
    type: 'pie',
    radius: ['70%', '80%'],
    center: ['50%', '40%'],
    silent: false, // 控制hover动效
    color: '#0088cc',
    label: {
      normal: {
        show: true,
        position: 'center'
      }
    },
    data: [{
      value: 298+523,
      name: '总量',
      label: {
        normal: {
          formatter: 821 + '',
          textStyle: {
            fontSize: 20,
            color: '#ffffff',
          }
        }
      }
    }]
  }]
};
// 在线数
export const userStateOptionsOnline = {
  title: {
    show: true,
    text: "在线",
    subtext: "",
    bottom: "0%",
    left: 'center',
    textStyle: {
      color: 'rgba(255, 255, 255, .6)',
      fontWeight: 'normal',
      fontSize: '14'
    },
    padding: 5,
    itemGap: 10
  },
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      //name: '在线用户',
      type: 'pie',
      radius: ['70%', '80%'],
      center: ['50%', '42%'],
      color: '#62b62f',
      label: {
        normal: {
          position: 'center'
        }
      },
      percentPrecision: 2,
      data:
        [
          {
            value: 298,
            name: '在线用户',
            label: {
              normal: {
                formatter: 298 + '\n',
                textStyle: {
                  fontSize: 20,
                  color: '#fff',
                }
              }
            }
          },
          {
            value: 523,
            name: '离线用户',
            label: {
              normal: {
                formatter: function (params) {
                  return '\n\n占比' + Math.round(298 / (298+523) * 100) + '%'
                },
                textStyle: {
                  color: '#aaa',
                  fontSize: 12
                }
              }
            },
            itemStyle: {
              normal: {
                color: 'rgba(255, 255, 255, .2)'
              },
              emphasis: {
                color: '#fff',
                width: '5px'
              }
            },
          }
        ]
    }
  ]
};
// 冻结数
export const userStateOptionsFrozen = {
  title: {
    show: true,
    text: "冻结",
    subtext: "",
    bottom: "0%",
    left: 'center',
    textStyle: {
      color: 'rgba(255, 255, 255, .6)',
      fontWeight: 'normal',
      fontSize: '14'
    },
    padding: 5,
    itemGap: 10
  },
  tooltip: {
    trigger: 'item'
  },
  series: [{
    //name: '冻结状态',
    type: 'pie',
    radius: ['70%', '80%'],
    center: ['50%', '40%'],
    color: '#fccb00',
    label: {
      normal: {
        position: 'center'
      }
    },
    data:
      [
        {
          value: 21,
          name: '冻结状态',
          label: {
            normal: {
              formatter: 21 + '\n',
              textStyle: {
                fontSize: 20,
                color: '#fff',
              }
            }
          }
        },
        {
          value: 800,
          name: '正常状态',
          label: {
            normal: {
              formatter: function (params) {
                return '\n\n占比' + Math.round(21 / (800+21) * 100) + '%'
              },
              textStyle: {
                color: '#aaa',
                fontSize: 12
              }
            }
          },
          itemStyle: {
            normal: {
              color: 'rgba(255, 255, 255, .2)'
            },
            emphasis: {
              color: '#fff'
            }
          },
        }
      ]
  }]
};

/**
 * 系统运行状态
 */
export const sysOperationStateOptions = {

};


export default {
  serviceCategoryOptions,
  cpuUsageOptions,
  memoryUsageOptions,
  storageUsageOptions,
  dataResOptions,
  userStateOptionsTotal,
  userStateOptionsOnline,
  userStateOptionsFrozen,
  sysOperationStateOptions
}
