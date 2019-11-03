<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>counter: {{counter}}</h3>
    <IncreaseBtn />
  </div>
</template>

<script>
import { mapState } from "vuex";
import IncreaseBtn from "@/components/IncreaseBtn.vue";
export default {
  name: "HelloWorld",
  computed: {
    ...mapState({
      counter: state => state.count
    }),
    msg() {
      return this.$store.state.message;
    }
    // counter() {
    //   return this.$store.state.count;
    // }
  },
  components: {
    IncreaseBtn
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
