<template>
  <div>
    <count />
    <action />
    <student-table />
  </div>
</template>

<script>

import StudentTable from './components/StudentTable'
import Count from './components/Count'
import Action from './components/Action'

export default {
  name: 'Index',
  components: { StudentTable, Count, Action }

}
</script>

<style scoped>

</style>
