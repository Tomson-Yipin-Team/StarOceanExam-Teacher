<template>
  <div>
    <el-row class="container" type="flex" justify="center">
      <el-card header="请填写试卷信息" style="width: 70%">
        <choose-question />
      </el-card>
    </el-row>
    <el-row class="container" type="flex" justify="center">
      <el-card style="width: 100%">
        <div slot="header">
          <span>题库</span>
          <el-button icon="el-icon-top-right" class="header-button" type="text">
            前往题库编辑
          </el-button>
        </div>
        <QuestionList />
      </el-card>
    </el-row>
  </div>
</template>

<script>
import QuestionList from './QuesitonList'
import ChooseQuestion from '@/views/examination/composition/components/ChooseQuestion'
export default {
  name: 'Manual',
  components: {
    QuestionList,
    ChooseQuestion
  }

}
</script>

<style scoped>
.header-button{
  float: right;
  padding: 3px 0;
  margin-right: 10px;
}

</style>
