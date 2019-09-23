<template>
  <div class="contact-card">
    <div class="contact-card-inner" @click="navigate">
      <div class="contact-card-front">
        <figure>
          <img :src="contact.image" width="300" height="450" />
          <figcaption>{{contact.firstName}} {{contact.lastName}}</figcaption>
        </figure>
      </div>
      <div class="contact-card-back">
        <h3>Contact Info</h3>
        <ul>
          <li>
            <i class="fas fa-user-alt"></i>
            {{contact.firstName}} {{contact.lastName}}
          </li>
          <li>
            <i class="fas fa-envelope"></i>
            {{contact.email}}
          </li>
          <li>
            <i class="fas fa-address-card"></i>
            {{contact.address}}
          </li>
          <li>
            <i class="fas fa-building"></i>
            {{contact.company}}
          </li>
          <li>
            <i class="fas fa-phone-square"></i>
            {{contact.homePhone}}
          </li>
          <li>
            <i class="fas fa-mobile-alt"></i>
            {{contact.mobilePhone}}
          </li>
        </ul>
        <span class="delete-contact" @click="removeContact">{{deleteText}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      deleteText: "DELETE"
    };
  },
  props: {
    contact: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: -1
    }
  },
  methods: {
    removeContact() {
      this.deleteText = "WORKING...";
      axios.delete(`http://localhost:3300/contact/${this.contact.id}`)
        .then(resp => {
            this.deleteText = 'DELETE';
            if(resp.data.success){
               this.$emit('on-contact-removed', this.index); 
            }
        })
        .catch(err => {});
    },
    navigate(){
        this.$router.push(`/single-contact/${this.contact.id}`);
    }
  }
};
</script>