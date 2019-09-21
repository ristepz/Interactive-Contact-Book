<template>
  <div :class="['inner-row', {'full-width': expanded}]">
    <textarea 
    :placeholder="placeholder" 
    :id="id" 
    @input="sendVal"
    :expanded="expanded" v-text="value"></textarea>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      required: true
    },
    expanded: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    sendVal(e) {
      this.$emit("oninputreceived", { value: e.target.value, evt: e });
    }
  }
};
</script>