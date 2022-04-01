<template>
  <div>
    <el-row>
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
        <SubHeadingChart />
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <StudentsScore />
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <ExamDescriprion />
      </el-col>
      <el-col :xs="24" :sm="24" :md="4" :lg="8" :xl="8">
        <PieCharts />
      </el-col>
      <el-col :xs="24" :sm="24" :md="14" :lg="10" :xl="10">
        <StudentChart />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PieCharts from '@/views/examination/analyse/components/PieCharts'
import ExamDescriprion from '@/views/examination/analyse/components/ExamDescriprion'
import StudentChart from '@/views/examination/analyse/components/StudentChart'
import SubHeadingChart from '@/views/examination/analyse/components/SubHeadingChart'
import StudentsScore from '@/views/examination/analyse/components/StudentsScore'
export default {
  name: 'Analyse',
  components: {
    PieCharts,
    ExamDescriprion,
    StudentChart,
    SubHeadingChart,
    StudentsScore
  }
}
</script>

<style scoped>

</style>
