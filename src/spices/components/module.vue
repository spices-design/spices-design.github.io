<template>
  <router-link
    class="module"
    :to="href">
    
    <header class="module__header">
      <img :src="illustration" />
    </header>

    <div class="module__body">
      <div class="module__group">
        <div class="module__title">{{ title }}</div>
        <div class="module__version">{{ version }}</div>
      </div>

      <div class="module__description">{{ description }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Module',

  props: {
    description: {
      type: String
    },

    href: {
      type: Object
    },

    illustration: {
      type: String
    },

    title: {
      type: String
    },

    version: {
      type: String
    }
  }
}
</script>