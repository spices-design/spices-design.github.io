import Vue from 'vue'
import VueRouter from 'vue-router'

import PepperRoutes from '@/pepper/routes'
import SpicesRoutes from '@/spices/routes'
import SaltRoutes from '@/salt/routes'

//////////////////////////////////////////////////////////////////
// Domain setup
// 
// Domains list:
// - spices.(local|design)
// - pepper.spices.(local|design)
// - salt.spices.(local|design)

const host = window.location.host.split('.');
let domainRoutes = SpicesRoutes;
if (host.length === 3){
  if (host[0] == 'pepper'){
    domainRoutes = PepperRoutes;
  } 
  if (host[0] == 'salt'){
    domainRoutes = SaltRoutes
  }
}

//////////////////////////////////////////////////////////////////

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: domainRoutes
})

export default router
