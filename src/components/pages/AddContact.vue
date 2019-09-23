<template>
  <div class="page">
    <h2 class="page-title">
      <i class="fas fa-user-cog"></i> Add New Contact
    </h2>
    <div>
      <component
        v-for="(field, name, index) in formData"
        :key="`${name}-${index}`"
        :type="field.type || 'text'"
        :value="field.value"
        :id="name"
        :placeholder="field.placeholder"
        :expanded="field.expanded || false"
        @oninputreceived="processInput"
        :is="field.is"
      />
      <div class="inner-row">
        <input type="button" value="Save Contact" />
      </div>
    </div>
  </div>
</template>
<script>
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import SelectBox from "../shared/SelectBox";
import UploadImage from "../shared/UploadImage";
export default {
  data() {
    return {
      formData: {
        firstName: { placeholder: "First Name", value: "", is: "Input" },
        lastName: { placeholder: "Last Name", value: "", is: "Input" },
        email: { placeholder: "Email", value: "", is: "Input", type: "email" },
        address: { placeholder: "Address", value: "", is: "Input" },
        company: { placeholder: "Company", value: "", is: "Input" },
        proffession: { placeholder: "Proffession", value: "", is: "Input" },
        homePhone: { placeholder: "Home Phone", value: "", is: "Input" },
        mobilePhone: { placeholder: "Mobile Phone", value: "", is: "Input" },
        country: {
          placeholder: "Country",
          value: "",
          is: "SelectBox",
          data: []
        },
        uploadImage: {
          placeholder: "Upload Image",
          value: "",
          is: "UploadImage"
        },
        description: { placeholder: "Description", value: "", is: "TextArea", expanded: true }
      }
    };
  },
  methods: {
    processInput(data) {
      console.log(data.value);
    }
  },
  components: {
    Input,
    TextArea,
    SelectBox,
    UploadImage
  }
};
</script>