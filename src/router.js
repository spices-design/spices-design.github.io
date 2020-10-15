import Vue from 'vue'
import VueRouter from 'vue-router'
import VueBodyClass from 'vue-body-class'

import getCurrentModule from '@/helpers/module'

// import PepperRoutes from '@/pepper/routes'
import SpicesRoutes from '@/spices/routes'
// import SaltRoutes from '@/salt/routes'

//////////////////////////////////////////////////////////////////
// Domain setup

const current = getCurrentModule();
let domainRoutes;
switch(current){
  // case 'salt':
  //   domainRoutes = SaltRoutes;
  //   break;
  // case 'pepper':
  //   domainRoutes = PepperRoutes;
  //   break;
  default:
    domainRoutes = SpicesRoutes;
    break;
}

//////////////////////////////////////////////////////////////////

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: domainRoutes
});

export default router

//////////////////////////////////////////////////////////////////

const vbc = new VueBodyClass(domainRoutes);
router.beforeEach((to, from, next) => { vbc.guard(to, next) });
