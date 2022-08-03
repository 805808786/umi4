import { Toast } from 'antd-mobile';

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
      console.error(msg);
      throwErr && Toast.show({
        icon: 'fail',
        content: msg,
      });
    }
  }
  return { msg, code, totalCount, data };
}
