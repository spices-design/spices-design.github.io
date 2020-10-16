import getCurrentModule from '@/helpers/module'

export default { 
  namespaced: true,
  state: {
    salt: {
      color: 'blue',
      description: 'A design token specification and toolset to enforce consistency in your application with flexibility at heart.',
      homepage: 'salt.home',
      logo: {
        dark: '/statics/images/logo/salt.svg',
        light: '/statics/images/logo/salt-light.svg',
      },
      name: 'salt',
      package: '@spices/salt',
      version: '3.1.18',
    },
    pepper: {
      color: 'red',
      description: 'A minimalist ESM module loader and handler. Allows you to create distributed web application.',
      homepage: 'pepper.home',
      logo: {
        dark: '/statics/images/logo/pepper.svg',
        light: '/statics/images/logo/pepper-light.svg',
      },
      name: 'pepper',
      package: '@spices/pepper',
      version: '1.9.5',
    },
    ginger: {
      color: 'yellow',
      description: 'A minimalist ESM module loader and handler. Allows you to create distributed web application.',
      homepage: 'ginger.home',
      logo: {
        dark: '/statics/images/logo/ginger.svg',
        light: '/statics/images/logo/ginger-light.svg',
      },
      name: 'ginger',
      package: '@spices/ginger',
      version: '0.1.35',
    },
    basil: {
      color: 'green',
      description: 'A minimalist ESM module loader and handler. Allows you to create distributed web application.',
      homepage: 'basil.home',
      logo: {
        dark: '/statics/images/logo/ginger.svg',
        light: '/statics/images/logo/ginger-light.svg',
      },
      name: 'basil',
      package: '@spices/basil',
      version: '0.1.35',
    },
  },

  getters: {
    current: state => {
      let ret = null;
      let m = getCurrentModule();
      switch (m) {
        case 'salt':
          ret = state.salt;
          break;
        case 'pepper':
          ret = state.pepper;
          break;
        case 'ginger':
          ret = state.ginger;
          break;
      }

      return ret;
    },
    modules: state => [state.salt, state.pepper, state.ginger, state.basil],
    others: (state, getters) => {
      return getters.modules.filter( m => m !== getters.current )
    }
  },

  actions: {

  },

  mutations: {
    setCurrentByName(state, name){
      let c = null;
      switch (name) {
        case 'salt':
          c = state.salt;
          break;
        case 'pepper':
          c = state.pepper;
          break;
        case 'ginger':
          c = state.ginger;
          break;
      }

      if (c){
        state.current = c;
      }
    }
  }
}