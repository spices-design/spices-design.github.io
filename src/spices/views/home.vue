<template>
  <main>
    <!-- TopBar -->
    <top-bar />
    
    <!-- header -->
    <nav-header 
      baseHref="spices.home"
      logo="/statics/images/logo/spices.svg"
      title="spices" />

    <!-- Hero -->
    <hero />

    <!-- Modules -->
    <div v-if="false" class="container modules">
      <div class="grid">
        <card 
          v-for="m in modules"
          :cta="m.cta"
          :description="m.description"
          :href="m.homepage"
          :key="m.name"
          :illustration="m.logo"
          :title="m.name"
          :version="m.version"
          />
      </div>
    </div>

    <!-- Footer -->
    <nav-footer />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import Card from '@/spices/components/card'
import Hero from '@/spices/components/hero'
import NavFooter from '@/components/navigations/footer'
import NavHeader from '@/components/navigations/header'
import TopBar from '@/components/topbar'

export default {
  name: 'SpicesHome',

  components: {
    Card,
    Hero,
    NavFooter,
    NavHeader,
    TopBar
  },

  data(){
    return {
    
    }
  },

  computed: {
    ...mapGetters({
      modules: 'spices/modules'
    })
  }
}
</script>
