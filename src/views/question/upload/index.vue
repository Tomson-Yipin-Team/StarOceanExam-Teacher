<template>
  <div>
    <el-row class="container">
      <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" :offset="1">
        <PaperStatus :sub-id="id" :sub-name="name" />
      </el-col>
    </el-row>
    <el-row class="container">
      <el-col :xs="22" :sm="22" :md="6" :lg="6" :xl="6" :offset="1">
        <QuestionCategory @questionCategory="changeValue" />
      </el-col>
      <el-col :xs="22" :sm="22" :md="15" :lg="15" :xl="15" :offset="1">
        <upload />
        <Files class="app-container"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import QuestionCategory from './components/QuestionCategory'
import Upload from './components/Upload'
import PaperStatus from './components/PaperStatus'
import Files from './components/Files'

export default {
  name: 'Index',
  components: {
    QuestionCategory,
    Upload,
    PaperStatus,
    Files
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
