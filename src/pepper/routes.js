export default [
  {
    path: '/pepper',
    name: 'pepper.home',
    component: () => import('@/pepper/views/home.vue'),
    meta: {
      bodyClass: 'view-pepper-home'
    }
  }
]