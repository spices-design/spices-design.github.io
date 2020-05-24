import getCurrentModule from '@/helpers/module'

export default { 
  namespaced: true,
  state: {
    salt: {
      description: 'A design token specification and toolset to enforce consistency in your application with flexibility at heart.',
      homepage: 'http://salt.spices.local:8080',
      logo: '/statics/images/logo/salt.svg',
      name: 'salt',
      version: '3.1.18',
    },
    pepper: {
      description: 'A minimalist ESM module loader and handler. Allows you to create distributed web application.',
      homepage: 'http://pepper.spices.local:8080',
      logo: '/statics/images/logo/pepper.svg',
      name: 'pepper',
      version: '1.9.5',
    },
    ginger: {
      description: 'A minimalist ESM module loader and handler. Allows you to create distributed web application.',
      homepage: 'http://ginger.spices.local:8080',
      logo: '/statics/images/logo/ginger.svg',
      name: 'ginger',
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
    modules: state => [state.salt, state.pepper, state.ginger],
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