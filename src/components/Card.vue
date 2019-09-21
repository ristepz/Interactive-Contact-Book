<template>
  <div>
    <h3>Enter title</h3>
    <input type="text" 
    ref="cardInput" 
    :value="val" 
    @input="sendCardValue($event.target.value)" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log("Component is created");
  },
  mounted() {
      console.log('Value is', this.$refs.cardInput);
  },
  destroyed(){
      console.log('Component is destroyed');
  },
  props: {
    val: {
      type: String,
      default: ""
    }
  },
  methods: {
    sendCardValue(v) {
      this.$emit("oncardvalue", v);
    }
  }
};
</script>