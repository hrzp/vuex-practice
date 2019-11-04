<template>
  <div>
    <h3>Production A</h3>
    count: {{count}}
    <button @click="add">Add</button>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.count++;
    }
  },
  computed: {
    count: {
      get() {
        return this.$store.getters["a/counter"];
      },
      set() {
        this.$store.dispatch("a/doIncrement");
      }
    }
  }
};
</script>

<style>
</style>