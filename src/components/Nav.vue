<template>
  <div class="cnav">
    <h3 class="logo">
      <i class="fab fa-affiliatetheme"></i> Contact Book
    </h3>
    <ul>
      <li>
        <router-link to="/">
          <i class="fas fa-user-cog"></i> Add New Contact
        </router-link>
      </li>
      <li>
        <router-link to="contacts">
          <i class="fas fa-user-friends"></i> All Contacts
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
};
</script>