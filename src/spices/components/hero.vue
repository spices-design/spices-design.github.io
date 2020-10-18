<template>
  <div class="hero">
    <div class="hero__content">
      <h1 class="hero__title">A VueJS ecosystem for design system at work. It helps create modern distributed applications with all the pieces tied together.</h1>
      <p class="hero__description">From specifying your design token to creating a custom UI kit dedicated to your need, Spices enforce consistency while promoting flexibility, all is yours to customize. </p>
      <p class="hero__description">A project by <a href="https://alexandremasy.com" target="_blank">Alexandre Masy</a></p>
      <p class="hero__note">PS: I’m not selling anything, I built this for my team and my personnal usage.</p>
    </div>

    <div class="hero__pattern">
      <pattern-line :height="9">
        <pattern-item color="yellow" pattern="1" :index="9" />
      </pattern-line>

      <pattern-line :height="1">
        <pattern-item color="orange" pattern="1" :index="1" />
      </pattern-line>

      <pattern-line :height="7">
        <pattern-item color="yellow" pattern="3" :index="7" />
      </pattern-line>

      <pattern-line :height="3">
        <pattern-item color="red" pattern="1" :index="3" />
      </pattern-line>

      <pattern-line :height="8">
        <pattern-item color="blue" pattern="1" :index="1" />
        <pattern-item color="blue" pattern="1" :index="4" />
        <pattern-item color="orange" pattern="1" :index="8" />
      </pattern-line>

      <pattern-line :height="6">
        <pattern-item color="red" pattern="1" :index="2" />
        <pattern-item color="teal" pattern="3" :index="5" />
        <pattern-item color="blue" pattern="4" :index="6" />
      </pattern-line>
    </div>
  </div>
</template>

<script>
import PatternLine from '@/components/pattern/line'
import PatternItem from '@/components/pattern/item'

export default {
  name: 'SpicesHero',

  components: {
    PatternItem,
    PatternLine,
  }
}
</script>