<template>
  <main>
    <!-- TopBar -->
    <top-bar />

    <!-- header -->
    <nav-header />

    <!-- Hero -->
    <hero />

    <!-- Modules -->
    <div class="container modules">
      <div class="grid">
        <card 
          v-for="m in modules"
          :cta="m.cta"
          :description="m.description"
          :href="m.href"
          :key="m.title"
          :illustration="m.illustration"
          :title="m.title"
          :version="m.version"
          />
      </div>
    </div>

    <!-- Footer -->
    <nav-footer />
  </main>
</template>

<script>
import TopBar from '@/components/topbar'
import Card from '@/spices/components/card'
import Hero from '@/spices/components/hero'
import NavFooter from '@/spices/components/footer'
import NavHeader from '@/spices/components/header'

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
      modules: [
        {
          title: 'Salt',
          description: 'A design token specification and toolset to enforce consistency in your application with flexibility at heart.',
          version: '3.1.18',
          illustration: '/statics/images/logo/salt.svg',
          href: 'http://salt.spices.local:8080',
          cta: 'Get Salty!'
        },
        {
          title: 'Pepper',
          description: 'An opiniated and feature-full renderless component UiKit to bootstrap your UI logic.',
          version: '1.9.5',
          illustration: '/statics/images/logo/pepper.svg',
          href: 'http://pepper.spices.local:8080',
          cta: 'Go go go!'
        },
        {
          title: 'Ginger',
          description: 'A minimalist ESM module loader and handler. Allows you to create distributed web application.',
          version: '1.3.0',
          illustration: '/statics/images/logo/ginger.svg',
          href: 'http://ginger.spices.local:8080',
          cta: 'Load me up!'
        }
      ]
    }
  }
}
</script>
