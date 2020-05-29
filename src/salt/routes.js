import Specs from './salt.json'

export default [
  {
    path: '/',
    name: 'salt.home',
    component: () => import('@/salt/views/home.vue'),
    meta: {
      bodyClass: 'view-salt-home'
    }
  },

  ...Specs.map( e => ({
    path: `/${e}`,
    name: e,
    component: () => import(`./specs/${e}.md`)
  }))
]