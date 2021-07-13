<template>
   <div class="columns">
     <div class="column">
        <div class="container">
          <ListOfLeadsComponent  />
        </div>
     </div>
  </div>
</template>
<script>

import ListOfLeadsComponent from '@/components/ListOfLeadsComponent.vue'
export default {
  name: 'ListOfLeads',
  components: {
   ListOfLeadsComponent
  }
}
</script>