<template>
  <div>
    <el-row class="container">
      <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" :offset="1">
        <!--试卷状态-->
        <!--<PaperStatus :sub-id="id" :sub-name="name" />-->
      </el-col>
    </el-row>
    <el-row class="container">
      <el-col :xs="22" :sm="22" :md="8" :lg="8" :xl="8" :offset="0">
        <!--题目控件-->
        <QuestionCategory @questionCategory="changeValue" />
        <!--上传控件-->
        <!--<Files class="app-container" />-->
      </el-col>
      <el-col :xs="22" :sm="22" :md="15" :lg="15" :xl="15" :offset="0">
        <upload />
      </el-col>
    </el-row>
  </div>
</template>

<script>

import QuestionCategory from './components/QuestionCategory'
import Upload from './components/Upload'
// import PaperStatus from './components/PaperStatus'
// import Files from './components/Files'

export default {
  name: 'Index',
  components: {
    QuestionCategory,
    Upload
    // PaperStatus,
    // Files
  },
  data() {
    return {
      questionCategory: '',
      id: '',
      name: ''
    }
  },
  methods: {
    changeValue(value) {
      console.log(value)
      this.questionCategory = value
    }
  }
}
</script>

<style scoped>
.container{
  margin-top: 20px;
}
.app-container{
  margin-top: 20px;
  display: block;
  text-align: center;
}
</style>
