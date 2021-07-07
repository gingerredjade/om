/**
 * 大屏图表数据模拟 mockData
 * */
export default {
  serviceCategoryData: {
    seriesData: [
      {value: 40, name: 'Python服务'},
      {value: 38, name: 'AI算法服务'},
      {value: 32, name: '深度学习服务'},
      {value: 30, name: '实时数据服务'},
      {value: 28, name: '数据挖掘服务'},
      {value: 26, name: '机器学习服务'},
      {value: 18, name: '其他'}
    ],
    legendData: ""
  },
  cpuUsageDatas: {
    seriesData: 60,
    legendData: ""
  },
  memoryUsageDatas: {
    seriesData: 80,
    legendData: ""
  },
  storageUsageDatas: {
    seriesData: 50,
    legendData: ""
  },
  dataResDatas: {
    seriesData: [10, 52, 200, 334, 390, 530, 220, 45],
    legendData: "",
    xAxisData: ['文本', '二进制', '非结构化', '结构化', '半结构化', '手机端', 'PC端', '其他']
  }
};
