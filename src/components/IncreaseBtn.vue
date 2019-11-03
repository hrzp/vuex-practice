<template>
  <div>
    <button @click="increase">Increase counter</button>
  </div>
</template>

<script>
export default {
  name: "IncreaseBtn",
  data() {
    return {};
  },
  methods: {
    increase() {
      this.$store.dispatch("doIncrement");
    }
  }
};
</script>

<style>
</style>