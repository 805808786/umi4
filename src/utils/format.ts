import { Toast } from 'antd-mobile';
// import { parse } from 'qs';

// todo import qs 报错
export function getPageQuery() {
  // return parse(window.location.href.split('?')[1]);
}

export function formatDataKeys(data: { [k: string]: any }) {
  const result: { [k: string]: any } = {};
  Object.keys(data).forEach((key) => {
    const newKey = key.charAt(0).toLowerCase() + key.slice(1);
    result[newKey] = data[key];
  });
  return result;
}

export function packResponseData(res: RES.response, throwErr?: boolean) {
  const resData = formatDataKeys(res);
  const { msg, code, totalCount, data } = resData;
  if (![8200, 2000].includes(code)) {
    if (msg) {
      if (throwErr) {
        Toast.show({
          icon: 'fail',
          content: msg,
        });
      }
    }
  }
  return { msg, code, totalCount, data };
}
