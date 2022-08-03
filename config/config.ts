import { defineConfig } from '@umijs/max';
import pxToViewport from 'postcss-px-to-viewport';
import routes from './router.config';

export default defineConfig({
  title: '网格画像',
  model: {},
  request: {
    dataField: '',
  },
  favicons: ['/favicon.ico'],
  headScripts: [`/config.js`],
  externals: {
    config: 'window.CONFIG',
  },
  routes,
  extraPostCSSPlugins: [
    pxToViewport({
      viewportWidth: 375, // 根据设计稿修改
      include: [/\/src\//],
    }),
  ],
  npmClient: 'yarn',
});
