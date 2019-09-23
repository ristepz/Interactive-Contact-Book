<template>
  <div class="page">
    <h2 class="page-title">
      <i class="fas fa-user-friends"></i> All Contacts
    </h2>
    <div class="all-contacts">
      <template v-for="(contact, index) in contacts">
        <Card
          :contact="contact"
          :index="index"
          :key="`contact-${index}`"
          @on-contact-removed="removeCard"
        />
      </template>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Card from "../shared/Card";
export default {
  data() {
    return {
      contacts: []
    };
  },
  created() {
    axios
      .get("http://localhost:3300/all")
      .then(resp => {
        this.contacts = resp.data.contacts;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods:{
      removeCard(index){
          this.contacts.splice(index, 1);
      }
  },
  components: {
    Card
  }
};
</script>