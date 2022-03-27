<template>
  <div id="correct-container">
    <panel-group />
    <paper-list />
  </div>
</template>

<script>
import PanelGroup from '@/views/correct/components/PanelGroup'
import PaperList from '@/views/correct/components/PaperList'

export default {
  name: 'Index',
  components: {
    PanelGroup,
    PaperList
  }
}
</script>

<style scoped>
#correct-container{
  /*padding: 32px;*/
  /*background-color: rgb(240, 242, 245);*/
  /*position: relative;*/
}
</style>
