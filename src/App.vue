<template>
  <div>
    <NavbarComponent v-if="isAuthenticated" />
    <router-view/>
  </div>
</template>


<script>

import NavbarComponent from '@/components/NavbarComponent.vue'

export default {
  components: {
   NavbarComponent
  },

  computed: { 
    isAuthenticated() {
        return this.$store.getters.isAuthenticated
    }
  }

}
</script>



