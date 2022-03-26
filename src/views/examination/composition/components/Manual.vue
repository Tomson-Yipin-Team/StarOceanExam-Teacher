<template>
  <div>
    <el-card>
      <choose-question />
    </el-card>
    <el-card>
      <QuesitonList />
    </el-card>
  </div>
</template>

<script>
import QuesitonList from './QuesitonList'
import ChooseQuestion from '@/views/examination/composition/components/ChooseQuestion'
export default {
  name: 'Manual',
  components: {
    QuesitonList,
    ChooseQuestion
  }

}
</script>

<style scoped>

</style>
