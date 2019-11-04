<template>
  <div>
    <h1>Our Productes</h1>
    <ProductionA />
    <hr />
    <ProductionB />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductionA from "@/components/ProductionA.vue";
import ProductionB from "@/components/ProductionB.vue";

export default {
  name: "production",
  components: {
    ProductionA,
    ProductionB
  }
};
</script>