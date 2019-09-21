<template>
  <div>
    <h3>Enter title</h3>
    <input type="text" :value="val" @input="sendCardValue($event.target.value)" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    val: {
      type: String,
      default: ""
    }
  },
  methods: {
    sendCardValue(v) {
        this.$emit('oncardvalue', v);
    }
  }
};
</script>