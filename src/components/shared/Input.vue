<template>
  <div class="inner-row">
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :id="id"
      @input="sendVal"
      autocomplete="off"
    />
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
    }
  },
  methods: {
    sendVal(e) {
      this.$emit("oninputreceived", { value: e.target.value, evt: e });
    }
  }
};
</script>