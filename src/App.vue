<template>
  <div id="app">
    <Card @oncardvalue="writeCardVal" :val="cardValue" v-if="showCard" />
    {{cardValue}}
    <button @click="showCard = false">Set Card Value</button>
  </div>
</template>

<script>
import Card from "./components/Card";
export default {
  name: "app",
  data() {
    return {
      cardValue: "",
      showCard: true
    };
  },
  methods: {
    writeCardVal(v) {
      this.cardValue = v;
    }
  },
  components: {
    Card
  }
};
</script>