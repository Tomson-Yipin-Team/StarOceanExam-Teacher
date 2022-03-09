<template>
  <div>
    <el-card class="container">
      <Create></Create>
    </el-card>
  </div>
</template>

<script>

import Create from '@/views/examination/edit/components/Create'

export default {
  components: { Create }
}
</script>

<style scoped>
.container{
  margin:10px 10px 10px
}
</style>

