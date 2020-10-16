<template>
  <a
    :class="classes"
    :href="href">
    
    <header class="card__header">
      <img class="card__illustration" :src="illustration" />
      <div class="card__cta">{{ cta }}</div>
    </header>

    <div class="card__body">
      <div class="card__title">{{ title }}</div>
      <div class="card__description">{{ description }}</div>
    </div>

    <div class="card__footer">
      <div class="card__cta">{{ cta }}</div>
      <div class="card__version">v{{ version }}</div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Card',

  props: {
    cta: {
      type: String,
      default: 'Explore'
    },

    description: {
      type: String
    },

    href: {
      type: String
    },

    illustration: {
      type: String
    },

    theme: {
      type: String,
    },

    title: {
      type: String
    },

    version: {
      type: String
    }
  },

  computed: {
    classes(){
      return {
        'card': true,
        ['-theme-' + this.theme]: true
      }
    }
  }
}
</script>