<template>
   <div class="columns">
       <DomainListComponent />
  </div>
</template>

<script>
import DomainListComponent from '@/components/DomainListComponent.vue'
export default {
  name: 'DomainList',
  components: {
   DomainListComponent
  }
}
</script>