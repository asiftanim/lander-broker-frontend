<template>
   <div class="columns">
       <LoginComponent class="column" />
       <RegistrationComponent class="column" />  
    </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue'
import RegistrationComponent from '@/components/RegistrationComponent.vue'

export default {
  name: 'Auth',
  components: {
    LoginComponent,
    RegistrationComponent
  }
}
</script>