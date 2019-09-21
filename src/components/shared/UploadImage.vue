<template>
  <div class="inner-row">
    <div class="file-input">
      <input type="file" :id="id ? id : `upload-image-${_uid}`" />
      <label :for="`upload-image-${_uid}`">
        <i class="fas fa-cloud-upload-alt"></i>
        {{placeholder}}
      </label>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ''
    }
  },
  methods: {
    sendVal(e) {
      this.$emit("oninputreceived", { value: e.target.value, evt: e });
    }
  }
};
</script>