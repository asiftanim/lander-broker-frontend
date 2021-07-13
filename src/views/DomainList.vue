<template>
   <div class="columns">
     <div class="column">
        <div class="container">
          <DomainListComponent  />
        </div>
     </div>
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