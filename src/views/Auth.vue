<template>
   <div class="mt-6">
      <LoginComponent />
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