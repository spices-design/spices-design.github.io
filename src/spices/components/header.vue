<template>
  <header class="header">
    <div class="container">
      <div class="header__first">
        <router-link :to="{ name:'spices.home' }">
          <img 
            class="header__logoglyph"
            src="/statics/images/logo/spices.svg" 
            alt="Spices Logo">

          <div class="header__logotype">spices</div>
        </router-link>
      </div>

      <div class="header__second">
        <router-link :to="{ name:'spices.about' }">About</router-link>
        <button>Modules</button>
      </div>
    </div>
  </header>
</template>