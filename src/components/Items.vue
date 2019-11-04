<template>
  <div>
    <button @click="removeEvenItems">Remove even id</button>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <span>id: {{item.id}}</span>
        |
        <span>title: {{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    removeEvenItems() {
      this.$store.dispatch("removeEvenItems");
    }
  },
  computed: {
    items() {
      return this.$store.getters.items;
    }
  }
};
</script>

<style scoped>
</style>