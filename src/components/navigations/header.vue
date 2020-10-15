<template>
  <header class="header">
    <!-- First -->
    <router-link class="header__first" :to="{ name: baseHref }">
      <img 
        class="header__logoglyph"
        :src="logo" 
        :alt="altLogo" />

      <div class="header__title">
        <div class="header__logoparent" v-if="child">spices</div>
        <div class="header__logotype">{{ title }}</div>
      </div>
    </router-link>

    <!-- Second -->
    <div class="header__second">
      <button class="header__burger">
        <div class="header__burger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  </header>
</template>

<script>

export default {
  name: 'NavHeader',

  props: {

    baseHref: {
      type: String,
      required: true
    },

    child: {
      type: Boolean,
      default: false
    },

    color: {
      type: String,
      default: 'blue'
    },

    logo: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    }
  },

  computed: {
    altLogo() {
      return this.title + ' Logo';
    }
  }
}
</script>