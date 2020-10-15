<template>
  <div v-bind="attrs"></div>
</template>

<script>
export default {
  name: 'GridItem',

  props: {
    color: {
      type: String,
      default: 'blue',
      validator: (value) => ['blue', 'red', 'yellow', 'orange', 'green', 'teal'].includes(value)
    },

    index: {
      type: Number,
      default: 1
    },

    pattern: {
      type: String,
      default: '1'
    }
  },

  data(){
    return {
      blue: {
        light: ['blue00', 'blue10', 'blue20', 'blue30', 'blue40'],
        dark:  ['blue50', 'blue60', 'blue70']
      },
      red: {
        light: ['red00', 'red10', 'red20', 'red30', 'red40'],
        dark:  ['red50', 'red60', 'red70']
      },
      yellow: {
        light: ['yellow00', 'yellow10', 'yellow20', 'yellow30', 'yellow40'],
        dark:  ['yellow50', 'yellow60']
      },
      orange: {
        light: ['orange00', 'orange10', 'orange20', 'orange30', 'orange40'],
        dark:  ['orange50', 'orange60']
      },
      green: {
        light: ['green00', 'green10', 'green20', 'green30', 'green40'],
        dark:  ['green50', 'green60', 'green70']
      },
      teal: {
        light: ['teal00', 'teal10', 'teal20', 'teal30', 'teal40'],
        dark:  ['teal50', 'teal60', 'teal70']
      },
    }
  },

  computed: {
    attrs(){
      return {
        class: this.classes,
        first: this.theme.light,
        second: this.theme.dark
      }
    },

    classes(){
      return {
        'pattern-item': true,
        ['-pattern' + this.pattern]: true,
        ['-' + this.theme.dark]: true,
        ['-' + this.theme.light]: true,
        ['-index-' + this.index]: true
      }
    },

    theme(){
      var theme = this[this.color];
      var light = (Math.random() * theme.light.length) | 0;
      var dark = (Math.random() * theme.dark.length) | 0;

      light = theme.light[light];
      dark = theme.dark[dark];

      return {
        dark,
        light
      }
    }
  }
}
</script>