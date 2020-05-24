<template>
  <header class="header">
    <!-- TopBar -->
    <top-bar :color="color" />

    <!-- Content -->
    <div class="container">
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

      <div class="header__second">
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script>
import TopBar from '@/components/topbar'

export default {
  name: 'NavHeader',

  components: {
    TopBar
  },

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