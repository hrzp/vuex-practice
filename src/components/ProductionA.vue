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
      this.$store.dispatch("a/doIncrement");
    }
  },
  computed: {
    count() {
      return this.$store.state.a.count;
    }
  }
};
</script>

<style>
</style>