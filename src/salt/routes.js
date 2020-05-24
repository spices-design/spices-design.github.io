export default [
  {
    path: '/',
    name: 'salt.home',
    component: () => import('@/salt/views/home.vue'),
    meta: {
      bodyClass: 'view-salt-home'
    }
  }
]