import { components } from '@pepper/pepper/dist/pepper-pepper-meta.esm.min.js'

export default {
  namespaced: true,

  state: () => ({
    components: components
  }),
  
  getters: {
    categories(state, getters) {
      let ret = [];
      let names = [];

      getters.components.forEach(c => {
        let i = names.indexOf(c.category);

        if (!names.includes(c.category)){
          names.push(c.category);
          ret.push({
            label: c.category,
            components: [c]
          })
        }
        else{
          ret[i].components.push(c)
        }
      });

      return ret;
    },
    
    components(state) {
      let keys = Object.keys(state.components)
      return keys.map(k => state.components[k])
    }
  },

  actions: {

  },

  mutations: {

  }
}