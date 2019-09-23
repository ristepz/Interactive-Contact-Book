<template>
  <div class="inner-row">
    <select @change="sendVal">
      <option value>{{placeholder}}</option>
      <option v-for="(opt, index) in data" 
      :selected="opt.label === value"
      :key="`option-${index}`"
      :value="opt.label">{{opt.label}}</option>
    </select>
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
    placeholder: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    sendVal(e) {
      this.$emit("oninputreceived", { value: e.target.value, evt: e });
    }
  }
};
</script>