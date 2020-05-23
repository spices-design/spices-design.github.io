<template>
  <div class="hero">
    <div class="container">
      <div class="hero__content">
        <h1 class="hero__title">A VueJS ecosystem for design system at work. It helps create modern distributed applications with all the pieces tied together.</h1>
        <p class="hero__description">From specifying your design token to creating a custom UI kit dedicated to your need Spices enforce consistency while promoting flexibility, all is yours to customize. </p>
        <p class="hero__description">A project by <a href="https://alexandremasy.com" target="_blank">Alexandre Masy</a></p>
      </div>
    </div>

    <pattern-grid />
  </div>
</template>

<script>
import PatternGrid from '@/components/pattern/grid'

export default {
  name: 'SpicesHero',

  components: {
    PatternGrid
  }
}
</script>