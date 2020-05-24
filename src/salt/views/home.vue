<template>
  <main>
    <!-- header -->
    <nav-header 
      v-if="salt"
      baseHref="salt.home"
      child
      :logo="salt.logo"
      :title="salt.name">
      <router-link class="header__cta" :to="{ name:'salt.specification' }">Specification</router-link>
      <button class="header__cta">Tools</button>
    </nav-header>

    <!-- Footer -->
    <nav-footer />

  </main>
</template>

<script>
import { mapState } from 'vuex'

import NavHeader from '@/components/navigations/header'
import NavFooter from '@/components/navigations/footer'

export default {
  name: 'SaltHome',

  components: {
    NavFooter,
    NavHeader,
  },

  computed: {
    ...mapState({
      salt: state => state.spices.salt
    }),
  }
}
</script>