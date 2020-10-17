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

    <!-- Values -->
    <section class="values">
      <div class="values__intro">
        <div class="values__intro-inner">
          <h2 class="values__title">Values</h2>
          <h3 class="values__subtitle">Stand for ideas</h3>
          <p class="values__description">Spices won’t tell you what you need to do or how to do it. We provide the tool to help you build your own reality. Opt in for as many or as few module as you want. Let us know if you like it or not. </p>
        </div>
      </div>

      <div class="values__items">
        <article class="values__item">
          <div class="values__title">Universality</div>
          <div class="values__description">It is the core of the World Wide Web, our solution should embrace it and build systems that are available to, and accessible by, everyone;</div>
        </article>
        <article class="values__item">
          <div class="values__title">Performance</div>
          <div class="values__description">We strive towards making our solutions as fast as possible in terms of both network footprint and the time it takes to become interactive.</div>
        </article>
        <article class="values__item">
          <div class="values__title">Modularity</div>
          <div class="values__description">Reduce the complexity and improve our system’s reusability by breaking it into small and easy to consume parts.</div>
        </article>
        <article class="values__item">
          <div class="values__title">Consistency</div>
          <div class="values__description">From consistency comes clarity thus making our system more predictable and efficient to use. Users shouldn’t have to wonder whether different actions or terminology mean the same things.</div>
        </article>
      </div>
    </section>

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
