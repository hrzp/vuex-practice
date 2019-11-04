<template>
  <div>
    <h3>Global Production - B</h3>
    count: {{count}}
    <button @click="addToGlobal">Add to Global</button>
    <router-link to="/">Back to Home and See Resualt</router-link>|
  </div>
</template>

<script>
export default {
  methods: {
    addToGlobal() {
      this.$store.dispatch("doIncrement");
    }
  },
  computed: {
    count() {
      return this.$store.getters.counter;
    }
  }
};
</script>

<style>
</style>