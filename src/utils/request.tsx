import config from 'config';
import type { RequestConfig } from 'umi';

interface options {
  method: string;
  params: { [k: string]: any };
  data: { [k: string]: any };

  [k: string]: any;
}

export const requestConfig: RequestConfig = {
  timeout: 1000,
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },
  requestInterceptors: [
    (url: string, extendOptions?: options) => {
      let options = { ...extendOptions };
      const prefix = /^(http|https)/.test(url) ? '' : config.BASEURL;
      const { method = 'POST', data } = options;
      if (['GET', 'DELETE'].includes(method.toUpperCase())) {
        options.params = {
          ...data,
          ts: Date.now(),
        };
        options.data = {};
      }
      return { url: `${prefix}${url}`, options };
    },
  ],
  responseInterceptors: [
    [
      (response) => {
        const { code }: { code?: number } = response.data;
        console.log(response);
        console.log(code);
        // todo: 此处统一需要处理不同状态下的code
        return response;
      },
    ],
  ],
};
