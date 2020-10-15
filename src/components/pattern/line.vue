<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PatternLine',

  props: {
    height: {
      type: Number,
      default: 1
    }
  },

  computed: {
    classes(){
      return {
        'pattern-line': true,

        ['-height-' + this.height]: true
      }
    }
  }
}
</script>