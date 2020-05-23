<template>
  <main>
    <!-- header -->
    <nav-header />

    <!-- Hero -->
    <hero />

    <!-- Modules -->
    <div class="container modules">
      <div class="grid">
        <card 
          v-for="m in modules"
          :description="m.description"
          :href="m.href"
          :key="m.title"
          :illustration="m.illustration"
          :title="m.title"
          :version="m.version"
          />
      </div>
    </div>
  </main>
</template>

<script>
import NavHeader from '@/spices/components/header'
import Card from '@/spices/components/card'
import Hero from '@/spices/components/hero'

export default {
  name: 'SpicesHome',

  components: {
    Card,
    Hero,
    NavHeader,
  },

  data(){
    return {
      modules: [
        {
          title: 'Salt',
          description: 'A design token specification and toolset to enforce consistency in your application with flexibility at heart.',
          version: '3.1.18',
          illustration: '/statics/images/logo/salt.svg',
          href: 'https://salt.spices.design'
        },
        {
          title: 'Pepper',
          description: 'an opiniated and feature-full renderless component UiKit to bootstrap your UI logic.',
          version: '1.9.5',
          illustration: '/statics/images/logo/pepper.svg',
          href: 'https://pepper.spices.design'
        }
      ]
    }
  }
}
</script>
