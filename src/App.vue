<template>
  <div id="app">
    <Card @oncardvalue="writeCardVal" />
    {{cardValue}}
  </div>
</template>

<script>
import Card from "./components/Card";
export default {
  name: "app",
  data() {
    return {
      cardValue: ''
    };
  },
  methods:{
    writeCardVal(v){
      this.cardValue = v;
    }
  },
  components: {
    Card
  }
};
</script>