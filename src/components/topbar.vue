<template>
  <div :class="classes"></div>
</template>

<script>
export default {
  name: 'TopBar',

  props: {
    color: {
      type: String,
      default: 'blue',
      values: ['red', 'orange', 'yellow', 'green', 'teal', 'blue'],
      validator: (value) => ['red', 'orange', 'yellow', 'green', 'teal', 'blue'].includes(value)
    }
  },

  computed: {
    classes(){
      return {
        'topbar': true,
        ['-' + this.color]: true
      }
    }
  }
}
</script>