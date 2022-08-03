export default [
  {
    path: '/',
    component: '@/layouts',
    routes: [
      {
        path: '/',
        redirect: '/gridPortrait',
      }, {
        path: '/gridPortrait',
        component: '@/pages/gridPortrait/_layout',
        title: '网格画像',
        routes: [
          {
            path: '/gridPortrait',
            component: '@/pages/gridPortrait',
          },
          {
            path: '/gridPortrait/community/:id',
            component: '@/pages/gridPortrait/community',
          },
          {
            path: '/gridPortrait/grid/:id',
            component: '@/pages/gridPortrait/grid',
          },
          {
            path: '/gridPortrait/residence/:id',
            component: '@/pages/gridPortrait/residence',
          },
          {
            path: '/gridPortrait/building/:id',
            component: '@/pages/gridPortrait/building',
          },
          {
            path: '/gridPortrait/entrance/:id',
            component: '@/pages/gridPortrait/entrance',
          },
        ],
      },
    ],
  },
  {
    path: '/404',
    component: '@/pages/404',
    title: '404',
  },
  {
    path: '*',
    redirect: '/404',
  },
];

