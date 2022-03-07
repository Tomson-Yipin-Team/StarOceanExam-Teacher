<template>
  <div id="correct-container">
    <panel-group />
  </div>
</template>

<script>
import PanelGroup from '@/views/correct/components/PanelGroup'

export default {
  name: 'Index',
  components: {
    PanelGroup
  }
}
</script>

<style scoped>
#correct-container{
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
}
</style>
