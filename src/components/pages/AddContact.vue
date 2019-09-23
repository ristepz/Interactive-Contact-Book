<template>
  <div class="page">
    <h2 class="page-title">
      <i class="fas fa-user-cog"></i> Add New Contact
    </h2>
    <div class="add-contact-form">
      <component
        v-for="(field, name, index) in formData"
        :key="`${name}-${index}`"
        :type="field.type || 'text'"
        :value="field.value"
        :id="name"
        :placeholder="field.placeholder"
        :expanded="field.expanded || false"
        @oninputreceived="(data) => processInput(data, name)"
        :is="field.is"
        :data="field.data || []"
      />
      <div class="inner-row full-width">
        <input type="button" value="Save Contact" @click="saveContact" />
        <span class="contact-success" v-if="success">
          <i class="fas fa-check-circle"></i>
          Contact created succsessfully.
        </span>
        <span class="contact-error" v-if="error">
          <i class="fas fa-times-circle"></i>
          {{error}}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import SelectBox from "../shared/SelectBox";
import UploadImage from "../shared/UploadImage";
export default {
  data() {
    return {
      countriesList: [],
      formData: {
        firstName: { placeholder: "First Name", value: "", is: "Input" },
        lastName: { placeholder: "Last Name", value: "", is: "Input" },
        email: { placeholder: "Email", value: "", is: "Input", type: "email" },
        address: { placeholder: "Address", value: "", is: "Input" },
        company: { placeholder: "Company", value: "", is: "Input" },
        proffession: { placeholder: "Proffession", value: "", is: "Input" },
        homePhone: { placeholder: "Home Phone", value: "", is: "Input" },
        mobilePhone: { placeholder: "Mobile Phone", value: "", is: "Input" },
        country: {placeholder: "Country", value: "Armenia", is: "SelectBox", data: [] },
        uploadImage: { placeholder: "Upload Image", value: "", is: "UploadImage" },
        description: { placeholder: "Description", value: "", is: "TextArea", expanded: true }
      },
      success: false,
      error: ''
    };
  },
  created(){
    axios.get('http://localhost:8080/countries.json').then((resp)=>{
     this.formData.country.data = resp.data;
    }).catch((err) => {
      console.log(err);
    })
  },
  methods: {
    processInput(data, name) {
      this.formData[name].value = data.value;
    },
    saveContact(){
      this.success = false;
      this.error = '';
      let params = {};
      for(let name in this.formData){
        params[name] = this.formData[name].value;
      }
      console.log(params);
      axios.post('http://localhost:3300/addContact', params).then((resp)=>{
        if(resp.data.success){
          this.success = true;
          setTimeout(()=>{
            this.success = false;
          }, 3000);
        }
      }).catch((err) =>{
        this.error = err;
      })

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