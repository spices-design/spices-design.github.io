export default [
  {
    path: '/',
    name: 'spices.home',
    component: () => import('@/spices/views/home.vue'),
    meta: {
      bodyClass: 'view-spices-home'
    }
  }
]