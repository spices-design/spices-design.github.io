<template>
  <div class="hero">
    <div class="hero__content">
      <h1 class="hero__title">An opiniated and feature-full component UI Kit to complement your UI logic.</h1>
      <p class="hero__description">All the components comes with a set of features and a DOM representation, but no styles. Optin to a theme to layout them all.</p>
      <p class="hero__description">A project by <a href="https://alexandremasy.com" target="_blank">Alexandre Masy</a></p>
    </div>

    <div class="hero__pattern">
      <pattern-line :height="9">
        <pattern-item color="orange" pattern="1" :index="9" />
      </pattern-line>

      <pattern-line :height="1">
        <pattern-item color="orange" pattern="1" :index="1" />
      </pattern-line>

      <pattern-line :height="7">
        <pattern-item color="oarange" pattern="3" :index="7" />
      </pattern-line>

      <pattern-line :height="3">
        <pattern-item color="orange" pattern="1" :index="3" />
      </pattern-line>

      <pattern-line :height="8">
        <pattern-item color="orange" pattern="1" :index="1" />
        <pattern-item color="orange" pattern="1" :index="4" />
        <pattern-item color="orange" pattern="1" :index="8" />
      </pattern-line>

      <pattern-line :height="6">
        <pattern-item color="orange" pattern="1" :index="2" />
        <pattern-item color="orange" pattern="3" :index="5" />
        <pattern-item color="orange" pattern="4" :index="6" />
      </pattern-line>
    </div>
  </div>
</template>

<script>
import PatternLine from '@/components/pattern/line'
import PatternItem from '@/components/pattern/item'

export default {
  name: 'PepperHero',

  components: {
    PatternItem,
    PatternLine,
  }
}
</script>