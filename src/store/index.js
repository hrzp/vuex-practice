import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
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
  modules: {},
  getters: {
    items: state => {
      return state.randomItems;
    }
  }
});
