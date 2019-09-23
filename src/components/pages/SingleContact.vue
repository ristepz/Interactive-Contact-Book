<template>
  <div class="page">
    <h2 class="page-title">
      <i class="fas fa-user-cog"></i> Contact Info
    </h2>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
        contactId: -1
    };
  },
  created() {
      this.contactId = this.$route.params.id;
  }
};
</script>