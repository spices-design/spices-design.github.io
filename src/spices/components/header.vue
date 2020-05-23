<template>
  <header class="header">
    <div class="container">
      <router-link class="header__first" :to="{ name:'spices.home' }">
        <img 
          class="header__logoglyph"
          src="/statics/images/logo/spices.svg" 
          alt="Spices Logo">

        <div class="header__logotype">spices</div>
      </router-link>

      <div class="header__second">
        <router-link class="header__cta" :to="{ name:'spices.about' }">About</router-link>
        <button class="header__cta">Modules</button>
      </div>
    </div>
  </header>
</template>
