<template>
  <footer class="footer">
    <div class="footer__body">
      <!-- First -->
      <div class="footer__first">
        <div class="footer__logos">
          <a href="//spices.local:8080">
            <img
              class="footer__logo"  
              src="/statics/images/logo/spices.svg" 
              alt="Spices Logo">
          </a>

          <span
            v-if="current" 
            class="footer__plus">+</span>

          <img 
            v-if="current"
            class="footer__logo" 
            :src="current.logo" 
            :alt="current.name" >
        </div>
        <p class="footer__copyright">Spices and all of its parts forms a research project lead by Alexandre Masy.  All the copyright belongs to the authors behind this poly ecosystem. </p>
      </div>

      <!-- Second -->
      <div
        v-if="others && current" 
        class="footer__second">
        <p class="footer__subtitle">In the same project</p>
        <ul class="footer__modules">
          <li
            v-for="m in others" 
            :key="m.name"
            class="footer__module">
            <a
              class="footer__link module"
              :href="m.homepage">

              <img 
                :alt="m.name" 
                class="module__illustration" 
                :src="m.logo" 
                />

              <span class="module__body">
                <span class="module__title">{{ m.name }}</span>
                <span class="module__description">{{ m.description }}</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer__footer">
      <p class="footer__legal">©{{ from }} - {{ to }} Alexandre Masy</p>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavFooter',

  computed: {
    ...mapGetters({
      current: 'spices/current',
      others: 'spices/others'
    }),

    from(){
      return 2015
    },

    to(){
      return new Date().getFullYear()
    }
  }
}
</script>