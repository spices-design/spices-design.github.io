<template>
  <div class="pattern-grid">
    <div
      v-for="y in ny"
      :key="y" 
      class="pattern-grid__row">

      <div
        v-for="x in nx"
        :key="x * y"
        :data-x="x"
        :data-y="y" 
        class="pattern-grid__item"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'PatternGrid',

  props: {
    nx: {
      type: Number,
      default: 10
    },

    ny: {
      type: Number,
      default: 8
    },

    theme: {
      type: String,
      default: 'random'
    }
  },

  data(){
    return {
      displayed: [],
      matrix: [
        [1,1,1,2,2,2,2,2,2,2],
        [1,0,0,2,1,1,1,2,3,2],
        [0,0,0,2,1,5,2,3,2,2],
        [0,0,0,1,6,6,8,5,5,2],
        [0,0,0,2,7,8,9,8,5,2],
        [1,0,1,8,9,9,9,9,8,2],
        [2,1,1,1,7,5,6,5,9,2],
        [1,2,2,2,3,4,7,4,3,2],
        [2,1,2,2,3,2,2,2,2,2]
      ],

      blue: {
        light: ['blue00', 'blue10', 'blue20', 'blue30', 'blue40', 'blue50'],
        dark:  ['blue60', 'blue70', 'blue80', 'blue90']
      },
      red: {
        light: ['red00', 'red10', 'red20', 'red30', 'red40', 'red50'],
        dark:  ['red60', 'red70', 'red80', 'red90']
      },
      yellow: {
        light: ['yellow00', 'yellow10', 'yellow20', 'yellow30', 'yellow40', 'yellow50'],
        dark:  ['yellow60', 'yellow70', 'yellow80', 'yellow90']
      },
      orange: {
        light: ['orange00', 'orange10', 'orange20', 'orange30', 'orange40', 'orange50'],
        dark:  ['orange60', 'orange70', 'orange80', 'orange90']
      },
      green: {
        light: ['green00', 'green10', 'green20', 'green30', 'green40', 'green50'],
        dark:  ['green60', 'green70', 'green80', 'green90']
      },
      teal: {
        light: ['teal00', 'teal10', 'teal20', 'teal30', 'teal40', 'teal50'],
        dark:  ['teal60', 'teal70', 'teal80', 'teal90']
      },

    }
  },

  computed: {
    themes(){
      return [this.blue, this.red, this.yellow, this.orange, this.green, this.teal];
    },
    
    nThemes(){
      return this.themes.length
    }
  },

  methods: {
    reset(){
      let _nx = this.nx + 1;
      let _ny = this.ny + 1;
      this.displayed = [];

      let children = document.getElementsByClassName('pattern-grid__item');
      children.forEach( e => this.setupChild(e) );
    },

    setupChild(child){
      // Display probability
      var x = child.getAttribute('data-x') - 1;
      var y = child.getAttribute('data-y') - 1;
      var r = this.matrix[y][x];
      var f = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

      if (r < f)
      {
        child.classList.add('invisible');
      }
      else
      {
        child.classList.add('-transitionin');
        this.displayed.push(child);
      }

      // Theme
      var theme = this.themes[(Math.random() * this.nThemes) | 0];
      var light = (Math.random() * theme.light.length) | 0;
      var dark = (Math.random() * theme.dark.length) | 0;

      light = theme.light[light];
      dark = theme.dark[dark];

      child.setAttribute('first', light);
      child.setAttribute('second', dark);

      // Pattern
      var p = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
      child.classList.add('p'+p);
      
      // Animation
      child.classList.add('-animate');
      child.classList.add('-transitionin');
    }
  },

  mounted(){
    this.reset();
  }
}
</script>