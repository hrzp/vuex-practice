import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const productionA = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment: state => {
      state.count++;
    }
  },
  actions: {
    doIncrement: context => {
      context.commit("increment");
    }
  },
  getters: {
    counter: state => {
      return state.count;
    }
  }
};

export default new Vuex.Store({
  modules: {
    a: productionA
  },
  state: {
    message: "Hello from Vuex",
    count: 0,
    randomItems: []
  },
  mutations: {
    increment: state => {
      state.count++;
    },
    newItem: state => {
      state.randomItems.push({
        id: parseInt(Math.random() * 10000),
        title: Math.random()
          .toString(36)
          .substring(2, 15)
          .toUpperCase()
      });
    },
    removeEvenItems: state => {
      state.randomItems = state.randomItems.filter(item => {
        return item.id % 2 != 0;
      });
    }
  },
  actions: {
    doIncrement: context => {
      context.commit("increment");
    },
    createNewItem: context => {
      context.commit("newItem");
    },
    removeEvenItems: context => {
      context.commit("removeEvenItems");
    }
  },
  getters: {
    items: state => {
      return state.randomItems;
    },
    counter: state => {
      return state.count;
    }
  }
});
