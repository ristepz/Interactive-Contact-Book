<template>
  <div class="inner-row">
    <select>
      <option value>{{placeholder}}</option>
      <option v-for="(country, index) in data" 
      :selected="country.label === value"
      :key="`option-${index}`"
      @change="sendVal"
      :value="country.label">{{country.label}}</option>
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