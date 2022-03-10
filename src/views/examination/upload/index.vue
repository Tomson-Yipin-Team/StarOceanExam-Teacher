<template>
  <div>
    <el-row class="container">
      <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" :offset="1">
        <PaperStatus />
      </el-col>
    </el-row>
    <el-row class="container">
      <el-col :xs="22" :sm="22" :md="6" :lg="6" :xl="6" :offset="1">
        <QuestionCategory @questionCategory="changeValue" />
      </el-col>
      <el-col :xs="22" :sm="22" :md="15" :lg="15" :xl="15" :offset="1">
        <upload />
      </el-col>
    </el-row>
  </div>
</template>

<script>

import QuestionCategory from '@/views/examination/upload/components/QuestionCategory'
import Upload from '@/views/examination/upload/components/Upload'
import PaperStatus from '@/views/examination/upload/components/PaperStatus'

export default {
  name: 'Index',
  components: {
    QuestionCategory,
    Upload,
    PaperStatus
  },
  data() {
    return {
      questionCategory: ''
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
</style>
