<template>
  <div class="inner-row">
    <div class="file-input">
      <input type="file" :id="id ? id : `upload-image-${_uid}`" @change="readFile" />
      <label :for="id ? id : `upload-image-${_uid}`">
        <i class="fas fa-cloud-upload-alt"></i>
        {{placeholder}}
      </label>
      <div class="temp-img" v-if="tmpImage">
        <img :src="tmpImage" :style="{width: 'auto', height: '50px'}" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tmpImage: null,
      allowedTypes: ["image/jpeg", "image/jpg", "image/png", "image/gif"]
    };
  },
  created() {},
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    }
  },
  methods: {
    sendVal(e) {
      this.$emit("oninputreceived", { value: e.target.value, evt: e });
    },
    readFile(e) {
      if (!window.FileReader) {
        alert("HTML5 FileReader Api is not supported in your browser.");
        return;
      }
      if (e.target.files[0]) {
        const file = e.target.files[0];
        if (this.allowedTypes.indexOf(file.type) === -1) {
          alert("File type is not supported");
          this.tmpImage = null;
          return;
        }
        this.tmpImage = URL.createObjectURL(file);
        const reader = new FileReader();
        reader.addEventListener("load", evt => {
          this.$emit('oninputreceived', { value: reader.result, evt: e });
        });
        reader.readAsDataURL(file);
      } else {
        this.tmpImage = null;
      }
    }
  }
};
</script>