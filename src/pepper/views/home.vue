<template>
  <main>
    <!-- TopBar -->
    <top-bar color="red" />
    
    <!-- header -->
    <nav-header 
      baseHref="pepper.home"
      logo="/statics/images/logo/pepper.svg"
      title="pepper" />

    <!-- Hero -->
    <hero />

    <!-- Footer -->
    <nav-footer />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import NavFooter from '@/components/navigations/footer'
import NavHeader from '@/components/navigations/header'
import TopBar from '@/components/topbar'
import Hero from '@/pepper/components/hero'

export default {
  name: 'PepperHome',

  components: {
    NavFooter,
    NavHeader,
    TopBar,
    Hero
  },

  computed: {
    ...mapGetters({
      modules: 'spices/modules'
    })
  }
}
</script>
