<template>
   <div class="columns mt-6">
       <LoginComponent class="column is-half is-offset-one-quarter" />
  </div>
</template>

<script>
 import LoginComponent from '@/components/LoginComponent.vue'
export default {
  name: 'Auth',
  components: {
    LoginComponent

  }
}
</script>