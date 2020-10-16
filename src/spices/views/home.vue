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
    <div class="modules">
      <div class="modules__intro">
        <h2 class="modules__title">Modulate</h2>
        <h3 class="modules__subtitle">Opt in base only</h3>
        <p class="modules__description">Spices won’t tell you what you need to do or how to do it. We provide the tool for you to build your own reality. Opt in for as many or as few module as you want.</p>
      </div>

      <div class="modules__slider">
        <div class="modules__slider-inner">
          <card 
            v-for="m in modules"
            :cta="m.cta"
            :description="m.description"
            :href="m.homepage"
            :key="m.package"
            :illustration="m.logo.light"
            :theme="m.color"
            :title="m.package"
            :version="m.version"
            />
        </div>
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
