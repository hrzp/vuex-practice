<template>
  <dir>
    <button @click="newItem">Create random item</button>
  </dir>
</template>

<script>
export default {
  methods: {
    newItem() {
      this.$store.dispatch("createNewItem");
    }
  }
};
</script>

<style>
</style>