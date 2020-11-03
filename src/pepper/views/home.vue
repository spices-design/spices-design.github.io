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

    <!-- Components -->
    <section class="components">
      <header class="components__header">
        <h2 class="components__title">Components</h2>
        <h3 class="components__subtitle">Our collection of reusable elements. <br> Use or abuse them.</h3>
      </header>

      <article
        v-for="(category, i) in categories" 
        :key="i"
        class="components__category">
        <h4 class="components__category-title">{{ category.label }}</h4>

        <div class="components__list">
          <card-component 
            v-for="(component, j) in category.components"
            :key="j"
            :component="component"
          />
        </div>
      </article>
    </section>

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
import CardComponent from '@/pepper/components/ui/card-component'

export default {
  name: 'PepperHome',

  components: {
    CardComponent,
    NavFooter,
    NavHeader,
    TopBar,
    Hero
  },

  computed: {
    ...mapGetters({
      categories: 'pepper/categories',
      components: 'pepper/components'
    })
  }
}
</script>
