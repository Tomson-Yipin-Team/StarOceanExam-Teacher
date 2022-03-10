<template>
  <div>
    <count />
    <student-table />
  </div>
</template>

<script>

import StudentTable from '@/views/classroom/joined/components/StudentTable'
import Count from '@/views/classroom/joined/components/Count'

export default {
  name: 'Index',
  components: { StudentTable, Count }

}
</script>

<style scoped>

</style>
