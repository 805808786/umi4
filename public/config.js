// 开发环境
const development = {
  BASEURL: 'https://bidev.gongshu.gov.cn', // 后端地址
};

// 生产环境
const production = {
  BASEURL: 'https://bidev.gongshu.gov.cn', // 后端地址
};

window.CONFIG = ['172.16.8.7', 'localhost'].includes(window.location.hostname)
  ? development
  : production;
