import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ToList.vue') },
      { path: 'about', component: () => import('pages/about.vue') }
    ]
  },
  {
    path:'/login',
    component:()=> import('pages/logIn.vue')

  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
