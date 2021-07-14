<template>
   <div class="columns">
     <div class="column is-half is-offset-one-quarter">
        <ProfileUpdateComponent />
     </div>
  </div>
</template>

<script>
import ProfileUpdateComponent from '@/components/ProfileUpdateComponent.vue'
export default {
  name: 'ProfileUpdate',
  components: {
    ProfileUpdateComponent
  }
}
</script>